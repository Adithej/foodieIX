/* eslint-disable react/prop-types */
import "./Header.css";
import searchIconDay from "../assets/search-w.png";
import searchIconNight from "../assets/search-b.png";
import themeLight from "../assets/night.png";
import themeDark from "../assets/day.png";

const Header = ({ theme, setTheme }) => {
  const toggleMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="header">
      <div className="logo">
        <img src="../pizza.svg" alt="logo" />
        <h1>FoodieIX</h1>
      </div>

      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="search here" />
        <img
          src={theme === "light" ? searchIconDay : searchIconNight}
          alt="search icon"
        />
      </div>
      <img
        onClick={toggleMode}
        src={theme === "light" ? themeLight : themeDark}
        alt="theme"
        className="toggle-icon"
      />
    </div>
  );
};

export default Header;
