import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";
import Menus from "./Menus";
import { Img, Button, Select, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./Footer";
import { useStore } from "../hooks/useStore";

const ProductDetails = () => {
  const { productid } = useParams();
  const [quantity, setQuantity] = useState(1); // State to track quantity

  const { data } = useProductDetails(productid as unknown as number);
  const Url = "http://localhost:1337";

  // Function to handle increasing quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCarts: any = useStore((state) => state.addToCart);

  // Function to handle adding to cart
  const addToCart = () => {
    // Add your logic to add product to cart
    addToCarts(productid, quantity);
    console.log(`Added ${quantity} ${data?.data.attributes.productName} to cart`);
  };

  // Function to handle buying
  const buyNow = () => {
    // Add your logic to initiate buy process
    console.log(`Buying ${quantity} ${data?.data.attributes.productName}`);
  };

  return (
    <>
      <Menus />
      <Breadcrumb className="ml-28" mt={4} fontWeight={"bold"}  spacing="8px" separator="-" mb="4">
        <BreadcrumbItem _hover={{color:"orange"}}>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem _hover={{color:"orange"}}>
          <BreadcrumbLink href="#">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{data && data.data && data.data.attributes.productName}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="container mx-auto mt-8 flex justify-center items-start">
        <div className="w-1/2">
          <Carousel>
            {data && data.data && data.data.attributes.productImage.data.map((img: any) => (
              <Img
                key={img?.attributes.id}
                srcSet={Url + img?.attributes.formats.small.url}
                alt={img?.attributes.name}
              />
            ))}
          </Carousel>
        </div>
        <div className="w-1/2 px-8">
          <h1 className="text-3xl font-bold mb-4">
            {data && data.data && data.data.attributes.productName}
          </h1>
          <h4 className="text-xl mb-2">Price: Rs.{data && data.data && data.data.attributes.Price}</h4>
          <h6 className="text-sm mb-4">
            You save: {data && data.data && data.data.attributes.Discount}%
          </h6>
          <div className="mb-4">
            <Select placeholder="Select Variant">
              {data && data.data && data.data.attributes.variants.data.map((variant:any)=>(
                <option key={variant.id} value={variant.attributes.variant}>{variant.attributes.variant}</option>
              ))}
            </Select>
          </div>
          <p className="mb-4">{data && data.data && data.data.attributes.productDescription}</p>
          <h4 className="mb-4">Shelf Life: <span className="font-bold">{data && data.data && data.data.attributes.shelfLife} months</span></h4>
          <div className="flex items-center mb-4">
            <Button onClick={decreaseQuantity}>-</Button>
            <span className="mx-2">{quantity}</span>
            <Button onClick={increaseQuantity}>+</Button>
          </div>
          <div className="flex">
            <Button variant="outline" onClick={addToCart} colorScheme="orange" w={300} mr={4}>Add to Cart</Button>
            <Button onClick={buyNow} colorScheme="orange" w={300} >Buy Now</Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
