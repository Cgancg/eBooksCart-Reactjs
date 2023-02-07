import React, {useState, useEffect} from "react";
import { getDataFromLocalStorage } from "../Utils/getDataFromLocalStorage";


export const Cart = ({cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () =>{
      let amt = 0;
      cart?.map((item) => (amt += item.amount * item.price))
      setPrice(amt);
  }

  const handleSize = () => {
      let cartSize = 0;
      cart?.map((item) => (cartSize += item.amount))
      return (cartSize);
  }
  // const cartItem = ({ item }) => {
  //   const { setCart } = useApp();

    const handleRemove = (id) =>{
    
    // console.log(cartFromLS);
    const arr = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(arr));
    setCart(arr);
    console.log(arr);
    const cartFromLS = getDataFromLocalStorage("cart", []);
    console.log(cartFromLS);
    // handlePrice();
  }


  useEffect(()=>{
    handlePrice();
  })

  return(
    <article>
      {
        cart?.map((item)=>(
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={()=>handleChange(item, +1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={()=>handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>£{item.price * item.amount}</span>
              <button onClick={()=>handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      }
        <div className='total'>
        <span>Total Cost of {handleSize()} products : £{price.toFixed(2)}</span>
        </div>

      </article>
  
  )
}



// import { Banner } from "../components/Banner";

// export const Cart = () => {
//   return <Banner title="MyCart" />;
// };