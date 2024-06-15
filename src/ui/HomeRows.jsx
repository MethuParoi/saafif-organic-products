// import { useContext, useEffect, useState } from "react";
// import HomeCard from "./HomeCard";
// import useProduct from "../services/FakeApi";
// import Spinner from "../utility/Spinner";
// import LoadingContext from "../ContextApi/LoadingContext";

// function HomeRows({ RowHeading }) {
//   const [showAll, setShowAll] = useState(false);
//   const { isloading, setIsLoading } = useContext(LoadingContext);
//   const { data: ProductDesc, isLoading, error } = useProduct();

//   useEffect(() => {
//     setIsLoading(isLoading);
//     if (error) {
//       console.error("An error occurred:", error.message);
//     }
//   }, [error, isLoading, setIsLoading]);

//   if (isLoading) return <Spinner />;

//   const displayedProducts =
//     ProductDesc && (showAll ? ProductDesc : ProductDesc.slice(0, 5));

//   return (
//     <div className="py-7">
//       <div className="flex justify-between">
//         <h2 className="text-2xl pb-2 font-semibold ">{RowHeading}</h2>
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="text-white bg-green-500 hover:bg-green-700  text-md font-semibold rounded-lg px-5 py-2.5 mr-14 text-center  "
//         >
//           {showAll ? "See Less.." : "See More.."}
//         </button>
//       </div>
//       <div className="border-b-2 border-gray-400 mr-[50rem]"></div>
//       <div className="py-5">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
//           {displayedProducts &&
//             displayedProducts.map((product) => (
//               <HomeCard
//                 key={product.id}
//                 img={product.image}
//                 title={product.title}
//                 price={product.price}
//               />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomeRows;

//V-2-----------------------

// import { useContext, useEffect, useState } from "react";
// import HomeCard from "./HomeCard";
// import useProduct from "../services/FakeApi";
// import LoadingContext from "../ContextApi/LoadingContext";

// function HomeRows({ RowHeading }) {
//   const [showAll, setShowAll] = useState(false);
//   const { isLoading, setIsLoading } = useContext(LoadingContext);
//   const { data: ProductDesc, error } = useProduct();

//   useEffect(() => {
//     setIsLoading(isLoading);
//     if (error) {
//       console.error("An error occurred:", error.message);
//     }
//   }, [error, isLoading, setIsLoading]);

//   const displayedProducts =
//     ProductDesc && (showAll ? ProductDesc : ProductDesc.slice(0, 5));

//   return (
//     <div className="py-7">
//       <div className="flex justify-between">
//         <h2 className="text-2xl pb-2 font-semibold ">{RowHeading}</h2>
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="text-white bg-green-500 hover:bg-green-700  text-md font-semibold rounded-lg px-5 py-2.5 mr-14 text-center  "
//         >
//           {showAll ? "See Less.." : "See More.."}
//         </button>
//       </div>
//       <div className="border-b-2 border-gray-400 mr-[50rem]"></div>
//       <div className="py-5">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
//           {displayedProducts &&
//             displayedProducts.map((product) => (
//               <HomeCard
//                 key={product.id}
//                 img={product.image}
//                 title={product.title}
//                 price={product.price}
//               />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomeRows;

import { useContext, useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import useProduct from "../services/FakeApi";
import LoadingContext from "../ContextApi/LoadingContext";

function HomeRows({ RowHeading }) {
  const [showAll, setShowAll] = useState(false);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { data: ProductDesc, error } = useProduct(setIsLoading);

  useEffect(() => {
    if (error) {
      console.error("An error occurred:", error.message);
    }
  }, [error]);

  const displayedProducts =
    ProductDesc && (showAll ? ProductDesc : ProductDesc.slice(0, 5));

  return (
    <div className="py-7">
      <div className="flex justify-between">
        <h2 className="text-2xl pb-2 font-semibold ">{RowHeading}</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-white bg-primary hover:bg-primaryHover  text-md font-semibold rounded-lg px-5 py-2.5 mr-14 text-center  "
        >
          {showAll ? "See Less.." : "See More.."}
        </button>
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
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomeRows;
