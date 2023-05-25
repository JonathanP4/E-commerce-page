import { createContext } from "react";
import { CartItemType } from "../components/Cart/Cart";

const init: CartItemType[] = [];

export const cartContext = createContext({
  items: init,
  add: (item: CartItemType, action: "ADD" | "REMOVE") => {
    return item;
  },
  remove: (b: any) => {
    return b;
  },
});
