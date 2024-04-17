import React, { useEffect, useState } from "react";
import {
  Card,
  Box,
  Heading,
  Text,
  Divider,
  Spinner,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useStore } from "../hooks/useStore";
import useProduct from "../hooks/useProduct";
import { useDebounce } from "../hooks/useDebounce";
import useProductById from "../hooks/useProductById";

type Props = {
  ctName: string;
};

const SearchProduct = ({ ctName }: Props) => {
  const { data, error, isLoading } = useProduct();
  const addToCart = useStore((state) => state.addToCart);
  const [category, setCategory] = useState<any[]>([]);
  const debouncedCtName = useDebounce(ctName, 500);
  const [pId, setPId] = useState<number | undefined>();

  const filteredProducts = data.data.filter((ct: any) =>
    ct.attributes.productName.includes("Dark")
  );
  const filteredProductIds = filteredProducts.map((ct: any) => ct.id);

  filteredProductIds.map((id: any)=>console.log(id))

  const { data: productData, error:productError, isLoading:productLoading } = useProductById(pId);


  useEffect(() => {
    const fetchData = async () => {
      if (isLoading || error || !data || !data.data || data.data.length === 0) {
        return;
      }

      let filteredCategory = data.data;
      const filteredProducts = data.data.filter((ct: any) =>
        ct.attributes.productName.toLowerCase().includes(debouncedCtName.toLowerCase())
      );
      const filteredProductIds = filteredProducts.map((ct: any) => ct.id);

      filteredProductIds.map((id: any)=>setPId(filteredProductIds));
      
    };

    fetchData();
  }, [debouncedCtName, setPId, data, error, isLoading]);

  useEffect(() => {
    if (pId !== undefined && !productLoading && !productError && productData && productData.data && productData.data.length > 0) {
      setCategory(productData.data);
    }
  }, [pId, productData, productError, productLoading]);

  // console.log(category)
 

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !data || !data.data || data.data.length === 0) {
    return <div>No data available</div>;
  }

  const Url = "http://localhost:1337";

  const handleAddToCart = (productId: any) => {
    addToCart(productId, 1);
  };

  return (
    <>
      {category.map((item: any) => (
        <Card maxW="sm" key={item.id}>
          <Carousel
            useKeyboardArrows={true}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            interval={3000}
          >
            {item.attributes.productImage.data.map(
              (img: any, index: number) => (
                <div key={index}>
                  <img
                    src={`${Url}${img.attributes.url}`}
                    alt={item.attributes.productName}
                    width={img.attributes.width}
                    height={img.attributes.height}
                  />
                </div>
              )
            )}
          </Carousel>
          <Box p={6}>
            <Link to={`/${item.id}`} className="hover:text-orange-500">
              <Heading size="md" textAlign="center" wordBreak={"break-word"}>
                {item.attributes.productName}
              </Heading>
            </Link>
            <Text textAlign="center">
              From Rs.{item.attributes.Price} ({item.attributes.Discount}% off)
            </Text>
            <select className="w-[279px]">
              {item.attributes.variants.data.map((op: any, index: number) => (
                <option key={index} value={op.attributes.variant}>
                  {op.attributes.variant}
                </option>
              ))}
            </select>
          </Box>
          <Divider />
          <Box p={6}>
            <ButtonGroup spacing="2" width="100%">
              <Button variant="solid" colorScheme="orange">
                Buy now
              </Button>
              <Button
                variant="outline"
                colorScheme="orange"
                onClick={() => handleAddToCart(item.id)}
              >
                Add to cart
              </Button>
            </ButtonGroup>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default SearchProduct;
