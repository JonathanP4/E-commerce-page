import plusIcon from "/images/icon-plus.svg";
import minusIcon from "/images/icon-minus.svg";
import "./AddItems.scss";

export default function AddItems() {
  return (
    <div className="add-items flex items-center justify-between rounded-lg bg-gray-100 mb-4">
      <img src={minusIcon} alt="icon-minus" />
      <span className="font-bold">0</span>
      <img src={plusIcon} alt="icon-plus" />
    </div>
  );
}
