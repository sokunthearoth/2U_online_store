
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
        console.log(cart);
      }  
      const Order = () => {
        addToast("Thank You! Your Order been placed", {
          appearance: 'success',
          autoDismiss: true,
        })
        setcart([]);
      }
      // // const Total = 0
      // //   for(let i=0; i< cart.length; i++){
      // //       Total === Total + Number((cart[i].price));
      // //   }
      // console.log(Total);
    return(
        <div>
          <ParallaxImage title="Your Cart" />
            {cart.map((shop, index ) =>{
              return(
                <Images key={index} onclick={() => addcart(shop)} src={shop.url} title={shop.name} price={shop.price}/>
              );
            })
          }
          {/* <p>Your Total Price is {Total}</p>  */}
          <button onClick={Order}>Order Now!</button>
        </div>
    )
}
  export default shop;
