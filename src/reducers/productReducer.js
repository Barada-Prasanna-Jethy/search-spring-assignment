import { PRODUCT_ACTIONS } from "../constants/actionTypes";

const initialState = {
  productList: [],
  currentPage: 1,
  totalPages: 1,
  searchText: "",
  isLoading: false,
};
export default function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_ACTIONS.FETCH_PRODUCT:
      return {
        ...state,
        productList: action.payload.products,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
        searchText: action.payload.searchText,
      };
    case PRODUCT_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
