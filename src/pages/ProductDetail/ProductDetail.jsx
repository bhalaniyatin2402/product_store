import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import useProductDetails from "../../hooks/useProductDetail";
import IncDecInput from "../../components/IncDecInput/IncDecInput";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useProductDetails(id);

  function handleAdd() {
    dispatch(add({ ...product.productDetail, quantity: product.quantity }));
  }

  return (
    <section className="product-detail-container">
      <div className="product-detail-left">
        <img src={product.productDetail.image} alt="" />
      </div>
      <div className="product-detail-right">
        <h2 className="product-detail-title">{product.productDetail.title}</h2>
        <p className="product-detail-price">{product.productDetail.price}₹</p>
        <p className="product-detail-category">
          {product.productDetail.category}
        </p>
        <p className="product-detail-description">
          {product.productDetail.description}
        </p>
        <IncDecInput
          product={product}
          setProduct={setProduct}
          productQty={product.quantity}
        />
        <button className="btn cart-add-btn" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetail;
