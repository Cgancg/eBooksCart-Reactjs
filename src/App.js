import React, {useState} from 'react';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { AppProvider } from "./context/AppProvider";

import { NavigationBar } from "./components/NavigationBar";
import { SiteName } from "./components/SiteName";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";

import { getDataFromLocalStorage } from "./Utils/getDataFromLocalStorage";
import { useApp } from "./context/AppProvider";

export const App = () => {
    const [show, setShow] = useState(true); //hook to display corresponding Navlink
    const [cart, setCart] = useState([]); //hook for Cart state
    const [warning, setWarning] = useState(false); //hook for warning

    const handleClick = ({item}) => {
              console.log(item);//--->to verify button-onClick-handleclick returns book details
              localStorage.setItem("cart", JSON.stringify(item));
              const cartFromLS = getDataFromLocalStorage("cart", []); 
              console.log({cartFromLS});
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
           setCart([...cart, item]);//--->To add items to cart if not already present using forEach
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
  
    const handleSize = () => {
      let cartSize = 0;
      cart?.map((item) => (cartSize += item.amount))
      return (cartSize);
  }

  return (
    <AppProvider>
        <BrowserRouter>
          <SiteName />
          <NavigationBar handleSize={handleSize} setShow={setShow} />
          {
            show ? <Home handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          }
      
          {
            warning && <div className='warning'>
              Item already in Cart !
              </div>
          }            
          <AppRoutes />         
        </BrowserRouter>
        </AppProvider>  
  );
};

