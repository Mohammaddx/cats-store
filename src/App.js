import React from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import Product from "./pages/product";
import CartInon from "./components/CartInon";
import Store from "./store/store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Cast Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/carts">
                  Carts
                </Link>
              </li>
            </ul>
          </div>
          <CartInon />
        </nav>

        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={Product} />
        <Route path="/carts" component={Carts} />
      </div>
    </Router>
  );
}

const ProviderWithApp = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};

export default ProviderWithApp;
