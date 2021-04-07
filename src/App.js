import logo from "./logo.svg";
import "./App.css";
import Banner from "./Components/Header/Banner/Banner";
import MainPage from "./Components/MainPage/MainPage";
import Support from "./Components/Support/Support";
import SafeSection from "./Components/SafeSection/SafeSection";
import ProductSection from "./Components/Products/Products";
import ShopLocal from "./Components/ShopLocal/shopLocal";
import Footer from "./Components/Footer/Footer";
import { Route, Router } from "react-router-dom";
import ReadStatement from "./Components/SafeSection/ReadOurStatement/ReadourStatement";
import Donate from "./Components/Header/Navbar/Sections/Donate/Donate";
import Contact from "./Components/Header/Navbar/Sections/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Route path="/" component={Banner} />
      {/* <MainPage />
      <Support />
      <SafeSection />
      <ShopLocal />
      <Footer /> */}
      <Route path="/" exact component={MainPage} />
      <Route path="/" exact component={Support} />
      <Route path="/" exact component={SafeSection} />
      <Route path="/donations" exact component={Donate} />
      <Route path="/contactus" exact component={Contact} />
      <Route path="/" exact component={ShopLocal} />
      <Route path="/read" exact component={ReadStatement} />
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
