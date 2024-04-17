import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { axios } from '../api/Axios';
import { RootObject } from '../types/Products';

const getCategory = async() =>{
    try {
      const {data} = await axios.get("/categories?populate=*");;
      return data.data
    }catch(error){
      throw new Error("Failed to fetch category data");
    }
  }

export const useCategory = () => {
  return useQuery({
    queryFn: () => getCategory(),
    queryKey: ["category"]
  })
}
