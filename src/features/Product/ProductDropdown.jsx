import { useContext, useRef, useState } from "react";
import useProduct from "../../services/apiProducts";
import SortContext from "../../ContextApi/SortContext";
// import LoadingContext from "../../ContextApi/LoadingContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRowHeading } from "./productSlice";

function ProductDropdown({ label, style, category }) {
  const [isOpen, setIsOpen] = useState(false);
  const { setSortedProducts } = useContext(SortContext);

  // const { setIsLoading } = useContext(LoadingContext);
  const { data: ProductDesc } = useProduct();

  //Reducers for setting row heading
  const dispatch = useDispatch();

  const updateRowHeading = (newHeading) => {
    dispatch(setRowHeading(newHeading));
  };

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  return (
    <div ref={dropdownRef} onMouseLeave={() => setIsOpen(false)}>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className={style}
        type="button"
      >
        {label}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdownHover"
          className="z-50 text-gray-800  bg-gray-200 divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 "
        >
          <ul
            className="z-50 py-2 text-sm text-gray-800 "
            aria-labelledby="select by category"
          >
            <li className="hover:bg-primaryHover hover:text-white ">
              <button
                onClick={() => {
                  if (category === "category") {
                    navigate("/product");
                  }
                  const sorted = ProductDesc.filter(
                    (item) => item.category === "dairy"
                  );
                  setSortedProducts(sorted);
                  updateRowHeading("Dairy");
                }}
                className="block px-1 md:px-4 py-2 w-[8rem] md:w-[11rem] font-semibold rounded-md focus:text-white focus:outline-none focus:ring-2 focus:bg-primary focus:ring-opacity-50"
              >
                Dairy
              </button>
            </li>
            <li className="hover:bg-primaryHover hover:text-white">
              <button
                onClick={() => {
                  const sorted = ProductDesc.filter(
                    (item) => item.category === "fruit"
                  );
                  setSortedProducts(sorted);
                  updateRowHeading("Fruits");
                  if (category === "category") {
                    setSortedProducts(sorted);
                    navigate("/product");
                  }
                }}
                className="block px-1 md:px-4 py-2 w-[8rem] md:w-[11rem] font-semibold rounded-md focus:text-white focus:outline-none focus:ring-2 focus:bg-primary focus:ring-opacity-50"
              >
                Fruits
              </button>
            </li>
            <li className="hover:bg-primaryHover hover:text-white">
              <button
                onClick={() => {
                  const sorted = ProductDesc.filter(
                    (item) => item.category === "dry_fruit"
                  );
                  setSortedProducts(sorted);
                  updateRowHeading("Dry Fruits");
                  if (category === "category") {
                    setSortedProducts(sorted);
                    navigate("/product");
                  }
                }}
                className="block px-1 md:px-4 py-2 w-[8rem] md:w-[11rem] font-semibold rounded-md focus:text-white focus:outline-none focus:ring-2 focus:bg-primary focus:ring-opacity-50"
              >
                Dry Fruits
              </button>
            </li>

            <li className="hover:bg-primaryHover hover:text-white">
              <button
                onClick={() => {
                  const sorted = ProductDesc.filter(
                    (item) => item.category === "oil"
                  );
                  setSortedProducts(sorted);
                  updateRowHeading("Oil");
                  if (category === "category") {
                    setSortedProducts(sorted);
                    navigate("/product");
                  }
                }}
                className="block px-1 md:px-4 py-2 w-[8rem] md:w-[11rem] font-semibold rounded-md focus:text-white focus:outline-none focus:ring-2 focus:bg-primary focus:ring-opacity-50"
              >
                Oil
              </button>
            </li>

            <li className="hover:bg-primaryHover hover:text-white">
              <button
                onClick={() => {
                  const sorted = ProductDesc.filter(
                    (item) => item.category === "meat"
                  );
                  setSortedProducts(sorted);
                  updateRowHeading("Meat");
                  if (category === "category") {
                    setSortedProducts(sorted);
                    navigate("/product");
                  }
                }}
                className="block px-1 md:px-4 py-2 w-[8rem] md:w-[11rem] font-semibold rounded-md focus:text-white focus:outline-none focus:ring-2 focus:bg-primary focus:ring-opacity-50"
              >
                Meat
              </button>
            </li>

            <li className="hover:bg-primaryHover hover:text-white">
              <button
                onClick={() => {
                  const sorted = ProductDesc.filter(
                    (item) => item.category === "fish"
                  );
                  setSortedProducts(sorted);
                  updateRowHeading("Fish");
                  if (category === "category") {
                    setSortedProducts(sorted);
                    navigate("/product");
                  }
                }}
                className="block px-1 md:px-4 py-2 w-[8rem] md:w-[11rem] font-semibold rounded-md focus:text-white focus:outline-none focus:ring-2 focus:bg-primary focus:ring-opacity-50"
              >
                Fish
              </button>
            </li>

            <li className="hover:bg-primaryHover hover:text-white">
              <button
                onClick={() => {
                  const sorted = ProductDesc.filter(
                    (item) => item.category === "eggs"
                  );
                  setSortedProducts(sorted);
                  updateRowHeading("Eggs");
                  if (category === "category") {
                    setSortedProducts(sorted);
                    navigate("/product");
                  }
                }}
                className="block px-1 md:px-4 py-2 w-[8rem] md:w-[11rem] font-semibold rounded-md focus:text-white focus:outline-none focus:ring-2 focus:bg-primary focus:ring-opacity-50"
              >
                Eggs
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductDropdown;
