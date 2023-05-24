import plusIcon from "/images/icon-plus.svg";
import minusIcon from "/images/icon-minus.svg";
import "./AddItems.scss";
import useCount from "../../hooks/use-count";

export default function AddItems() {
  const { increase, decrease, count } = useCount(0);

  return (
    <div className="add-items flex items-center justify-between rounded-lg bg-gray-100 mb-4">
      <img onClick={decrease} src={minusIcon} alt="icon-minus" />
      <span className="font-bold">{count}</span>
      <img onClick={increase} src={plusIcon} alt="icon-plus" />
    </div>
  );
}
