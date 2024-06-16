import SearchContext from "../../ContextApi/SearchContext";
import EmptySearch from "./EmptySearch";
import HomeSearchRow from "./HomeSearchRow";
import { useContext } from "react";

function Search() {
  const { filteredProducts } = useContext(SearchContext);
  const length = filteredProducts.length;

  if (length > 0) {
    return (
      <div className="px-5">
        {
          <HomeSearchRow
            RowHeading={"Search Results"}
            displayedProducts={filteredProducts}
          />
        }
      </div>
    );
  }

  if (length === 0) {
    return <EmptySearch />;
  }
}

export default Search;
