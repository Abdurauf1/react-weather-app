import { useState } from "react";
import { GEO_API_OPTIONS, GEO_API_URL } from "../api";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }: any) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue: any) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      GEO_API_OPTIONS
    )
      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map((city: any) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData: any) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Search city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
