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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <Spinner />}
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingContext.Provider>
  );
}

export default App;
