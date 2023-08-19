import { useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../store/cartSlice";
import "./IncDecInput.css";

function IncDecInput({ product, productQty, setProduct }) {
  const dispatch = useDispatch();

  function handleDecrement() {
    if (productQty) {
      if (product.quantity <= 1) {
        return setProduct((state) => ({ ...state, quantity: 1 }));
      } else {
        return setProduct((state) => ({
          ...state,
          quantity: product.quantity - 1,
        }));
      }
    }
    dispatch(decreaseItemQuantity(product.id));
  }

  function handleIncrement() {
    if (productQty) {
      if (product.quantity >= 10) {
        return setProduct((state) => ({ ...state, quantity: 10 }));
      } else {
        return setProduct((state) => ({
          ...state,
          quantity: product.quantity + 1,
        }));
      }
    }
    dispatch(increaseItemQuantity(product.id));
  }

  return (
    <div>
      <button className="product-quantity-dec btn" onClick={handleDecrement}>
        -
      </button>
      <input
        className="product-quantity-input btn"
        disabled
        value={productQty ? productQty : product.quantity}
      />
      <button className="product-quantity-inc btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default IncDecInput;
