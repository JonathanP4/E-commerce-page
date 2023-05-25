import { intlFormatNum } from "../../helpers/number-format";
import { CartItemType } from "../Cart/Cart";
import deleteIcon from "/images/icon-delete.svg";
import "./CartItem.scss";

export default function CartItem(props: { item: CartItemType }) {
  const { item } = props;
  const price = intlFormatNum.format(item.price);

  return (
    <div className="item">
      <img className="rounded-md" src={item.thumbnail} alt="" />
      <div className="item-text text-gray-500">
        <p>{item.name}</p>
        <span>
          {price} x {item.quantity}
        </span>
      </div>
      <img src={deleteIcon} alt="delete item" />
    </div>
  );
}
