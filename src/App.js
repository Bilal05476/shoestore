import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
//import Product from "./components/Product";
import Footer from "./components/Footer";
import { useStateValue } from "./components/StateProvider";
import ProductItems from './components/ProductItems';

function App() {
  const [{}, dispatch] = useStateValue();
  return (
    <Router>
      <div className="app">
        <Switch>

          {/**Checkout route */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/**Product route */}
          <Route path="/product">
            <Header />
            <ProductItems />
          </Route>

          {/**Home route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
          
        </Switch>
      </div>
         <Footer />
    </Router>
 
  );
}

export default App;
