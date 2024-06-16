import ProductDropdown from "../features/Product/ProductDropdown";
import ProductRows from "../features/Product/ProductRows";

function Product() {
  return (
    <div className="relative">
      <div className="absolute top-[2rem] left-[105rem]">
        <ProductDropdown />
      </div>
      <div>
        <ProductRows RowHeading={"Products"} />
      </div>
    </div>
  );
}

export default Product;
