import './App.css';
import Footer from './components/footer';
import Header from './components/header';

import Home from './pages/home';
import Checkout from './pages/checkout';

import PedidosUp from './components/pedidos_up';
import PedidosMiddle from './components/pedidos_middle';
import PedidosBottom from './components/pedidos_bottom';

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

        <div className="body">
          <PedidosUp />
          <PedidosMiddle />
          <PedidosBottom />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
