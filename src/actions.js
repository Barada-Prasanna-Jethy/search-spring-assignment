import { PRODUCT_ACTIONS, CART_ACTIONS } from "./constants/actionTypes";
import { fetchProductsApi } from "./api";
import { getPaginationData } from "./utils";

export const fetchProducts = async (dispatch, pageNo, searchText) => {
  try {
    dispatch({
      type: PRODUCT_ACTIONS.SET_LOADING,
      payload: true,
    });
    const productResponse = await fetchProductsApi(pageNo, searchText).then(
      (res) => res.data
    );
    const { totalPages, currentPage } = getPaginationData(productResponse);
    dispatch({
      type: PRODUCT_ACTIONS.SET_LOADING,
      payload: false,
    });
    dispatch({
      type: PRODUCT_ACTIONS.FETCH_PRODUCT,
      payload: {
        products: productResponse.results,
        totalPages,
        currentPage,
        searchText,
      },
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ACTIONS.SET_LOADING,
      payload: false,
    });
    console.log(err);
  }
};

export const addToCart = async (dispatch) => {
  dispatch({
    type: CART_ACTIONS.ADD_TO_CART,
  });
};
