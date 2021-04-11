import React, { useState, useEffect, useContext } from 'react';
// import { Label } from 'react-bootstrap';
import styles from '../styles/home.module.css'
import Button from './../component/presentations/button'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Images from './../component/presentations/imageCarts'
import { ProductContext } from './../component/contexts/ProductContext'
  const shop = () =>{
      const {cart,setcart}=useContext(ProductContext)
      console.log(cart)
      const addcart = (carts) => {
        setcart(cart.concat(carts));
        console.log(cart);
      }  
      // function Order(){
      //   setcart(cart === ({[]}))
      // }
      // const Total = 0
      //   for(let i=0; i< cart.length; i++){
      //       Total === Total + Number((cart[i].price));
      //   }
      console.log(Total);
    return(
        <div>
            {cart.map((shop, index ) =>{
              return(
                <Images key={index} onclick={() => addcart(shop)} src={shop.url} title={shop.name} price={shop.price}/>
              );
            })
          }
          <p>Your Total Price is {Total}</p> 
          <button onClick={Order()} className={styles.button}>Order Now!</button>
        </div>
    )
}
export default shop;