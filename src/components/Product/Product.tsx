import { useContext } from "react";
import { intlFormatNum } from "../../helpers/number-format";
import useCount from "../../hooks/use-count";
import AddItems from "../AddItems/AddItems";
import AddToCart from "../AddToCart/AddToCart";
import Slide from "../Slide/Slide";
import { cartContext } from "../../context/cart-context";

export default function Product(props: {
  details: {
    title: string;
    price: number;
    description: string;
    old_price: number;
  };
}) {
  const ctx = useContext(cartContext);
  const { details } = props;
  const oldPrice = intlFormatNum.format(details.old_price);
  const price = intlFormatNum.format(details.price);
  const { increase, decrease, count, setCount } = useCount(0);

  function addToCart() {
    if (count < 1) {
      return;
    }
    setCount(0);
    ctx.add({
      thumbnail: "/images/image-product-1-thumbnail.jpg",
      name: details.title,
      price: details.price,
      old_price: details.old_price,
      quantity: count,
      id: ctx.items.length,
    });
  }

  return (
    <div>
      <Slide />
      <div className="p-4">
        <span className="tracking-widest text-orange-500 text-xs uppercase font-bold">
          Sneaker Company
        </span>
        <h1 className="my-4 text-3xl font-bold">{details.title}</h1>
        <p className="text-gray-500">{details.description}</p>
        <div className="my-6 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-3xl font-bold mr-4">{price}</span>
            <span className="px-2 font-bold rounded-sm bg-orange-100 text-orange-500">
              50%
            </span>
          </div>
          <span className="line-through text-gray-400 font-bold">
            {oldPrice}
          </span>
        </div>
        <AddItems increase={increase} decrease={decrease} count={count} />
        <AddToCart clickEvent={addToCart} />
      </div>
    </div>
  );
}
