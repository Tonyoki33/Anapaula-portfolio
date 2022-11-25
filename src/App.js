import logo from "./logo.svg";
import "./App.css";
// import { getFirebaseData } from "./components/services/GetData";

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/context/Layout";
import Works from "./components/pages/Works";
import NotFound from "./components/pages/NotFound";
import Contact from "./components/pages/Contact";
import "./components/styles/style.css";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/Anapaula-portfolio/" index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
