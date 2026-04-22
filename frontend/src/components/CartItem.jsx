import { getProductImage } from '../utils/productImages.js';

export default function CartItem({ item, onUpdateQuantity, onRemove, isUpdating }) {
  const product = item.product;

  return (
    <article className="cart-item">
      <img src={getProductImage(product)} alt={product.name} className="cart-item-image" />
      <div className="cart-item-main">
        <p className="eyebrow">{product.category_name}</p>
        <h3>{product.name}</h3>
        <p className="muted">${product.price} each</p>
      </div>
      <div className="cart-item-controls">
        <div className="cart-quantity">
          <label htmlFor={`quantity-${item.id}`}>Quantity</label>
          <input
            id={`quantity-${item.id}`}
            type="number"
            min="1"
            max={product.stock}
            value={item.quantity}
            disabled={isUpdating}
            onChange={(event) => onUpdateQuantity(item.id, Number(event.target.value))}
          />
        </div>
        <div className="cart-item-total">
          <span>Item total</span>
          <strong>${item.item_total}</strong>
        </div>
        <button
          type="button"
          className="remove-button"
          disabled={isUpdating}
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
}
