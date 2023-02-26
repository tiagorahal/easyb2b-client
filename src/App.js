import './app.css'
import React from "react";
import Header from "./components/header";
import Home from './pages/home/home';


function App() {
  return (
    <div className="body bg-white">
      <Header />
      <Home />

    </div>
  );
}

export default App;
