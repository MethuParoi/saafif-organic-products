import { useContext } from "react";
import ProductCard from "./ProductCard";
import LoadingContext from "../../ContextApi/LoadingContext";
import useProduct from "../../services/FakeApi";

function HotProducts() {
  const { setIsLoading } = useContext(LoadingContext);
  const { data: ProductDesc } = useProduct(setIsLoading);
  return (
    <div>
      {ProductDesc &&
        ProductDesc.filter((product) => product.id === 3).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            category={product.category}
            img={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
    </div>
  );
}

export default HotProducts;
