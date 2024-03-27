import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Login from "./Components/Login";
import Store from "./Components/Store";
import PorductDetails from "./Components/PorductDetails";
import { ClerkProvider } from "@clerk/clerk-react";

import CheckoutForm from "./Components/CheckoutForm";
import Carts from "./Components/Carts";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const PUBLISHABLE_KEY =
  "pk_test_YnVyc3RpbmctZWxrLTg5LmNsZXJrLmFjY291bnRzLmRldiQ";
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <Carts />,
  },
  {
    path: "/cart",
    element: <Store />,
  },
  {
    path: "/:productid",
    element: <PorductDetails />,
  },
  {
    path: "/:productid",
    element: <PorductDetails />,
  },
 
]);

// const stripePromise = loadStripe(
//   "pk_test_51OyWUySHJwhaAYNOFQ4djF7EV5RqCvSifJxj7OkrTr1brIqEh3SdiP8sEJ3Fy7wMjZcizeKAhwoRKJvDCOvENv390076QFiuuk"
// );
// const options = {
//   // passing the client secret obtained from the server
//   clientSecret:
//     "sk_test_51OyWUySHJwhaAYNOcjhJgXDwX99fkvU2IPwJ7gDFXhn3lmauqR08fesDECmLHzo7N0jucbsKJaE8lzfrcy23Mz2o00c0OrsauY",
// };
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <QueryClientProvider client={queryClient}>
            <>
              <RouterProvider router={router} />
            </>
          </QueryClientProvider>
      </ClerkProvider>
    </ChakraProvider>
  </React.StrictMode>
);
