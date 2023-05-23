import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import Product from "./components/Product/Product";

function App() {
  return (
    <main>
      <Navbar />
      <Product title="Fall Limited Edition Sneakers" price={"125.00"} />
    </main>
  );
}

export default App;
