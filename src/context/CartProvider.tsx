import { ReactNode, useReducer } from "react";
import { cartContext } from "./cart-context";
import { CartItemType } from "../components/Cart/Cart";

function reducer(
  state: CartItemType[],
  action: { payload: CartItemType; type: "ADD" | "REMOVE" }
) {
  if (action.type === "ADD") {
    return [...state, action.payload];
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
  function remove() {
    dispatch("REMOVE");
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
