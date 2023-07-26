// SearchInput.test.js

import { render, screen, fireEvent } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import SearchInput from ".";

const mockOnSearch = jest.fn();

test("should update query when typing in the input", () => {
  render(
    <ChakraProvider>
      <SearchInput onSearch={mockOnSearch} />
    </ChakraProvider>
  );

  const inputElement = screen.getByPlaceholderText("Search...");
  const inputValue = "Hello, World!";

  fireEvent.change(inputElement, { target: { value: inputValue } });

  expect(inputElement.value).toBe(inputValue);

  expect(mockOnSearch).toHaveBeenCalledWith(inputValue);
});

test("should call onSearch when the search icon button is clicked", () => {
  render(
    <ChakraProvider>
      <SearchInput onSearch={mockOnSearch} />
    </ChakraProvider>
  );

  const inputElement = screen.getByPlaceholderText("Search...");
  const inputValue = "Hello, World!";

  fireEvent.change(inputElement, { target: { value: inputValue } });

  const searchButton = screen.getByLabelText("Search");

  fireEvent.click(searchButton);

  expect(mockOnSearch).toHaveBeenCalledWith(inputValue);
});
