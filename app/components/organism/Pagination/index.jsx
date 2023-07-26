import React from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const prevPage = () => {
    onPageChange(currentPage - 1);
  };

  const nextPage = () => {
    onPageChange(currentPage + 1);
  };

  const goToPage = (page) => {
    onPageChange(page);
  };

  const generatePageButtons = () => {
    const buttons = [];
    for (let page = 1; page <= totalPages; page++) {
      buttons.push(
        <Button
          key={page}
          onClick={() => goToPage(page)}
          colorScheme={page === currentPage ? "blue" : "gray"}
        >
          {page}
        </Button>
      );
    }
    return buttons;
  };

  return (
    <Box textAlign="center" mt={4}>
      <ButtonGroup>
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          colorScheme="blue"
        >
          Previous
        </Button>
        {generatePageButtons()}
        <Button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          colorScheme="blue"
        >
          Next
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;
