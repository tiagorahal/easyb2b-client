import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import Checkout from './pages/checkout';
import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <div className="">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
