import { useFormStore } from '@/store/formStore';
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';

function FormModal() {
  const isOpen = useFormStore(s => s.isOpen);
  const onClose = useFormStore(s => s.onClose);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='lg'>
      <ModalOverlay />

      <ModalContent width='100%' maxW='860px'>
        <ModalCloseButton />
        <ModalBody height='1000px' width='1000px'>
          <Box height='1000px' width='800px'>
            <iframe src="https://jinshuju.net/f/mhaBCE" height='100%' width='100%'></iframe>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default FormModal;
