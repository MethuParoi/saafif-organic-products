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
  return (
    <div className="lg:relative mb-40 lg:mb-0">
      <div className="lg:absolute md:top-[2rem] md:right-[7rem] lg:right-[10rem] xl:right-[14rem] mt-4 ml-56">
        <ProductDropdown
          label={"select by category"}
          style={
            "text-white font-semibold bg-primary hover:bg-primaryHover rounded-lg text-sm px-2 md:px-5 py-2.5 text-center inline-flex items-center "
          }
          category={"products"}
        />
      </div>
      <div className="lg:mx-8">
        <ProductRows RowHeading={"Products"} />
      </div>
    </div>
  );
}

export default Product;
