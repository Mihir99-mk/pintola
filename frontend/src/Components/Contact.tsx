import React from "react";
import Menus from "./Menus";
import Footer from "./Footer";
import { Button, Flex, Image, Input, Select, Text, Textarea } from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Menus />

      <Image
        h="auto"
        w="100%"
        maxH="auto"
        objectFit="cover"
        src="https://pintola.in/cdn/shop/files/Contact_us_1400x.png?v=1691834837"
        alt="Peanut Butter Waffles with Pintola"
      />

      <Flex className="w-3/4 mt-8" justify="center"
          align="center">
        <Flex
          direction="column"
          justify="center"
          align="flex-start"
          p={8}
          bg="white"
        >
          <Text fontSize="2xl" fontWeight="bold" color="orange.500" mb={4}>
            SAY HELLO!
          </Text>
          <Text fontSize="lg" mb={2}>
            Company: Das Foodtech Pvt Ltd
          </Text>
          <Text fontSize="lg" mb={2}>
            Email: support@pintola.in
          </Text>
          <Text fontSize="lg" mb={2}>
            Phone: +91 78080 58080
          </Text>
          <Text fontSize="lg" mb={2}>
            Corporate Office: 304-305 Ganesh Glory, Jagatpur, SG Highway,
            Ahmedabad-382481
          </Text>
          <Text fontSize="lg" mb={2}>
            Manufacturing Unit: Block No. 1234, Salal-Sonasan Road, At. Sonasan,
            Ta. Prantij, Dist, Himatnagar, Gujarat-383210
          </Text>
          <Text fontSize="lg" mb={2}>
            Working Days: Monday to Saturday
          </Text>
          <Text fontSize="lg" mb={4}>
            Timing: 9am to 6pm
          </Text>

          <Text fontSize="xl" mb={4}>
            We'd love to hear from you! Fill out our contact form to get in
            touch with our team.
          </Text>
        </Flex>
        <Flex direction="column" align="center" mb={4} w={400}>
          <Select placeholder="Select Inquiry Type" mb={2}>
            <option value="dealership">For Dealership Inquiries</option>
            <option value="export">For Export Inquiries</option>
            <option value="feedback">Feedback</option>
          </Select>

          <Input placeholder="Name*" mb={2} />
          <Input type="email" placeholder="Email*" mb={2} />
          <Input type="number" placeholder="Phone Number*" mb={2} />
          <Input placeholder="Area/City*" mb={2} />
          <Input placeholder="Country (or export)" mb={2} />
          <Textarea placeholder="Message*" mb={2} />
          <Button bgColor={"black"} color={"white"}>Submit</Button>
        </Flex>
      </Flex>

      <Footer />
    </>
  );
};

export default Contact;
