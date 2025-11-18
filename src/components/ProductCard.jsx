import { useCart } from "../CartContext";

export default function ProductCard({ product }) {
  const { cartItems, addToCart } = useCart();
  const inCart = cartItems.find((item) => item.id === product.id);
  const inCartQty = inCart ? inCart.quantity : 0;
  const left = product.stock - inCartQty;
  const isOutOfStock = left <= 0;

  return (
       <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text flex-grow-1">{product.description}</p>

        <p className="text-muted">
          В наявності: {left > 0 ? left : 0} шт.
        </p>

        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">{product.price} $</span>

          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
            disabled={isOutOfStock}
          >
            {isOutOfStock ? "Немає в наявності" : "Додати"}
          </button>
        </div>
      </div>
    </div>
  );
}