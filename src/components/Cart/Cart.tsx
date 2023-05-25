import "./Cart.scss";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import { useContext } from "react";
import { cartContext } from "../../context/cart-context";

export type CartItemType = {
  thumbnail: string;
  name: string;
  price: number;
  old_price: number;
  quantity: number;
  id: number;
};

export default function Cart() {
  const cartState = useContext(cartContext);

  return (
    <div className="rounded-xl cart-popup absolute top-24 left-4 right-4 grid bg-white z-20">
      <h3 className="font-bold p-5">Cart</h3>
      <div className="divider bg-gray-200"></div>
      <div className="cart-items-container text-gray-500 p-5 grid gap-4">
        {cartState.items.length === 0 && (
          <span className="font-bold text-gray-500 grid self-center justify-self-center">
            Your cart is empty
          </span>
        )}
        {cartState.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        {cartState.items.length > 0 && <Button>Checkout</Button>}
      </div>
    </div>
  );
}
