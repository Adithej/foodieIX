import "./App.css";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  //   const currentTheme = localStorage.getItem("currentTheme");
  //   const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");
  // const [data, setData] = useState({ common: [], branded: [] });

  // useEffect(() => {
  //   localStorage.setItem("currentTheme", theme);
  // }, [theme]);

  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <AnalyticsPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
