
import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = 5; 

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination-container  container">
      <Pagination>
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(maxVisiblePages).keys()].map((_, index) => {
          const pageNumber = index + 1;
          return (
            pageNumber <= totalPages && (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            )
          );
        })}
        {totalPages > maxVisiblePages && (
          <>
            <Pagination.Ellipsis />
            <Pagination.Item
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </Pagination.Item>
          </>
        )}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default PaginationControls;
