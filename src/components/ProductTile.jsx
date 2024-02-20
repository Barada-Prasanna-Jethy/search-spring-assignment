import { useDispatch } from "react-redux";
import { addToCart } from "../actions";

export default function ProductTile({ productDetails }) {
  const dispatch = useDispatch();
  const onAddtoCart = () => {
    addToCart(dispatch);
  };
  return (
    <div className="productContainer">
      <img className="productImage" src={productDetails.imageUrl}></img>
      <div className="productName">{productDetails.name}</div>
      <div className="productDetails">
        <div className="priceContainer">
          {productDetails.msrp && productDetails.msrp > productDetails.price ? (
            <div className="beforeDiscount">{`$${productDetails.msrp}`}</div>
          ) : null}
          <div className="productPrice">{`$${productDetails.price}`}</div>
        </div>
        <button onClick={onAddtoCart} className="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
