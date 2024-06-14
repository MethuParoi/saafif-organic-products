import axios from "axios";
import { useQuery } from "react-query";

async function getAllProducts() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data;
  return data;
}

function useProduct() {
  const { data, isLoading, error } = useQuery("products", getAllProducts);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return { isLoading, data, error };
}

export default useProduct;