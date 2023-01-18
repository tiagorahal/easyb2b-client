import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Checkout from "./pages/checkout";
import Header from "./components/header";

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Header } path="/" exact></Route>
            <Route component = { Checkout }  path="/pages/checkout"></Route>
        </BrowserRouter>
    )
}

export default Routes;