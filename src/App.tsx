import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/home/Home';
import Product from './components/product/Product';

function App() {
  return (
    <BrowserRouter>
    <main >
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/product' element={<Product/>}/>
      
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
