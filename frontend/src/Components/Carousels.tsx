import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCarousel } from "../hooks/useCarousel";
import { Spinner } from "@chakra-ui/react";
import { Datum } from "../types/Carousels";

const Carousels = () => {
  const { data, error, isLoading } = useCarousel();

  // Error handling
  if (error) {
    console.log(error.message);
  }

  // Loading state
  if (isLoading) {
    return <Spinner />;
  }

 
  const Url = "http://localhost:1337"

  // console.log(data)
  // data.data.map((dt:any)=>{
  //   dt.attributes.image.data.map((img:any)=>{
  //     console.log(img.attributes)
  //   })
  // })

  return (
    <>
      <Carousel
        useKeyboardArrows={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
      >
        {
          data.data.map((dt:any)=>(
            <div >
              {dt.attributes.image.data.map((img:any)=>(
                <img srcSet={Url+img.attributes.url} alt={img.attributes.name}  />
              ))}
            </div>
          ))
        }
        
      </Carousel>
    </>
  );
};

export default Carousels;
