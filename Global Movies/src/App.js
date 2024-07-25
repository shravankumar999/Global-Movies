import React from "react";
import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Detail from "./Page/Details/Detail";
import Catalog from "./Page/Catalog";
import Tv from "./Page/Tv";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/detail/:id/:keyword" element={<Detail />} />
          <Route path="/:catalog" element={<Catalog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
