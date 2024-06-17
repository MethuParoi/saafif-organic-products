import ProductDropdown from "../features/Product/ProductDropdown";
import ProductRows from "../features/Product/ProductRows";

function Product() {
  return (
    <div className="relative">
      <div className="absolute top-[2rem] left-[105rem]">
        <ProductDropdown
          label={"select by category"}
          style={
            "text-white font-semibold bg-primary hover:bg-primaryHover rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
          }
        />
      </div>
      <div>
        <ProductRows RowHeading={"Products"} />
      </div>
    </div>
  );
}

export default Product;
