import React from "react";

const Pagination = ({
  totalPages,
  currentPage,
  handlePageChange,
  handlePreviousPage,
  handleNextPage,
}) => {
  const paginationItems = [];

  if (totalPages <= 5) {
    // Render all page buttons if total pages are less than or equal to 5
    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <button
          key={i}
          className={`px-4 py-2 mx-1 rounded-md ${
            i === currentPage
              ? "bg-pink-600 text-white"
              : "bg-gray-200 text-gray-900"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
  } else {
    // Render 5 page buttons and navigation arrows for more than 5 total pages
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(startPage + 4, totalPages);

    if (startPage > 1) {
      paginationItems.push(
        <button
          key="previous"
          className="px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-900"
          onClick={handlePreviousPage}
        >
          &lt;
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <button
          key={i}
          className={`px-4 py-2 mx-1 rounded-md ${
            i === currentPage
              ? "bg-pink-600 text-white"
              : "bg-gray-200 text-gray-900"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      paginationItems.push(
        <button
          key="next"
          className="px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-900"
          onClick={handleNextPage}
        >
          &gt;
        </button>
      );
    }
  }

  return <div>{paginationItems}</div>;
};

export default Pagination;
