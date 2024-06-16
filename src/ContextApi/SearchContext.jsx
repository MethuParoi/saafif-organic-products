import { createContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <SearchContext.Provider value={{ filteredProducts, setFilteredProducts }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
