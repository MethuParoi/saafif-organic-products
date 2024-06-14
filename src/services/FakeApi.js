import axios from "axios";

export async function getAllProducts() {
  const data = axios.get("https://fakestoreapi.com/products/1");
  console.log(data);

  return data;
}
