import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import About from "./pages/About";
import PageNotFound from "./ui/PageNotFound";
import { useState } from "react";
import Spinner from "./utility/Spinner";
import Cart from "./features/Cart/Cart";
import toast, { Toaster } from "react-hot-toast";
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
    toast.error("Error Loading Products!");
  }

  // If data is loaded and there's no error, you might want to display the products or return null if nothing is to be displayed
  // For now, returning null as the original issue was about the spinner not disappearing
  return null;
}

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <SortContext.Provider value={{ sortedProducts, setSortedProducts }}>
        <SearchContext.Provider
          value={{ filteredProducts, setFilteredProducts }}
        >
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
        </SearchContext.Provider>
      </SortContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
