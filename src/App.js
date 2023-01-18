import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import {withRouter} from 'react-router-dom';
import React, { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="">
        <Header />
        <div className="body">

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
