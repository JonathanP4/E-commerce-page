import { intlFormatNum } from "../../helpers/number-format";
import { CartItemType } from "../Cart/Cart";
import deleteIcon from "/images/icon-delete.svg";
import "./CartItem.scss";
import { useContext } from "react";
import { cartContext } from "../../context/cart-context";

export default function CartItem(props: { item: CartItemType }) {
  const { item } = props;
  const total = intlFormatNum.format(item.price * item.quantity);
  const price = intlFormatNum.format(item.price);
  const ctx = useContext(cartContext);

  function deleteItem() {
    ctx.remove(item.id);
  }

  return (
    <div className="item">
      <img className="rounded-md" src={item.thumbnail} alt="" />
      <div className="item-text text-gray-500">
        <p>{item.name}</p>
        <span>
          {price} x {item.quantity}
        </span>
        <span className="ml-2 text-black font-bold">{total}</span>
      </div>
      <img
        className="cursor-pointer"
        onClick={deleteItem}
        src={deleteIcon}
        alt="delete item"
      />
    </div>
  );
}
