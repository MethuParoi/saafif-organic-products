import supabase from "./supabase";
import { useQuery } from "react-query";

export async function getHotProducts() {
  let { data, error } = await supabase.from("hot_products").select("*");

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching productss");
  }

  return data;
}

function useHotProducts() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["hot_products"],
    queryFn: getHotProducts,
  });

  return { isLoading, data, error };
}
export default useHotProducts;
