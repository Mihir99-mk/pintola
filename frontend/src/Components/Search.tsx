import React from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';

type Props = {
    isOpen: boolean;
    onClose: ()=>void;
    onOpen: ()=> void;
}
const Search = ({isOpen, onClose, onOpen }:Props) => {

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button> 
            <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button> {/* Button to close the modal */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Search;
