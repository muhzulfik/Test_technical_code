"use client";
import {
  Text,
  Center,
  Container,
  Input,
  Button,
  VStack,
  Flex,
  Stack,
  Spacer,
  HStack,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { showAlert } from "../../molecules/Swal";
import SearchInput from "../../molecules/Search";
import { Modals } from "../../molecules/Modal";
import Pagination from "../../organism/Pagination";

export default function MainPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [dataTable, setDataTable] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [entriesToShow, setEntriesToShow] = useState(10);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = dataTable.length;
  const totalPages = Math.ceil(totalItems / entriesToShow);
  const startIndex = (currentPage - 1) * entriesToShow;
  const endIndex = Math.min(startIndex + entriesToShow - 1, totalItems - 1);
  const paginatedData = dataTable.slice(startIndex, endIndex + 1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // add dataTable
  const handleOnSubmit = (data) => {
    console.log("ini merupakan data", data);
    let dataReal = {
      name: data.name,
      description: data.description,
      effectiveDate: "this date",
      status: "this status",
    };
    setDataTable([...dataTable, dataReal]);
    showAlert("Success", "Success add task", "success");
    reset();
    onClose();
  };

  console.log("ini merupakan form data", dataTable);

  const handleAddData = (index) => {
    onOpen();
  };

  // search
  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  const filteredDataTable = dataTable.filter((data) =>
    data.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxW="6xl" minH={"100vh"} py="10">
      <Center>
        <Text textStyle={"title-medium"} fontWeight={"extrabold"}>
          Data Table App
        </Text>
      </Center>
      <Flex justifyContent="flex-end">
        <Button
          leftIcon={<AddIcon />}
          variant="blue"
          onClick={() => handleAddData()}
        >
          Add New
        </Button>
      </Flex>
      <VStack spacing={4} mt={8}>
        <Flex width={"full"}>
          <HStack>
            <Text>Show</Text>
            <Select
              id="entries"
              onChange={(e) => setEntriesToShow(Number(e.target.value))}
              value={entriesToShow}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
            </Select>
            <Text>Entries</Text>
          </HStack>
          <Spacer />
          <SearchInput onSearch={handleSearch} />
        </Flex>
        <Stack
          borderWidth="2px"
          borderRadius={"lg"}
          p="2"
          width={"full"}
          spacing={"4"}
        >
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Description</Th>
                  <Th>Effective Date</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              {searchTerm ? (
                filteredDataTable?.length !== 0 ? (
                  <>
                    {filteredDataTable.map((data) => (
                      <Tbody>
                        <Tr>
                          <Td>{data.name}</Td>
                          <Td>{data.description}</Td>
                          <Td>{data.effectiveDate}</Td>
                          <Td>{data.status}</Td>
                          <Td>-</Td>
                        </Tr>
                      </Tbody>
                    ))}
                  </>
                ) : (
                  <Center>
                    <Text>Data Not Found</Text>
                  </Center>
                )
              ) : paginatedData?.length !== 0 ? (
                <>
                  {paginatedData.map((data) => (
                    <Tbody>
                      <Tr>
                        <Td>{data.name}</Td>
                        <Td>{data.description}</Td>
                        <Td>{data.effectiveDate}</Td>
                        <Td>{data.status}</Td>
                        <Td>-</Td>
                      </Tr>
                    </Tbody>
                  ))}
                </>
              ) : (
                <Center>
                  <Text>Data Not Found</Text>
                </Center>
              )}
            </Table>
          </TableContainer>
        </Stack>
        <Modals
          modalHeader={"Add Data"}
          isOpen={isOpen}
          onClose={onClose}
          // submit={handleEditSubmit}
        >
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <FormControl my={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" {...register("name")} />
            </FormControl>

            <FormControl my={4}>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="description"
                {...register("description")}
              />
            </FormControl>

            <Text>Rule Component</Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Rule Type</Th>
                  <Th>Rule Name</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                </Tr>
              </Tbody>
            </Table>
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </form>
        </Modals>
      </VStack>
      <Flex justifyContent="flex-end">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Flex>
    </Container>
  );
}
