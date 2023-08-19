import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, STATUSES } from "../../store/productSlice";
import { add } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  function handleAdd(product) {
    dispatch(add({ ...product, quantity: 1 }));
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} className="product-image" />
          </Link>
          <h3>{product.title}</h3>
          <h2>{product.price}</h2>
          <button
            className="product-to-cart btn"
            onClick={() => handleAdd(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
