import React from 'react';

export const Cards =({item, handleClick}) => {
    const {title, author, price, img} = item;
    return(
        <div className="cards">
            <div className='image_box'>
                <img src={img} alt="Image" />
            </div>
            <div className='details'>
                <p>{title}</p>
                <p>{author}</p>
                <p>Price - £{price}</p>
                <button onClick={()=>handleClick({item})}>Add to cart</button>
            </div>
        </div>
    )
}