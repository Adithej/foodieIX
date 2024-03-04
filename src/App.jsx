import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./componenets/SearchBar";
import SearchList from "./componenets/SearchList";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";

function App() {
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");
  const [data, setData] = useState({ common: [], branded: [] });

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="main-content">
        <SearchBar setData={setData} theme={theme} />
        {(data.common && data.common.length > 0) ||
        (data.branded && data.branded.length > 0) ? (
          <SearchList data={data} />
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;
