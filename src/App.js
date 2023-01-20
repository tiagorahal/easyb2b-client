import './App.css';
import Footer from './components/footer';
import Header from './components/header';

import Home from './pages/home';
import Checkout from './pages/checkout';
import Pedidos from './pages/pedidos';


import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <div className="">
        <Header />

        <Routes>
            <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Routes>
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
