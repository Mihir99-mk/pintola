import { useQuery } from "@tanstack/react-query";
import { axios } from "../api/Axios";
import { Datum, RootObject } from "../types/Carousels";

export const getCorousel = async () => {
  try {
    const { data } = await axios.get("/carousels?populate=*");
    return data;
  } catch (error) {
    throw new Error("Failed to fetch carousel data");
  }
};

export const useCarousel = () => {
  return useQuery({
    queryFn: () => getCorousel(),
    queryKey: ["carousels"]
  });
};
