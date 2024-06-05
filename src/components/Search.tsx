import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_OPTIONS, GEO_API_URL } from "../api";

interface PropType {
  onSearchChange: (parameter: string) => void;
}

interface CityType {
  latitude: number;
  longitude: number;
  name: string;
  countryCode: string;
}

const Search = ({ onSearchChange }: PropType) => {
  const [search, setSearch] = useState("");

  const loadOptions = (inputValue: string) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      GEO_API_OPTIONS
    )
      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map((city: CityType) => {
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
        className="mb-6"
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
