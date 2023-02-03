import React, {useState} from 'react';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

import { NavigationBar } from "./components/NavigationBar";
import { SiteName } from "./components/SiteName";
import { Home } from "./components/Home";
// import { Cart } from "./components/Cart"

export const App = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);

    const handleClick = ({item}) => {
      console.log(item);
    };


  return (
        <BrowserRouter>
          <SiteName />
          <NavigationBar size={cart.length}/>
          <Home handleClick={handleClick}/>
          <AppRoutes />
          
      {/* <Cart /> */}
        </BrowserRouter>
        
  );
}

