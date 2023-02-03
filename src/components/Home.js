import React from   'react';
import { Banner } from "./Banner";
import { list } from '../data';
import {Cards} from './Cards';

export const Home = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick}/>
                ))
        }
    </section>
)
};

// <Banner title="Home" />