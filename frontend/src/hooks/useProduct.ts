import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { axios } from '../api/Axios';
import { RootObject } from '../types/Products';

const getProduct = async() =>{
    try {
      const {data} = await axios.get("/products?populate=*");;
      return data
    }catch(error){
      throw new Error("Failed to fetch carousel data");
    }
  }

const useProduct = () => {
  return useQuery({
    queryFn: () => getProduct(),
    queryKey: ["product"]
  })
}

export default useProduct