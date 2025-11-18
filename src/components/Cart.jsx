import { useCart } from "../CartContext";

export default function Cart() {
  const { cartItems, addToCart, removeOne, removeAll, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <h5 className="mb-0">Корзина</h5>

        {cartItems.length > 0 && (
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={clearCart}
          >
            Очистити
          </button>
        )}
      </div>

      <ul className="list-group list-group-flush">
        {cartItems.length === 0 && (
          <li className="list-group-item text-muted">Порожньо</li>
        )}

        {cartItems.map((item) => {
          const isMax = item.quantity >= (item.stock ?? Infinity);

          return (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{item.title}</strong>
                <br />
                {item.price} $ × {item.quantity}
                <br />
                <small className="text-muted">
                  Залишилось: {Math.max((item.stock ?? 0) - item.quantity, 0)} шт.
                </small>
              </div>

              <div className="d-flex gap-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  title="Зменшити кількість"
                  onClick={() => removeOne(item.id)}
                >
                  <i className="bi bi-dash"></i>
                </button>

                <button
                  className="btn btn-sm btn-outline-secondary"
                  title="Збільшити кількість"
                  onClick={() => addToCart(item)}
                  disabled={isMax}
                >
                  <i className="bi bi-plus"></i>
                </button>

                <button
                  className="btn btn-sm btn-outline-danger"
                  title="Видалити товар"
                  onClick={() => removeAll(item.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="card-footer fw-bold">Сума: {totalPrice} $</div>
    </div>
  );
}