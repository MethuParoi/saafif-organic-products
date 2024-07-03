import { useContext, useState } from "react";
import SortButton from "./SortButton";
import SortContext from "../../../ContextApi/SortContext";
// import LoadingContext from "../../../ContextApi/LoadingContext";
import useProduct from "../../../services/apiProducts";
import { useDispatch } from "react-redux";
import { setRowHeading } from "../productSlice";

function Sort() {
  const { setSortedProducts } = useContext(SortContext);

  // const { setIsLoading } = useContext(LoadingContext);
  const { data: ProductDesc } = useProduct();

  const [activeLabel, setActiveLabel] = useState("");

  const handleButtonClick = (label) => {
    setActiveLabel(label);
  };

  //Reducers for setting row heading
  const dispatch = useDispatch();

  const updateRowHeading = (newHeading) => {
    dispatch(setRowHeading(newHeading));
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
          updateRowHeading("Men's Clothing");
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
          updateRowHeading("Jewelery");
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
          updateRowHeading("Women's Clothing");
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
          updateRowHeading("Electronics");
        }}
      />
    </div>
  );
}

export default Sort;
