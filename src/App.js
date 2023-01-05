import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import PropertyDetail from "./components/pages/propertDetail";
import MortgageCalculator from "./components/pages/mortgageCalculator";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import Insuarances from "./components/pages/insuarances";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/calculator" element={<MortgageCalculator />} />
        <Route path="/insuarance" element={<Insuarances />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
