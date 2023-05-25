import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";

const details = {
  description: `These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.`,
  title: "Fall Limited Edition Sneakers",
  price: 125,
  old_price: 250,
};

function App() {
  return (
    <main>
      <CartProvider>
        <Cart />
        <Navbar />
        <Product details={details} />
      </CartProvider>
    </main>
  );
}

export default App;
