import { createContext } from "react";
import { CartItemType } from "../components/Cart/Cart";

const init: CartItemType[] = [];

export const cartContext = createContext({
  items: init,
  add: (item: CartItemType) => {
    item;
    return;
  },
  remove: (id: number) => {
    id;
    return;
  },
});
