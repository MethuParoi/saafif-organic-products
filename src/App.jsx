// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
// import AppLayout from "./ui/AppLayout";
// import Home from "./pages/Home";
// import Category from "./pages/Category";
// import Product from "./pages/Product";
// import About from "./pages/About";
// import PageNotFound from "./ui/PageNotFound";
// import LoadingContext from "./ContextApi/LoadingContext";
// import { useState } from "react";
// import Spinner from "./utility/Spinner";

// function App() {
//   const [isLoading, setIsLoading] = useState(false);

//   return (
//     <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
//       {console.log(`isLoading: ${isLoading}`)}
//       {isLoading && <Spinner />}
//       <BrowserRouter>
//         <Routes>
//           <Route element={<AppLayout />}>
//             <Route index element={<Navigate replace to="home" />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/category" element={<Category />} />
//             <Route path="/product" element={<Product />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/*" element={<PageNotFound />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </LoadingContext.Provider>
//   );
// }

// export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import About from "./pages/About";
import PageNotFound from "./ui/PageNotFound";
import LoadingContext from "./ContextApi/LoadingContext";
import { useState } from "react";
import Spinner from "./utility/Spinner";
import Cart from "./features/Cart/Cart";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import Search from "./features/Search/Search";
import SearchContext from "./ContextApi/SearchContext";
import SortContext from "./ContextApi/SortContext";
import useProducts from "./services/apiProducts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function ProductsComponent() {
  const { isLoading, data, error } = useProducts();
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    // Optionally handle the error state, e.g., display an error message
    console.error(error);
    return (
      <div className="flex justify-center items-center text-2xl font-semibold text-red-400">
        Error Loading Products!
        <br /> Check Your Internet Connection.
      </div>
    );
  }

  // If data is loaded and there's no error, you might want to display the products or return null if nothing is to be displayed
  // For now, returning null as the original issue was about the spinner not disappearing
  return null;
}

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const isLoading = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <SortContext.Provider value={{ sortedProducts, setSortedProducts }}>
        <SearchContext.Provider
          value={{ filteredProducts, setFilteredProducts }}
        >
          {/* <LoadingContext.Provider value={{ isLoading, setIsLoading }}> */}
          {/* {isLoading && <Spinner />} */}
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/product" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/search" element={<Search />} />
                <Route path="/*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <ProductsComponent />
          <Toaster
            position="bottom-right"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 5000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "#fffff",
                color: "#3c434f",
              },
            }}
          />
          {/* </LoadingContext.Provider> */}
        </SearchContext.Provider>
      </SortContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
