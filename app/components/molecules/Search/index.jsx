import {
  Input,
  IconButton,
  InputRightElement,
  InputGroup,
  Text,
  HStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <HStack width={"sm"}>
      <Text>Search:</Text>
      <Input
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
    </HStack>
  );
};

export default SearchInput;
