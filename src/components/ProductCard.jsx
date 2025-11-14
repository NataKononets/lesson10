import { useCart } from "../CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text flex-grow-1">{product.description}</p>

        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">{product.price} $</span>

          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Додати
          </button>
        </div>
      </div>
    </div>
  );
}