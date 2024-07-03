import { useContext, useEffect, useState } from "react";
import HomeCard from "../../ui/HomeCard";
import useProduct from "../../services/apiProducts";
// import LoadingContext from "../../ContextApi/LoadingContext";
import { useNavigate } from "react-router-dom";

function HomeRows({ RowHeading, displayedProducts }) {
  // const { setIsLoading } = useContext(LoadingContext);
  const { error } = useProduct();

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      console.error("An error occurred:", error.message);
    }
  }, [error]);

  return (
    <div className="py-7 px-7">
      <button
        className="pb-5"
        onClick={() => {
          navigate("/home");
        }}
      >
        &larr; Back to home
      </button>
      <div className="flex justify-between">
        <h2 className="text-2xl pb-2 font-semibold ">{RowHeading}</h2>
      </div>
      <div className="border-b-2 border-gray-400 mr-[50rem]"></div>
      <div className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {displayedProducts &&
            displayedProducts.map((product) => (
              <HomeCard
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
      </div>
    </div>
  );
}

export default HomeRows;
