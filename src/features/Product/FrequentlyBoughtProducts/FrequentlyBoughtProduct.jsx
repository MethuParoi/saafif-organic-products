import { useContext } from "react";
import ProductCard from "../ProductCard";
import LoadingContext from "../../../ContextApi/LoadingContext";
import useProduct from "../../../services/FakeApi";
import HotProducts from "./HotProducts";

function FrequentlyBoughtProduct() {
  const { setIsLoading } = useContext(LoadingContext);
  const { data: ProductDesc } = useProduct(setIsLoading);
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl pb-2 font-semibold ">People Also Buy</h2>
        </div>
        <div className="border-b-2 border-gray-400"></div>
      </div>

      <div className="pt-[18px]">
        {ProductDesc &&
          ProductDesc.filter((product) => [5, 1, 4].includes(product.id)).map(
            (product) => (
              <HotProducts
                key={product.id}
                id={product.id}
                category={product.category}
                img={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            )
          )}
      </div>
    </div>
  );
}

export default FrequentlyBoughtProduct;
