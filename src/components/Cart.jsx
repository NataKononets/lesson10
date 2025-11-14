import { useCart } from "../CartContext";

export default function Cart() {
  const { cartItems, removeOne, removeAll, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <h5>Корзина</h5>
        {cartItems.length > 0 && (
          <button className="btn btn-sm btn-outline-danger" onClick={clearCart}>
            Очистити
          </button>
        )}
      </div>

      <ul className="list-group list-group-flush">
        {cartItems.length === 0 && (
          <li className="list-group-item text-muted">Порожньо</li>
        )}

        {cartItems.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.title}</strong>
              <br />
              {item.price} $ × {item.quantity}
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => removeOne(item.id)}
              >
                −
              </button>

              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeAll(item.id)}
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="card-footer fw-bold">Сума: {totalPrice} $</div>
    </div>
  );
}