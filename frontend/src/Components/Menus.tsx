import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  IconButton,
  Badge,
  Flex,
  Text,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Input,
} from "@chakra-ui/react";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import Logo from "../assets/img/pintola_logo.jpeg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useStore } from "../hooks/useStore";
import SearchProduct from "./SearchProduct";

const Menus = () => {
  const [search, setSearch] = useState("");
  const cart = useStore((state) => state.cart);
  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearchButtonClick = () => {
    onOpen();
  };

  const handleModalClose = () => {
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleModalClose} size={"full"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Input
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
             
            </Flex>
            <Flex mt={4}>
            <SearchProduct ctName={search} />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

      <div className="w-full h-20 bg-[#FCF7EF] flex justify-around items-center static border-b-2 border-orange-500">
        <div className="w-1/6 flex justify-start items-center pl-4">
          <Link to={"/"}>
            <img src={Logo} width={140} height={140} alt="logo" />
          </Link>
        </div>

        <div className="text-gray-500 w-1/3 flex justify-around items-center">
          <Link to={"/store"} className="hover:text-orange-500">
            Store
          </Link>
          <Link to={"/recipe"} className="hover:text-orange-500">
            Recipe
          </Link>
          <Link to={"/about"} className="hover:text-orange-500">
            About Us
          </Link>
          <Link to={"/contact"} className="hover:text-orange-500">
            Contact Us
          </Link>
          <IconButton
            aria-label="search"
            icon={<FaSearch />}
            onClick={handleSearchButtonClick}
          />
        </div>

        <div className="text-gray-500 w-1/6 flex justify-end items-center pr-4">
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          <IconButton
            variant={"link"}
            rounded={"full"}
            aria-label="Search"
            icon={<FaSearch />}
            className="hover:text-orange-500"
          />

          <Link to={"/cart"} className="relative">
            <IconButton
              variant={"link"}
              rounded={"full"}
              aria-label="Cart"
              icon={<FaCartPlus />}
              className="hover:text-orange-500"
            />
            {totalCount > 0 && (
              <Badge
                colorScheme="orange"
                fontSize="sm"
                position="absolute"
                top="-2"
                right="-2"
              >
                {totalCount}
              </Badge>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menus;
