import { useState, useEffect } from "react";

import { useApp } from "../context/AppProvider";

export const Cart = () => {
  const { cart, setCart } = useApp();

  const [price, setPrice] = useState(0);

  const handleChange = (item, operation) => {
    const cartIndex = cart.findIndex((data) => data.id === item.id);

    if (operation === "REMOVE" && cart[cartIndex].amount > 1) {
      cart[cartIndex].amount -= 1;

      localStorage.setItem("cart", JSON.stringify([...cart]));

      setCart([...cart]);

      return;
    }

    if (operation === "REMOVE" && cart[cartIndex].amount === 1) {
      const filteredCart = cart.filter((data) => data.id !== item.id);

      localStorage.setItem("cart", JSON.stringify([...filteredCart]));

      setCart([...filteredCart]);

      return;
    }

    if (operation === "ADD") {
      cart[cartIndex].amount += 1;

      localStorage.setItem("cart", JSON.stringify([...cart]));

      setCart([...cart]);

      return;
    }
  };

  const handleRemove = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(filteredCart));
    setCart(filteredCart);
  };

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, item) => (acc += item.amount * item.price),
      0
    );

    setPrice(totalPrice);
  }, [cart]);

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, "ADD")}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, "REMOVE")}>-</button>
          </div>
          <div>
            <span>£{(item.price * item.amount).toFixed(2)}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>
          Total Cost of {cart.length} products : £{price.toFixed(2)}
        </span>
      </div>
    </article>
  );
};
