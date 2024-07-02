import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import supabase from "./supabase";

async function getAllProducts() {
  const { data, error } = await supabase.from("products").select("*");
  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching cabins");
  }

  return data;
  // const response = await axios.get("https://fakestoreapi.com/products");
  // const data = response.data;
  // return data;
}

function useProduct(setIsLoading) {
  const { data, isLoading, error } = useQuery("products", getAllProducts);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  return { isLoading, data, error };
}

export default useProduct;
