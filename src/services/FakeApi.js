// import axios from "axios";
// import { useQuery } from "react-query";

// async function getAllProducts() {
//   const response = await axios.get("https://fakestoreapi.com/products");
//   const data = response.data;
//   return data;
// }

// function useProduct() {
//   const { data, isLoading, error } = useQuery("products", getAllProducts);

//   return { isLoading, data, error };
// }

// export default useProduct;

import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";

async function getAllProducts() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data;
  return data;
}

function useProduct(setIsLoading) {
  const { data, isLoading, error } = useQuery("products", getAllProducts);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  return { isLoading, data, error };
}

export default useProduct;
