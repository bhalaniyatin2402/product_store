import { useEffect, useState } from "react";

function useProductDetails(id) {
  const [product, setProduct] = useState({
    productDetail: {},
    quantity: 1,
  });

  useEffect(() => {
    const productData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await res.json();
      setProduct({ productDetail: result, quantity: 1 });
    };
    productData();

    return setProduct({ productDetail: {}, quantity: 1 });
  }, []);

  return [product, setProduct];
}

export default useProductDetails;
