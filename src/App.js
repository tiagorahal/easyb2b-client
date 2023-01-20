import './App.css';
import Footer from './components/footer';
import Header from './components/header';

import Home from './pages/home';
import Checkout from './pages/checkout';
import Pedidos from './pages/pedidos';


import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <div className="">
        <Header />

        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path='home' element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pedidos" element={<Pedidos />} />
        </Routes>

        <div className="body">
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
