import { useContext, useState } from "react";
import SortButton from "./SortButton";
import SortContext from "../../../ContextApi/SortContext";
import LoadingContext from "../../../ContextApi/LoadingContext";
import useProduct from "../../../services/FakeApi";

function Sort() {
  const { setSortedProducts } = useContext(SortContext);

  const { setIsLoading } = useContext(LoadingContext);
  const { data: ProductDesc } = useProduct(setIsLoading);

  const [activeLabel, setActiveLabel] = useState("");

  const handleButtonClick = (label) => {
    setActiveLabel(label);
  };

  return (
    <div className=" bg-gray-50 shadow-sm rounded-sm p-1 flex gap-1">
      <SortButton
        label={"Men's Clothing"}
        isActive={activeLabel === "Men's Clothing"}
        onClick={() => {
          const sorted = ProductDesc.filter(
            (item) => item.category === "men's clothing"
          );
          setSortedProducts(sorted);
          handleButtonClick("Men's Clothing");
        }}
      />
      <SortButton
        label={"Jewelery"}
        isActive={activeLabel === "jewelery"}
        onClick={() => {
          const sorted = ProductDesc.filter(
            (item) => item.category === "jewelery"
          );
          setSortedProducts(sorted);
          handleButtonClick("jewelery");
        }}
      />
      <SortButton
        label={"Women's Clothing"}
        isActive={activeLabel === "women's clothing"}
        onClick={() => {
          const sorted = ProductDesc.filter(
            (item) => item.category === "women's clothing"
          );
          setSortedProducts(sorted);
          handleButtonClick("women's clothing");
        }}
      />
      <SortButton
        label={"Electronics"}
        isActive={activeLabel === "electronics"}
        onClick={() => {
          const sorted = ProductDesc.filter(
            (item) => item.category === "electronics"
          );
          setSortedProducts(sorted);
          handleButtonClick("electronics");
        }}
      />
    </div>
  );
}

export default Sort;
