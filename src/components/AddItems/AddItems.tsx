import plusIcon from "/images/icon-plus.svg";
import minusIcon from "/images/icon-minus.svg";
import "./AddItems.scss";

export default function AddItems(props: {
  count: number;
  increase: () => void;
  decrease: () => void;
}) {
  return (
    <div className="add-items flex items-center justify-between rounded-lg bg-gray-100 mb-4 md:mb-0">
      <img onClick={props.decrease} src={minusIcon} alt="icon-minus" />
      <span className="font-bold">{props.count}</span>
      <img onClick={props.increase} src={plusIcon} alt="icon-plus" />
    </div>
  );
}
