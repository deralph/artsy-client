import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Popup from "./components/product/Popup";
import Product from "./components/product/Product";
import SingleArt from "./components/product/SingleArt";
import Logins from "./components/sign in/Logins";
import Register from "./components/sign in/Register";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Logins />} />
          <Route path="/singlePage" element={<SingleArt />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="*" element={<h1>ERROR PAGE</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
