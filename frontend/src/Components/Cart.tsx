import React, { useEffect, useState } from "react";
import { Flex, Heading, Text, Button, Divider, Spinner, useToast } from "@chakra-ui/react";
import { useStore } from "../hooks/useStore"; // Import the Zustand store hook
import useFetchProductDetails from "../hooks/useFetchProductDetails";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  const [id, setId] = useState<any>([]);

  const totalPrice = 500;

  const Url = "http://localhost:1337";

  const { data, isLoading } = useFetchProductDetails(cart.map((item) => item.productId));

  console.log(data)
  data?.map((data)=>{
    console.log(data.attributes.productImage.data[0].attributes.formats.thumbnail      )

  })

  
  const toast = useToast();
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const addToCarts = useStore((state) => state.addToCart);

  const addToCart = (product: { attributes: { productName: any; }; }) => {
    // Add your logic to add product to cart
    toast({
      title: 'Added!',
      description: `Added ${quantity} ${product.attributes.productName} to cart`,
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
    console.log(`Added ${quantity} ${product.attributes.productName} to cart`);
  };

  

  console.log(data);

  return (
    <Flex direction="column" p={8}>
      <Heading mb={4}>Shopping Cart</Heading>
      
      {isLoading ? (
        <Spinner />
      ) : (
        data &&
        data.map((product, index) => (
          <Flex key={index} mb={4} alignItems="center">
            <img
              srcSet={`${Url}${product.attributes.productImage.data[0].attributes.formats.thumbnail.url}`}
              alt={product.attributes.productName}
              style={{ width: 100, height: 100, marginRight: 20 }}
            />
            <div>
              <Text fontWeight="bold">{product.attributes.productName}</Text>
              <Text fontSize="sm">Price: Rs.{product.attributes.Price}</Text>
              {/* Access quantity from the cart array using index */}
              <Text fontSize="sm">Quantity: {cart[index]?.quantity}</Text>
              <div className="flex items-center mb-4">
                <Button onClick={decreaseQuantity}>-</Button>
                <span className="mx-2">{cart[index]?.quantity}</span>
                <Button onClick={increaseQuantity}>+</Button>
              </div>
            </div>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </Flex>
        ))
      )}

      <Divider my={4} />
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">Total:</Text>
        <Text>${totalPrice}</Text>
      </Flex>
      <Button mt={4} colorScheme="orange">
        Proceed to Checkout
      </Button>
    </Flex>
  );
};

export default Cart;
