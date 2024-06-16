import { createContext, useState } from "react";

const SortContext = createContext();

export function SortProvider({ children }) {
  const [sortedProducts, setSortedProducts] = useState([]);

  return (
    <SortContext.Provider value={{ sortedProducts, setSortedProducts }}>
      {children}
    </SortContext.Provider>
  );
}

export default SortContext;
