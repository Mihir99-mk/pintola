import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../api/Axios';

const geFetchtProductDetails = async(ids: number[]) =>{
  if (!ids || ids.length === 0) { // Check if ids is undefined or empty
    return [];
  }
  const promises = ids.map(async (productId: number) => {
    const { data } = await axios.get(`/products/${productId}?populate=*`);
    return data.data;
  });

  return Promise.all(promises);
}

const useFetchProductDetails = (id:number[]) => {
  return useQuery({
    queryFn: () => geFetchtProductDetails(id),
    queryKey: ["productDetails", id]
  })
}

export default useFetchProductDetails; // Remove ": correct code : undefined"
