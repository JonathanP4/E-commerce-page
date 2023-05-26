import { ReactNode, useReducer } from "react";
import { cartContext } from "./cart-context";
import { CartItemType } from "../components/Cart/Cart";

function reducer(
  state: CartItemType[],
  action: { payload?: CartItemType; type: "ADD" | "REMOVE"; id?: number }
) {
  if (action.type === "ADD" && action.payload) {
    const exists = state.findIndex(
      (item) => item.name === action.payload?.name
    );
    if (exists !== -1) {
      console.log(action.payload.quantity);
      state[exists].quantity += action.payload.quantity;
      return [...state];
    }
    return [...state, action.payload];
  } else if (action.type === "REMOVE") {
    const updatedState = state.filter((item) => item.id !== action.id);
    return updatedState;
  } else {
    return state;
  }
}

const init: CartItemType[] = [];

export default function CartProvider(props: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, init);

  function add(item: CartItemType) {
    dispatch({ payload: item, type: "ADD" });
  }
  function remove(id: number) {
    dispatch({ type: "REMOVE", id });
  }

  const initialValue = {
    items: state,
    add,
    remove,
  };
  return (
    <cartContext.Provider value={initialValue}>
      {props.children}
    </cartContext.Provider>
  );
}
