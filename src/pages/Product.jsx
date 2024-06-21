import { useContext, useEffect } from "react";
import ProductDropdown from "../features/Product/ProductDropdown";
import ProductRows from "../features/Product/ProductRows";
import SortContext from "../ContextApi/SortContext";
import LoadingContext from "../ContextApi/LoadingContext";
import useProduct from "../services/FakeApi";

function Product() {
  const { setIsLoading } = useContext(LoadingContext);
  const { data: ProductDesc } = useProduct(setIsLoading);

  //For showing all data at product page on mount
  const { setSortedProducts } = useContext(SortContext);

  useEffect(() => {
    const navigationEntries = window.performance.getEntriesByType("navigation");

    if (
      navigationEntries.length > 0 &&
      navigationEntries[0].type === "reload"
    ) {
      setSortedProducts(ProductDesc);
    }
  }, [ProductDesc, setSortedProducts]);
  // relative
  // absolute top-[1.5rem] right-[1rem] md:top-[1.5rem] md:right-[5rem] xl:right-[7rem] 2xl:right-[12rem]
  return (
    <div className=" relative mx-auto max-w-screen-2xl">
      <div className="absolute top-[1rem] right-[1rem]">
        <ProductDropdown
          label={"select by category"}
          style={
            "text-white font-semibold bg-primary hover:bg-primaryHover rounded-lg text-xs md:text-sm px-2 md:px-5 py-2.5 text-center inline-flex items-center "
          }
          category={"products"}
        />
      </div>
      <div className="lg:mr-[8rem]">
        <ProductRows RowHeading={"Products"} />
      </div>
    </div>
  );
}

export default Product;
