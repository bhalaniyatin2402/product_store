import { useDispatch, useSelector } from "react-redux";
import { remove, cartTotal } from "../../store/cartSlice";
import IncDecInput from "../../components/IncDecInput/IncDecInput";
import { useEffect } from "react";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const {
    items: products,
    totalQuantity,
    totalPrice,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(cartTotal());
  });

  if (products.length <= 0) {
    return <h2 style={{ textAlign: "center" }}>cart is empty!</h2>;
  }

  return (
    <section className="cart-container">
      <h2>Cart</h2>
      {products.map((product) => (
        <div className="cart-card" key={product.id}>
          <img src={product.image} alt="" className="cart-image" />
          <h4>{product.title}</h4>
          <h4>{product.price}</h4>
          <div className="quantity-wraper">
            <IncDecInput product={product} />
          </div>
          <button
            className="btn cart-remove-btn"
            onClick={() => dispatch(remove(product.id))}
          >
            Remove
          </button>
        </div>
      ))}
      <h4>
        Total Quantity : {totalQuantity} &nbsp;&nbsp;&nbsp; Total price :{" "}
        {totalPrice.toFixed(2)}₹
      </h4>
    </section>
  );
}

export default Cart;
