import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { axios } from '../api/Axios';

const getProductDetails = async(id: number) =>{
    try {
      const {data} = await axios.get(`/products/${id}?populate=*`);
      return data
    }catch(error){
      throw new Error("Failed to fetch carousel data");
    }
  }


const useProductDetails = (id:number) => {
  return useQuery({
    queryFn: () => getProductDetails(id),
    queryKey: ["productDetails"]
  })
}

export default useProductDetails