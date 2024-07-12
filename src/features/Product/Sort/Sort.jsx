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
        label={"Dairy"}
        isActive={activeLabel === "Dairy"}
        onClick={() => {
          const sorted = ProductDesc.filter(
            (item) => item.category === "dairy"
          );
          setSortedProducts(sorted);
          handleButtonClick("Dairy");
          updateRowHeading("Dairy");
        }}
      />
      <SortButton
        label={"Fruits"}
        isActive={activeLabel === "Fruits"}
        onClick={() => {
          const sorted = ProductDesc.filter(
            (item) => item.category === "fruit"
          );
          setSortedProducts(sorted);
          handleButtonClick("Fruits");
          updateRowHeading("Fruits");
        }}
      />
      <SortButton
        label={"Dry Fruits"}
        isActive={activeLabel === "Dry Fruits"}
        onClick={() => {
          const sorted = ProductDesc.filter(
            (item) => item.category === "dry_fruit"
          );
          setSortedProducts(sorted);
          handleButtonClick("Dry Fruits");
          updateRowHeading("Dry Fruits");
        }}
      />
      <SortButton
        label={"Oil"}
        isActive={activeLabel === "Oil"}
        onClick={() => {
          const sorted = ProductDesc.filter((item) => item.category === "oil");
          setSortedProducts(sorted);
          handleButtonClick("Oil");
          updateRowHeading("Oil");
        }}
      />
      <SortButton
        label={"Meat"}
        isActive={activeLabel === "Meat"}
        onClick={() => {
          const sorted = ProductDesc.filter((item) => item.category === "meat");
          setSortedProducts(sorted);
          handleButtonClick("Meat");
          updateRowHeading("Meat");
        }}
      />
      <SortButton
        label={"Fish"}
        isActive={activeLabel === "Fish"}
        onClick={() => {
          const sorted = ProductDesc.filter((item) => item.category === "fish");
          setSortedProducts(sorted);
          handleButtonClick("Fish");
          updateRowHeading("Fish");
        }}
      />
      <SortButton
        label={"Eggs"}
        isActive={activeLabel === "Eggs"}
        onClick={() => {
          const sorted = ProductDesc.filter((item) => item.category === "eggs");
          setSortedProducts(sorted);
          handleButtonClick("Eggs");
          updateRowHeading("Eggs");
        }}
      />
    </div>
  );
}

export default Sort;
