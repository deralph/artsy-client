import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Product from "./components/product/Product";
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
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
