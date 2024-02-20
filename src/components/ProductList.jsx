import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductTile from "./ProductTile";
import { fetchProducts } from "../actions";

export default function ProductList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);
  const isLoading = useSelector((state) => state.products.isLoading);
  useEffect(() => {
    fetchProducts(dispatch, 1);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="productList">
          {productList.length
            ? productList.map((productDetails) => (
                <ProductTile
                  key={productDetails.id}
                  productDetails={productDetails}
                />
              ))
            : null}
        </div>
      )}
    </>
  );
}
