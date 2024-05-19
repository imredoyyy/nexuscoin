import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Integrations from "./Pages/Integrations";
import Contact from "./Pages/Contact";
import Coin from "./Pages/Coin";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":id" element={<Coin />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
