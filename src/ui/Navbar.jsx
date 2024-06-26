import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCartQunatity } from "../features/Cart/cartSlice";
import useProduct from "../services/FakeApi";
import LoadingContext from "../ContextApi/LoadingContext";
import SearchContext from "../ContextApi/SearchContext";
import SortContext from "../ContextApi/SortContext";
import ProductDropdown from "../features/Product/ProductDropdown";
import { setRowHeading } from "../features/Product/productSlice";

function Navbar() {
  const navigate = useNavigate();

  //ContextApi hooks
  const { setFilteredProducts } = useContext(SearchContext);

  //state variables
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  //reducer hooks
  const totalCartQuantity = useSelector(getTotalCartQunatity);
  const { setIsLoading } = useContext(LoadingContext);
  const { data: ProductDesc } = useProduct(setIsLoading);

  //For showing all data at product page on mount
  const { setSortedProducts } = useContext(SortContext);

  useEffect(() => {
    if (ProductDesc && searchValue) {
      const filtered = ProductDesc.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [ProductDesc, searchValue]);

  //Reducers for setting row heading
  const dispatch = useDispatch();

  const updateRowHeading = (newHeading) => {
    dispatch(setRowHeading(newHeading));
  };

  return (
    <>
      <nav className="z-20 border-gray-200 bg-gray-100 sticky top-0">
        <div className="min-w-screen flex flex-row flex-wrap items-center justify-between py-4 pr-2 md:pr-0 container mx-auto">
          {/* logo div */}
          <div>
            <button
              onClick={() => {
                navigate("/home");
              }}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-14 lg:h-20" alt=" Logo" />
            </button>
          </div>
          {/* logo div */}

          <div className="flex md:order-2 md:hidden">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded={isExpanded ? "true" : "false"}
              className="md:hidden text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 me-1"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="sr-only">Menu</span>
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className={`lg:pr-[3rem] items-center justify-between w-full md:flex md:w-auto ${
              isExpanded ? "block" : "hidden"
            } block`}
            id="navbar-search"
          >
            <ul className="relative flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
              <li>
                <button
                  onClick={() => navigate("/home")}
                  className="block py-2 px-3 rounded hover:text-primary text-xl text-gray-900 md:p-0 "
                  aria-current="page"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="block py-2 px-3 text-gray-900 rounded md:p-0 dark:border-gray-700 hover:text-primary text-xl"
                >
                  About
                </button>
              </li>
              <li className="absolute left-[13rem] md:left-[16rem] top-[1rem] md:top-0">
                <ProductDropdown
                  label={"Category"}
                  style={
                    "text-center inline-flex items-center py-2 px-3 text-gray-900 rounded md:p-0 hover:text-primary text-xl border-gray-700"
                  }
                  category={"category"}
                />
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/product");
                    setSortedProducts(ProductDesc);
                    updateRowHeading("Products");
                  }}
                  className="block py-2 px-3 text-gray-900 rounded md:p-0 hover:text-primary text-xl border-gray-700"
                >
                  Products
                </button>
              </li>
            </ul>
          </div>

          {/* {Cart & Search} ---------------------------------*/}
          <div className="">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <span className="sr-only">Menu</span>

              <span className="sr-only">search icon</span>
            </div>

            <div className="flex items-center gap-2 md:gap-0">
              {/* Cart */}
              <div
                onClick={() => {
                  navigate("/cart");
                }}
                className="ml-20 md:ml-0 mr-5 cursor-pointer relative"
              >
                <BsCart4 className="text-4xl hover:text-primary text-primaryHover" />
                <div className="text-md bg-secondary text-gray-50 font-bold h-6 w-6 rounded-full flex items-center justify-center absolute top-[25px] left-[-12px]">
                  {totalCartQuantity}
                </div>
              </div>

              <div className="block">
                <input
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    navigate("/search");
                    if (!e.target.value) {
                      navigate("/home");
                    }
                  }}
                  onBlur={() => setSearchValue("")}
                  type="text"
                  id="search-navbar"
                  className="block w-full px-2 h-[40px] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              {/* Search Button */}
              <div
                onClick={() => {
                  navigate("/search");
                }}
                className="z-10 ml-[-2.5rem] px-3 h-[42px] rounded-r-lg bg-primary hover:bg-primaryHover flex items-center justify-center"
              >
                <IoSearch className="text-xl font-bold" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
