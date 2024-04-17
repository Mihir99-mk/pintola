import Menus from "./Components/Menus";
import Carousels from "./Components/Carousels";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import { Heading } from "@chakra-ui/react";

function App() {
  return (
    <div className="bg-[#FAF4EA] w-full h-fit">
      <Menus />
      <Carousels />
      <div className="w-full py-12">
        <div className="mx-auto max-w-screen-lg">
          <Heading as="h1" textAlign="center" mb={8}>
            Shop Our Best Sellers
          </Heading>
          <div className="grid grid-cols-3 gap-4">
            <Products ctName="all" />
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
