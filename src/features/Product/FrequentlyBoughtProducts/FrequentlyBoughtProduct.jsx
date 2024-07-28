import useHotProduct from "../../../services/apiHotProducts";
import HotProducts from "./HotProducts";

function FrequentlyBoughtProduct() {
  //   const { setIsLoading } = useContext(LoadingContext);
  const { data: ProductDesc } = useHotProduct();
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
          ProductDesc.map((product) => (
            <HotProducts
              key={product.product_id}
              product_id={product.product_id}
              category={product.category}
              img={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
      </div>
    </div>
  );
}

export default FrequentlyBoughtProduct;
