import { useContext, useState } from "react";
import useProduct from "../../services/FakeApi";
import SortContext from "../../ContextApi/SortContext";
import LoadingContext from "../../ContextApi/LoadingContext";

function ProductDropdown({ label, style }) {
  const [isOpen, setIsOpen] = useState(false);
  const { setSortedProducts } = useContext(SortContext);

  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { data: ProductDesc, error } = useProduct(setIsLoading);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
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
          className="z-9 text-gray-800  bg-gray-200 divide-y divide-gray-100 rounded-lg shadow w-44 "
        >
          <ul
            className="py-2 text-sm text-gray-800 "
            aria-labelledby="select by category"
          >
            <li className="hover:bg-primaryHover hover:text-white ">
              <button
                onClick={() => {
                  const sorted = ProductDesc.filter(
                    (item) => item.category === "men's clothing"
                  );
                  setSortedProducts(sorted);
                }}
                className="block px-4  py-2 w-[11rem] font-semibold rounded-md focus:text-white focus:outline-none focus:ring-2 focus:bg-primary focus:ring-opacity-50"
              >
                men&apos;s clothing
              </button>
            </li>
            <li className="hover:bg-primaryHover hover:text-white">
              <button
                onClick={() => {
                  const sorted = ProductDesc.filter(
                    (item) => item.category === "women's clothing"
                  );
                  setSortedProducts(sorted);
                }}
                className="block px-4 py-2 w-[11rem] font-semibold rounded-md focus:text-white focus:outline-none focus:ring-2 focus:bg-primary focus:ring-opacity-50"
              >
                women&apos;s clothing
              </button>
            </li>
            <li className="hover:bg-primaryHover hover:text-white">
              <button
                onClick={() => {
                  const sorted = ProductDesc.filter(
                    (item) => item.category === "jewelery"
                  );
                  setSortedProducts(sorted);
                }}
                className="block px-4 py-2 w-[11rem] font-semibold rounded-md focus:text-white focus:outline-none focus:ring-2 focus:bg-primary focus:ring-opacity-50"
              >
                jewelery
              </button>
            </li>
            <li className="hover:bg-primaryHover hover:text-white">
              <button
                onClick={() => {
                  const sorted = ProductDesc.filter(
                    (item) => item.category === "electronics"
                  );
                  setSortedProducts(sorted);
                }}
                className="block px-4 py-2 w-[11rem] font-semibold rounded-md focus:text-white focus:outline-none focus:ring-2 focus:bg-primary focus:ring-opacity-50"
              >
                electronics
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductDropdown;
