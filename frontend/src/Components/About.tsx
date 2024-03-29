import React from 'react';
import Menus from './Menus';
import Footer from './Footer';
import { Heading, Image, Stack, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <>
      <Menus />

      <Stack backgroundColor="#F5E8D3" p={8} spacing={6} align="center">
        <Heading as="h1" size="xl">
          Our Mission & Vision
        </Heading>
        <Text fontSize="lg" textAlign="center">
          To serve more than 100 million people with healthy, delicious, and ready-to-eat food products.
        </Text>
        <Text fontSize="lg" textAlign="center">
          To achieve continuous business growth together with our stakeholders including farmers, exporters, and distributors.
        </Text>
        <Text fontSize="lg" textAlign="center">
          We strive to be the best company in India for peanut butter and related products. We endeavor to achieve this goal by providing competitive products in all aspects.
        </Text>

        <Image
          h="auto"
          w="100%"
          maxH="auto"
          objectFit="cover"
          src="https://pintola.in/cdn/shop/files/desktop_size_1800x.jpg?v=1620836643"
          alt="Peanut Butter Waffles with Pintola"
        />

<Image
          h="auto"
          w="100%"
          maxH="auto"
          objectFit="cover"
          src="https://pintola.in/cdn/shop/files/Asset_7_150x-100_1800x.jpg?v=1678087744"
          alt="Peanut Butter Waffles with Pintola"
        />

      </Stack>

      <Footer />
    </>
  );
};

export default About;
