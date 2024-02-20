export const getPaginationData = (response) => ({
  currentPage: response.pagination.currentPage,
  totalPages: response.pagination.totalPages,
});
