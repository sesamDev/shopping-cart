import "./styles/App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Catalog from "./components/routes/Catalog";
import Checkout from "./components/routes/Checkout";
import Contact from "./components/routes/Contact";
import Home from "./components/routes/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
