import React from "react";
import Menus from "./Menus";
import Footer from "./Footer";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Recipe = () => {
  return (
    <>
      <Menus />

      <Box my={12} mx="auto" maxWidth="80%">
        <Text textAlign={"center"} className="font-bold text-3xl mb-8">Healthy & Delicious Recipes</Text>
        <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
          <Box className="h-4/5">
            <Card>
              <Image
                h="200px"
                w="100%"
                objectFit="cover"
                src="https://pintola.in/cdn/shop/articles/unnamed_3_800x.jpg?v=1711443260"
                alt="Chakra UI"
              />
              <CardBody className="font-sans">
                <Link to={"/recipe/1"}>
                <Text fontSize="lg" color="black" className="font-bold pb-4 cursor-pointer hover:text-orange-500">
                Peanut Butter Waffles with Pintola: A Delicious Start to Your Day
                </Text>
                </Link>
                

                <Text as='sup'>2 min read</Text>
              </CardBody>
            </Card>
          </Box>
          <Box className="h-4/5">
            <Card>
              <Image
                h="200px"
                w="100%"
                objectFit="cover"
                src="https://pintola.in/cdn/shop/articles/Pintola_noodles_1_a60e6b39-4e08-43b3-a526-f89df28100b5_800x.jpg?v=1682574587"
                alt="Chakra UI"
              />
              <CardBody className="font-sans">
              <Link to={"/recipe/2"}>
                <Text fontSize="lg" color="black" className="font-bold pb-4 cursor-pointer hover:text-orange-500">
                Pintola Peanut Butter Chilli Noodles
                </Text>
                </Link>

                <Text as='sup'>2 min read</Text>
              </CardBody>
            </Card>
          </Box>
          <Box className="h-4/5">
            <Card>
              <Image
                h="200px"
                w="100%"
                objectFit="cover"
                src="https://pintola.in/cdn/shop/articles/with_product_2_800x.jpg?v=1682573527"
                alt="Chakra UI"
              />
              <CardBody className="font-sans">
              <Link to={"/recipe/3"}>
                <Text fontSize="lg" color="black" className="font-bold pb-4 cursor-pointer hover:text-orange-500">
                Pintola Peanut Butter & Jelly Bread Pudding
                </Text>
                </Link>

                <Text as='sup'>2 min read</Text>
              </CardBody>
            </Card>
          </Box>
          <Box className="h-4/5">
            <Card>
              <Image
                h="200px"
                w="100%"
                objectFit="cover"
                src="https://pintola.in/cdn/shop/articles/Pintola_granola_ae91f103-ef8a-4ab5-8c59-62347d251389_800x.jpg?v=1682574657"
                alt="Chakra UI"
              />
              <CardBody className="font-sans">
              <Link to={"/recipe/4"}>
                <Text fontSize="lg" color="black" className="font-bold pb-4 cursor-pointer hover:text-orange-500">
                Pintola Peanut Butter Granola Recipe
                </Text>
                </Link>

                <Text as='sup'>2 min read</Text>
              </CardBody>
            </Card>
          </Box>
         
        </SimpleGrid>
      </Box>

      <Footer />
    </>
  );
};

export default Recipe;
