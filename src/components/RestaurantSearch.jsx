import { useState, useCallback } from "react";

const RestaurantSearch = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedSearch = useCallback(
    debounce(onSearch, 300),
    [onSearch]
  );

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    debouncedSearch(text);
  };

return (
    <input
        type="text"
        placeholder="Search restaurants..."
        value={searchText}
        onChange={handleInputChange}
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
);
};

export default RestaurantSearch;
