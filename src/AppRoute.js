import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Collections from "./pages/products";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import CheckOut from "./pages/checkout";
import WishList from "./pages/wishlist";
import UserDashboard from "./pages/dashboard";
import Track from "./pages/order-track/";
import TrackOrderSingle from "./pages/order-track/TrackOrderSingle";
import OrderDetail from "./pages/order-track/OrderDetail";
import Profile from "./pages/profile";
import Login from "./pages/athentication";
import ABC from "./pages/abc/abc";

function AppRoute() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact-us">
            <Contact />
          </Route>
          <Route exact path="/collection">
            <Collections />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/abc">
            <ABC />
          </Route>
          <Route exact path="/checkout">
            <CheckOut />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/wish-list">
            <WishList />
          </Route>
          <Route exact path="/order-detail">
            <OrderDetail />
          </Route>
          <Route exact path="/track-order">
            <Track />
          </Route>

          <Route exact path="/track-order-single">
            <TrackOrderSingle />
          </Route>
          <Route exact path="/user-dashborad">
            <UserDashboard />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default AppRoute;
