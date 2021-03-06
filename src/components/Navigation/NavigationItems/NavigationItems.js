import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Burger builder</NavigationItem>
    <NavigationItem link="/orders">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
