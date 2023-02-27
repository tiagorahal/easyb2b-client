import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/header";
import Home from "./pages/home/home";
import Footer from "./components/footer";
import ProductsList from "./pages/productList/productList";
import Orders from "./pages/orders/orders";
import OrderDetails from "./pages/orderDetails/orderDetails";

function App() {
  return (
    <div className="body bg-white">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productlist" element={<ProductsList />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/orderdetails" element={<OrderDetails />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
