import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import PedidosUp from './components/pedidos_up';
import PedidosMiddle from './components/pedidos_middle';
import React, { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="">
        <Header />
        <div className="body">
        <PedidosUp />
        <PedidosMiddle />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
