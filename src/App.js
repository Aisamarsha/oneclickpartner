import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import PropertyDetail from "./components/pages/propertDetail";
import MortgageCalculator from "./components/pages/mortgageCalculator";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import Insuarances from "./components/pages/insuarances";
import FirstTimeBuyer from "./components/pages/mortgages/firstTimeBuyer";
import Mortgage from "./components/pages/mortgages/mortgage";
import ContactUs from "./components/pages/contactUs";
import Solicitor from "./components/pages/solicitor";
import HomeMover from "./components/pages/mortgages/homeMover";
import Remortgage from "./components/pages/mortgages/remortgage";

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
        <Route path="/mortgage/first-time-buyer" element={<FirstTimeBuyer />} />
        <Route path="/mortgage/home-movers" element={<HomeMover />} />
        <Route path="/mortgage/remortgage" element={<Remortgage />} />
        <Route path="/mortgage" element={<Mortgage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/solicitor" element={<Solicitor />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
