import { useContext, useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import useProduct from "../services/apiProducts";
import { useNavigate } from "react-router-dom";

function HomeRows({ RowHeading }) {
  const { data: ProductDesc, error } = useProduct();

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      console.error("An error occurred:", error.message);
    }
  }, [error]);

  const displayedProducts = ProductDesc && ProductDesc.slice(0, 5);

  return (
    <div className="py-7 mx-auto max-w-screen-2xl">
      <div className="flex justify-between ">
        <h2 className="text-2xl pb-2 font-semibold ">{RowHeading}</h2>
        <button
          onClick={() => {
            navigate("/product");
          }}
          className="text-white bg-primary hover:bg-primaryHover text-md font-semibold rounded-lg px-2 md:px-5 py-1 md:py-2.5 text-center  "
        >
          {"See More.."}
        </button>
      </div>
      <div className="border-b-2 border-gray-400 mr-[50rem]"></div>
      <div className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-20 ">
          {displayedProducts &&
            displayedProducts.map((product) => (
              <HomeCard
                key={product.product_id}
                product_id={product.product_id}
                category={product.category}
                quantity={product.quantity}
                img={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomeRows;
