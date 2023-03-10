import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/header";
import Home from "./pages/home/home";
import Footer from "./components/footer";
import ProductsList from "./pages/productList/productList";
import Orders from "./pages/orders/orders";
import OrderDetails from "./pages/orderDetails/orderDetails";
import ControlPanel from "./pages/controlPanel/controlPanel";
import ProductDescription from "./pages/productDescription/productDescription";
import SideCartProducts from "./components/sideCartProducts";

function App() {
  return (
    <div className="body bg-white">
      <BrowserRouter>
        <Header />
        <SideCartProducts />

        <Routes>
          {/*<Route path="/" element={<Home />}></Route>*/}
          <Route path="/" element={<ProductsList />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/orderdetails" element={<OrderDetails />}></Route>
          <Route path="/controlpanel" element={<ControlPanel />}></Route>
          <Route path="/productdescription" element={<ProductDescription />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
