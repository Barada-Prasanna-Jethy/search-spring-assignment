import axios from "axios";
const BASE_URL = "https://api.searchspring.net/api/search/search.json?";
export const fetchProductsApi = (pageNo, searchText) =>
  axios.get(
    `${BASE_URL}${
      searchText ? `q=${searchText}` : ""
    }&resultsFormat=native&page=${pageNo}&siteId=scmq7n`
  );
