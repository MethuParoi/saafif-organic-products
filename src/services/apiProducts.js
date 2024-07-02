import supabase from "./supabase";
import { useQuery } from "react-query";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");
  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching productss");
  }

  return data;
}

function useProducts() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { isLoading, data, error };
}
export default useProducts;
