import "./SearchBar.css";
import searchIconDay from "../assets/search-w.png";
import searchIconNight from "../assets/search-b.png";
import { useState } from "react";
import { searchInsatnt } from "../apis/searchInstant";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ setData, theme }) => {
  const [isFocused, setIsFocused] = useState(false); // Track focus state
  const [term, setTerm] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (value) => {
    setTerm(value);
    if (value === "") {
      setData([]); // Set data to empty array on clear
      return; // Early return to avoid unnecessary fetch
    }
    if (value.length >= 3) {
      setTimeout(() => {
        searchInsatnt(value, setData);
      }, 300);
    }
  };

  return (
    <div
      className={`search-box ${isFocused ? "focused" : ""}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <input
        placeholder="search food database"
        type="text"
        value={term}
        onChange={(e) => handleChange(e.target.value)}
      />
      <img
        src={theme === "light" ? searchIconDay : searchIconNight}
        alt="search icon"
      />
    </div>
  );
};

export default SearchBar;
