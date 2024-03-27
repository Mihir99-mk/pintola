import React, { useState } from "react";
import { Product } from "../types/Products";
import Logo from "../assets/img/pintola_logo.jpeg";
import { Badge, Flex, IconButton } from "@chakra-ui/react";
import { FaCartPlus, FaContao, FaSearch, FaUser } from "react-icons/fa";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import Products from "./Products";
import { product } from "../utils/products";
import { Link } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Menus = () => {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const cart = useStore((state) => state.cart);

  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);

  console.log(totalCount);

  return (
    <>
      <div
        className="w-auto h-20 bg-[#FCF7EF]  flex justify-evenly items-center static"
        style={{ borderBottom: "2px solid orange" }}
      >
        <div className="w-1/6 flex justify-start items-center">
          <img src={Logo} width={140} height={140} alt="logo" />
        </div>
        <div className="text-gray-500 w-1/2 flex justify-around items-center">
          <div
            // onMouseEnter={() => setIsFlyoutOpen(true)}
            // onMouseLeave={() => setIsFlyoutOpen(false)}
            // onClick={() => setIsFlyoutOpen(true)}
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            <Menu variant="roundLeft">
              <MenuButton className=" hover:text-orange-500">Store</MenuButton>
              <MenuList
                style={{
                  width: "800px",
                  height: "500px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "1rem",
                  justifyContent: "center", // Corrected property name
                  alignItems: "center", // Corrected property name
                  marginLeft: "auto", // Corrected property name
                  marginRight: "auto", // Corrected property name
                  maxWidth: "100%",
                  overflow: "auto", // Enable scrolling when content overflows
                  padding: "1rem", // Add padding to give space for scrollbars
                  border: "1px solid #ccc", // Add border for visual clarity
                  borderRadius: "0.5rem", // Corrected property name
                }}
              >
                {/* {product.map((pd) => (
                  <Products
                    img={pd.img}
                    discount={pd.discount}
                    name={pd.name}
                    price={pd.price}
                    options={pd.options}
                    key={pd.name}
                  />
                ))} */}
              </MenuList>
            </Menu>
          </div>
          <div className=" hover:text-orange-500">
            <a href="#">Why Pintola?</a>
          </div>
          <div className=" hover:text-orange-500">
            <a href="#">Recipe</a>
          </div>
          <div className=" hover:text-orange-500">
            <a href="#">About Us</a>
          </div>
          <div className=" hover:text-orange-500">
            <a href="#">Contact Us</a>
          </div>
          <div className="bg-orange-400 text-white px-4 py-2 rounded-3xl">
            <a href="#">Track Your Order</a>
          </div>
        </div>
        <div className="text-gray-500 w-1/12  flex justify-between items-center">
          <div className="">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          <div>
            <IconButton
              variant={"link"}
              rounded={"full"}
              aria-label="Search"
              icon={<FaSearch />}
              className=" hover:text-orange-500"
            />
          </div>
          <div>
            <Link to={"/cart"}>
              <Flex align="center" justify="center" position="relative">
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
                    top="-8px"
                    right="-8px"
                  >
                    {totalCount}
                  </Badge>
                )}
              </Flex>
            </Link>
          </div>
          <div>
            <IconButton
              variant={"link  "}
              rounded={"full"}
              aria-label="Contact"
              icon={<FaContao />}
              className=" hover:text-orange-500"
            />
          </div>
        </div>
        {/* <div
          className="top-[-40px]"
          onMouseEnter={() => setIsFlyoutOpen(true)}
          onMouseOut={() => setIsFlyoutOpen(false)}
        >
          {isFlyoutOpen && (
            <div className="absolute left-0 top-12  bg-black text-white w-1/2 h-1/2">
              hover
            </div>
          )}
        </div> */}
      </div>
    </>
  );
};

export default Menus;
