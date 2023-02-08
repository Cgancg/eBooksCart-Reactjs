import React, { useState } from "react";

import { useApp } from "../context/AppProvider";
import { list } from "../data";
import { Cards } from "../components/Cards";
import { getDataFromLocalStorage } from "../utils1/getDataFromLocalStorage";

export const Home = () => {
  const { setCart } = useApp();
  const [warning, setWarning] = useState(false);

  const handleClick = ({ item }) => {
    const cartFromLS = getDataFromLocalStorage("cart", []);

    const isPresent = cartFromLS.find((cart) => cart.id === item.id);

    if (!isPresent) {
      cartFromLS.push(item);

      localStorage.setItem("cart", JSON.stringify(cartFromLS));

      setCart(cartFromLS);
    } else {
      setWarning(true);

      setTimeout(() => {
        setWarning(false);
      }, 2000);
    }
  };

  return (
    <section>
      {warning && <div className="warning">Item already in Cart !</div>}

      {list.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
};
