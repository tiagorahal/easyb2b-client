import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Pedidos from './components/pedidos';
import React, { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="">
        <Header />
        <div className="body">
        <Pedidos />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
