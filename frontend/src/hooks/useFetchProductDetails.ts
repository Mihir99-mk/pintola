import { useQuery } from '@tanstack/react-query';
import { axios } from '../api/Axios';

const useFetchProductDetails = (ids: number[]) => {
  return useQuery({
    queryKey: ["productDetails", ids], // Include ids in the query key
    queryFn: async () => {
      
      const promises = ids.map(async (productId: number) => {
        const { data } = await axios.get(`/products/${productId}?populate=*`);
        return data.data;
      });
  
      return Promise.all(promises);
    }
  });
};

export default useFetchProductDetails;
