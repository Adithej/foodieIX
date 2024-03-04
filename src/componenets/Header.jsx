/* eslint-disable react/prop-types */
import "./Header.css";
// import themeLight from "../assets/night.png";
import themeDark from "../assets/day.png";

const Header = () => {
  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };

  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };

  return (
    <nav>
      <ul onClick={hideSidebar} className="sidebar">
        <li>
          <a href="#"></a>
        </li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        <li>Home</li>
        <li>Features</li>
        <li>Products</li>
        <li>About</li>
      </ul>
      <div className="header">
        <div className="logo">
          <img src="../pizza.svg" alt="logo" />
          <h1>FoodieIX</h1>
        </div>

        <ul className="hideOnMobile">
          <li>Home</li>
          <li>Products</li>
          <li>Features</li>
          <li>About</li>
        </ul>
        {/* <div className="search-box">
          <input type="text" placeholder="search here" />
          <img
            src={theme === "light" ? searchIconDay : searchIconNight}
            alt="search icon"
          />
        </div> */}
        <img
          // onClick={toggleMode}
          src={themeDark}
          alt="theme"
          className="toggle-icon hideOnMobile"
        />
        <div className="menu-button" onClick={showSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="#B2BEB5"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Header;
