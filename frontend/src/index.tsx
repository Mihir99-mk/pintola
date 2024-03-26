import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider} from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Store from "./Components/Store";
import PorductDetails from "./Components/PorductDetails";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/cart",
    element: <Store />
  },
  {
    path: "/:productid",
    element: <PorductDetails />
  }
]);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <>
        <RouterProvider router={router} />

        </>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
