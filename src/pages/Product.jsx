import { useContext, useEffect } from "react";
import ProductRows from "../features/Product/ProductRows";
import SortContext from "../ContextApi/SortContext";
import LoadingContext from "../ContextApi/LoadingContext";
import useProduct from "../services/FakeApi";
import Sort from "../features/Product/Sort/Sort";
import { useSelector } from "react-redux";

function Product() {
  const { setIsLoading } = useContext(LoadingContext);
  const { data: ProductDesc } = useProduct(setIsLoading);

  //For showing all data at product page on mount
  const { setSortedProducts } = useContext(SortContext);

  //Use useSelector to access rowHeading from the Redux store
  const rowHeading = useSelector((state) => state.product.rowHeading);

  useEffect(() => {
    const navigationEntries = window.performance.getEntriesByType("navigation");

    if (
      navigationEntries.length > 0 &&
      navigationEntries[0].type === "reload"
    ) {
      setSortedProducts(ProductDesc);
    }
  }, [ProductDesc, setSortedProducts]);

  return (
    <div className=" relative mx-auto max-w-screen-2xl">
      <div className="absolute top-[1rem] right-[1rem]">
        <Sort />
      </div>
      <div className="lg:mr-[8rem]">
        <ProductRows RowHeading={rowHeading ? rowHeading : "Products"} />
      </div>
    </div>
  );
}

export default Product;
