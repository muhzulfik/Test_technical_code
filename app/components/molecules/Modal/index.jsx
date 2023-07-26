import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export const Modals = ({ isOpen, onClose, modalHeader, children, submit }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalHeader}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {/* <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={submit}>
            Submit
          </Button>
          <Button colorScheme="red" onClick={onClose}>
            Close
          </Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};
