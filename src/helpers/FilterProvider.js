import React, { useState } from "react";
import { createContext } from "react";

export const FilterContext = createContext();

export default function FilterProvider(props) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedMenu, setSelectedMenu] = useState("");

  return (
    <FilterContext.Provider
      value={{
        ...props,
        searchItem,
        setSearchItem,
        selectedCategories,
        setSelectedCategories,
        selectedBrand,
        setSelectedBrand,
        selectedRating,
        setSelectedRating,
        sortBy,
        setSortBy,
        selectedMenu,
        setSelectedMenu,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
}
