import Menus from "./Components/Menus";
import Carousels from "./Components/Carousels";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#FAF4EA] w-full h-fit">
        <Menus />
        <Carousels />
        <div className="w-full py-12">
        <div className="grid grid-cols-3 gap-4 justify-center items-center mx-auto max-w-screen-lg">
     
     {/* {Outlet} */}
        <Products />
       
        </div>
        </div>
        <Footer />
        
    </div>
  );
}

export default App;
