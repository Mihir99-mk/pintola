import { useQuery } from "@tanstack/react-query";
import React from "react";
import { axios } from "../api/Axios";
import { RootObject } from "../types/Products";

const getProductById = async (id: any) => {
  try {
    const { data } = await axios.get(`/products?filters[id][$eq]=${id}&populate=*`);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch product data");
  }
};

const useProductById = (id: any) => {
  return useQuery({
    queryFn: () => getProductById(id),
    queryKey: ["productById", id],
  });
};

export default useProductById;
