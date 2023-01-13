import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import PropertyDetail from "./components/pages/propertDetail";
import MortgageCalculator from "./components/pages/mortgageCalculator";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import Insuarances from "./components/pages/insuarances";
import Mortgage from "./components/pages/mortgages/mortgage";

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
        <Route path="/mortgage" element={<Mortgage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
