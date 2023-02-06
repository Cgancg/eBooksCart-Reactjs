import React, {useState} from 'react';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

import { NavigationBar } from "./components/NavigationBar";
import { SiteName } from "./components/SiteName";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";

import { getDataFromLocalStorage } from "./Utils/getDataFromLocalStorage";

export const App = () => {
    const [show, setShow] = useState(true); //hook to display corresponding Navlink
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
           setCart([...cart, item]); //--->To add items to cart if not already present using forEach    
           const cartFromLS = getDataFromLocalStorage("cart", []); 
           console.log({cartFromLS});
           console.log(cart);
    };

    const handleChange = (item, change) => {
                //console.log(item, change); ---> to verify the change performed in cart on the console
          let cartCount = -1;
          cart.forEach((data, index) => {
            if (data.id === item.id)
              cartCount = index;
          });
          const tempCartArr = cart;
          tempCartArr[cartCount].amount += change;

          if (tempCartArr[cartCount].amount === 0)
          tempCartArr[cartCount].amount = 1;
          setCart([...tempCartArr])
    }
  
  return (
        <BrowserRouter>
          <SiteName />
          <NavigationBar size={cart.length} setShow={setShow} />
          {
            show ? <Home handleClick={handleClick} /> : <Cart size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange} />
          }
      
          {
            warning && <div className='warning'>
              Item already in Cart !
              </div>
          }            
          <AppRoutes />         
        </BrowserRouter>
        
  );
};

