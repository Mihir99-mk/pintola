import React, { useEffect, useState } from "react";
import { Flex, Heading, Text, Button, Divider, Spinner, useToast } from "@chakra-ui/react";
import { useStore } from "../hooks/useStore"; // Import the Zustand store hook
import useFetchProductDetails from "../hooks/useFetchProductDetails";
import { Link } from "react-router-dom";
import getStripe from "../lib/getStripe";

const Carts = () => {
  const cart = useStore((state) => state.cart);
  const [quantity, setQuantity] = useState(1);

  const handleCheckout = async () => {
    const stripe = await getStripe();
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        
        lineItems: [{
          price: "price_1OyXYaSHJwhaAYNOZ8Y8TzqZ",
          quantity: 1,
        }],
        mode: 'subscription',
        successUrl: `http://localhost:3000/`,
        cancelUrl: `http://localhost:3000/`,
        // customerEmail: 'example@email.com',
      });
      if (error) {
        console.warn(error.message);
      }
    } else {
      console.error('Stripe is not available');
    }
  };

  const Url = "http://localhost:1337";

  const { data, isLoading } = useFetchProductDetails(cart.map((item) => item.productId));

  const toast = useToast();

  const increaseQuantity = (productId: number, index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1; 
    setQuantity(updatedCart[index].quantity); 
    addToCarts(productId, 1); 
  };

  const decreaseQuantity = (productId: number, index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1; 
      setQuantity(updatedCart[index].quantity); 
      addToCarts(productId, -1); 
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

  return (
    <Flex direction="column" p={8}>
      <Heading mb={4}>Shopping Cart</Heading>

      {isLoading ? (
        <Spinner />
      ) : (
        <Flex direction="column">
          {data && data.length > 0 ? (
            data.map((product: any, index: any) => (
              <Flex key={product.id} mb={4} alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
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
                    {/* <Flex alignItems="center">
                      <Button onClick={() => decreaseQuantity(product.id, index)}>-</Button>
                      <span className="mx-2">{cart[index]?.quantity}</span>
                      <Button onClick={() => increaseQuantity(product.id, index)}>+</Button>
                    </Flex> */}
                  </div>
                </Flex>
                <Divider orientation="vertical" mx={4} />
                <Flex direction="column" alignItems="flex-end">
                  <Text fontWeight="bold">Total: </Text>
                  <Text>Rs.{product.attributes.Price * (cart[index]?.quantity || 0)}</Text>
                </Flex>
              </Flex>
            ))
          ) : (
            <Text>No Products items are added to the cart!!</Text>
          )}
        </Flex>
      )}

      <Button mt={4} colorScheme="orange" onClick={handleCheckout}>
        Proceed to Checkout
      </Button>
    </Flex>
  );
};

export default Carts;
