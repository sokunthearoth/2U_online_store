
import React, { useState, useEffect, useContext } from 'react';
// import { Label } from 'react-bootstrap';
import ParallaxImage from '../component/presentations/parallax_image'
import "react-multi-carousel/lib/styles.css";
import Images from './../component/presentations/imageCarts'
import { ProductContext } from './../component/contexts/ProductContext'
import {ToastProvider, useToasts} from 'react-toast-notifications';
  const shop = () =>{
    const {addToast} = useToasts();
      const {cart,setcart}=useContext(ProductContext)
      console.log(cart)
      const addcart = (carts) => {
        setcart(cart.concat(carts));
        console.log(cart.length);
      }  
      const Order = () => {
        addToast("Thank You! Your Order been placed", {
          appearance: 'success',
          autoDismiss: true,
        })
        setcart([]);
      }
      let Total = 0
        for(let i=0; i< cart.length; i++){
            Total = Total + Number((cart[i].price));
        }
      console.log(Total);
      console.log(cart);
    return(
        <div>
          <ParallaxImage title="Your Cart" />
            {cart.map((shop, index ) =>{
              return(
                <Images key={index} onclick={() => addcart(shop)} src={shop.url} title={shop.name} price={shop.price}/>
              );
            })
          }
          {cart.length > 0 ? (<p>Your Total Price is {Total}</p>) : (<div></div>)  } 
          {cart.length > 0 ? (<button onClick={Order}>Order Now!</button>) :  (<div></div>)}
        </div>
    )
}
  export default shop;
