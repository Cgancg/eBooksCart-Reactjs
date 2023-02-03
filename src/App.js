import React, {useState} from 'react';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

import { NavigationBar } from "./components/NavigationBar";
import { SiteName } from "./components/SiteName";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";

export const App = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]); //hook for Cart state
    const [warning, setWarning] = useState(false); //hook for warning

    const handleClick = ({item}) => {
              // console.log(item);--->to verify button-onClick-handleclick returns book details
          let iteminCart = false;
          cart.forEach((product)=>{
            if (item.id === product.id)
              iteminCart = true;
          })
          if (iteminCart)
          {
            setWarning(true); //--->to issue warning if Item already present in cart
            setTimeout(()=>{
              setWarning(false); 
            },2000);
            return;
          }
          // return;
           setCart([...cart, item]);  //--->To add items to cart if not already present using forEach    
    };
  
  return (
        <BrowserRouter>
          <SiteName />
          <NavigationBar size={cart.length} />
          <Home handleClick={handleClick} />
          
          <Cart /> 
          
          {
            warning && <div className='warning'>
              Item already in Cart !
              </div>
          }            
           <AppRoutes />         
        </BrowserRouter>
        
  );
}

