import AddItems from "../AddItems/AddItems";
import AddToCart from "../AddToCart/AddToCart";
import Slide from "../Slide/Slide";

export default function Product(props: { title: string; price: string }) {
  return (
    <div>
      <Slide />
      <div className="p-4">
        <span className="tracking-widest text-orange-500 text-xs uppercase font-bold">
          Sneaker Company
        </span>
        <h1 className="my-4 text-3xl font-bold">{props.title}</h1>
        <p className="text-gray-500">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="my-6 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-3xl font-bold mr-4">${props.price}</span>
            <span className="px-2 font-bold rounded-sm bg-orange-100 text-orange-500">
              50%
            </span>
          </div>
          <span className="line-through text-gray-400 font-bold">$250.00</span>
        </div>
        <AddItems />
        <AddToCart />
      </div>
    </div>
  );
}
