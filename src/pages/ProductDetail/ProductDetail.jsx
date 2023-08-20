import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import IncDecInput from "../../components/IncDecInput/IncDecInput";
import { useGetProductByIdQuery } from "../../services/fakestoreApi";
import "./ProductDetail.css";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { data, isLoading, isError } = useGetProductByIdQuery(id);
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(add({ ...product, quantity: product.quantity }));
  }

  useEffect(() => {
    setProduct({ ...data, quantity: 1 });
  }, [data]);

  if (isLoading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  if (isError) return <h2>something went wrong!</h2>;

  return (
    <section className="product-detail-container">
      <div className="product-detail-left">
        <img src={product.image} alt="" />
      </div>
      <div className="product-detail-right">
        <h2 className="product-detail-title">{product.title}</h2>
        <p className="product-detail-price">{product.price}₹</p>
        <p className="product-detail-category">{product.category}</p>
        <p className="product-detail-description">{product.description}</p>
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
