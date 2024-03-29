import React from 'react';
import Menus from './Menus';
import Footer from './Footer';
import { Container, Heading, Grid, Text } from '@chakra-ui/react';
import Products from './Products';

const Store = () => {
  return (
    <>
      <Menus />
      <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={4}>Welcome to Our Store</Heading>
        <Text fontSize="xl" mb={8}>
          Explore our wide range of products and find what you need to elevate your health and well-being.
        </Text>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={6}
        >
          <Products />
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Store;
