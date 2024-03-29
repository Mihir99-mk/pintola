import React, { useState } from "react";
import Menus from "./Menus";
import Footer from "./Footer";
import ToggleSwitchForm from "./ToggleSwitchForm";
import Logo from "../assets/img/pintola_logo.jpeg";
import {
  Button,
  Card,
  Flex,
  Heading,
  Text,
  Image,
  Box,
  Input,
} from "@chakra-ui/react";

const TrackOrder = () => {
  const [form, setForm] = useState(true);

  const handleForm = (value: boolean) => {
    setForm(value);
  };

  return (
    <div className="bg-[#FAF4EA]">
      <Menus />

      <Flex justify="center" align="center" my={14}>
        <Card h="80vh" w="80%">
          <Flex h="100%" w="100%">
            <Flex h="100%" w="50%" justify="center" align="center">
              <Image src="https://ils.shopiapps.in/image/tracking-images/pintola-online_myshopify_com/login_banner_1702616842.png" h="auto"
          w="70%"
          maxH="400px"
          objectFit="cover" alt="Pintola" />
            </Flex>
            <Flex h="100%" w="50%" direction={"column"} justify="center" align="center">
              <Flex
                w={"80%"}
                h={"50px"}
                bgColor={"#fef4ef"}
                className="rounded-full"
              >
                <Box
                  className={`rounded-full flex justify-center items-center font-medium cursor-pointer ${
                    form ? "bg-orange-600 text-white" : ""
                  }`}
                  w={"50%"}
                  h={"100%"}
                  onClick={() => handleForm(true)}
                >
                  Order Number
                </Box>
                <Box
                  className={`rounded-full flex justify-center items-center font-medium cursor-pointer ${
                    !form ? "bg-orange-600 text-white" : ""
                  }`}
                  w={"50%"}
                  h={"100%"}
                  onClick={() => handleForm(false)}
                >
                  Tracking Number
                </Box>
              </Flex>
              
              <Flex justify="center" align="center">
                {form ? <Order />: <Tracking />}
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Flex>

      <Footer />
    </div>
  );
};

export default TrackOrder;

const Order = () => {
  return (
    <Flex direction="column" align="center" mt={6}>
      <Text mb={4}>Enter the information in the box below to check the status of your order</Text>
      <Flex direction="column" w="90%">
        <Input placeholder="Order No." mb={3} />
        <Input placeholder="Email or Phone Number" mb={3} />
        <Button colorScheme="orange" mb={3}>Track</Button>
      </Flex>
    </Flex>
  );
};

const Tracking = () => {
  return (
    <Flex direction="column" align="center" mt={6}>
      <Text mb={4}>Enter the information in the box below to check the status of your order</Text>
      <Flex direction="column" w="90%">
        <Input placeholder="AWB No" mb={3} />
        <Button colorScheme="orange" mb={3}>Track</Button>
      </Flex>
    </Flex>
  );
};