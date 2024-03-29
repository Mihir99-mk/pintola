import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { FaCartPlus, FaContao, FaPhone, FaSearch } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Badge, Flex, IconButton } from "@chakra-ui/react";
import Logo from "../assets/img/pintola_logo.jpeg";
import Products from "./Products";
import { useStore } from "../hooks/useStore";

const Menus = () => {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const cart = useStore((state) => state.cart);
  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);

  return (
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

        <Link to={"/about"}>
        About Us

        </Link>

        <Link to={"/contact"}>
        Contact Us

        </Link>

        <Link to={"/order"} className="bg-orange-400 text-white px-4 py-2 rounded-3xl">
          Track Your Order
        </Link>
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

        {/* <IconButton
          variant={"link"}
          rounded={"full"}
          aria-label="Contact"
          icon={<FaPhone />}
          className="hover:text-orange-500"
        /> */}
      </div>
    </div>
  );
};

export default Menus;
