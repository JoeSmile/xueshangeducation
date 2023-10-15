import { useFormStore } from '@/store/formStore';
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';

function FormModal() {
  const isOpen = useFormStore(s => s.isOpen);
  const onClose = useFormStore(s => s.onClose);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent overflow='auto' width='860px' padding={0} paddingTop='20px'>
        <ModalCloseButton  />
        <ModalBody height='600px' p={0}>
          <Box height='600px' zIndex='100'>
            <iframe src="https://jinshuju.net/f/mhaBCE" height='100%' width='100%'></iframe>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default FormModal;
