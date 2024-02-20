import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../actions";

export default function Pagination() {
  const currentPage = useSelector((state) => state.products.currentPage);
  const totalPages = useSelector((state) => state.products.totalPages);
  const searchText = useSelector((state) => state.products.searchText);

  const [pageNos, setPageNos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const pages = [];
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      if (i > 0 && i <= totalPages) {
        pages.push(i);
      }
    }
    setPageNos(pages);
  }, [currentPage, totalPages]);

  const onPageChange = (pageNo) => {
    fetchProducts(dispatch, pageNo, searchText);
  };

  return (
    <div className="paginationContainer">
      <button
        disabled={currentPage <= 1}
        className={`${currentPage <= 1 ? "disabled" : ""} button`}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      {pageNos.map((page) => (
        <div
          className={`${currentPage === page ? "active" : ""} button`}
          onClick={() => onPageChange(page)}
          key={page}
        >
          {page}
        </div>
      ))}
      <button
        disabled={currentPage === totalPages}
        className={`${currentPage === totalPages ? "disabled" : ""} button`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
