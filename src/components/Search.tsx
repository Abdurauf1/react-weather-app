import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = () => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue: string) => {
    
  }

  return (
    <>
      <AsyncPaginate placeholder="Search city" debounceTimeout={600} value={search} />
    </>
  );
};

export default Search;
