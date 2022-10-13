import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartProvider from "./context/CartConext";
import CartDetailContainer from "./components/CartDetailContainer/CartDetailContainer";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import NavBar from './components/Navbar/NavBar';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter className="container-fluid p-0 overflow-hidden">
      <CartProvider>
      <NavBar/>
        <Routes>
          <Route exact path={'/'} element= {<Home/>} />
          <Route
            exact
            path="/category/:tipo"
            element={<ItemListContainer brand="Vinoteca" />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<CartDetailContainer />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;
