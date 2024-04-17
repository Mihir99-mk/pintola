import React, { useState } from "react";
import Menus from "./Menus";
import Footer from "./Footer";
import {
  Container,
  Heading,
  Grid,
  Text,
  HStack,
  Select,
} from "@chakra-ui/react";
import Products from "./Products";
import Filter from "./Filter";
import { useCategory } from "../hooks/useCategory";

const Store = () => {
  const { data, error, isLoading } = useCategory();
  const [ct, setct] = useState("all");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Menus />
      <HStack w={80} m={4}>
        <Text fontWeight={"bold"}>Filter by Category</Text>
        <Select onChange={(e) => setct(e.target.value)}>
          <option value={"all"}>
            All
          </option>
          {data &&
            data.map((ct: any) => (
              <option key={ct.id} value={ct.attributes.categoryName}>{ct.attributes.categoryName}</option>
            ))}
        </Select>
      </HStack>
      <Container maxW="container.xl" py={8}>
        <Heading as="h1" mb={4}>
          Welcome to Our Store
        </Heading>
        <Text fontSize="xl" mb={8}>
          Explore our wide range of products and find what you need to elevate
          your health and well-being.
        </Text>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          <Products ctName={ct} />
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Store;
