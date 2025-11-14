import { CartProvider } from "./CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  return (
    <CartProvider>
      <div className="container py-4">
        <h1 className="mb-4">Lesson 10 — Контекст + Корзина</h1>

        <div className="row">
          <div className="col-md-8">
            <ProductList />
          </div>

          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}