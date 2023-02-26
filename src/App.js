import './app.css'
import React from "react";
import Header from "./components/header";
import Home from './pages/home/home';
import Footer from './components/footer';


function App() {
  return (
    <div className="body bg-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
