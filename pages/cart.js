
import React, { useState, useEffect, useContext } from 'react';
// import { Label } from 'react-bootstrap';
import ParallaxImage from '../component/presentations/parallax_image'
import "react-multi-carousel/lib/styles.css";
import Images from './../component/presentations/imageCarts'
import { ProductContext } from './../component/contexts/ProductContext'
import { UserContext } from './../component/contexts/UserContext'
import { ToastProvider, useToasts } from 'react-toast-notifications';
import styles from '../styles/cart.module.css'

const shop = () => {
  const { addToast } = useToasts();
  const { cart, setcart } = useContext(ProductContext)
  const { user, setUser } = useContext(UserContext)
  console.log(cart)
  const addcart = (carts) => {
    setcart(cart.concat(carts));
    console.log(cart.length);
  }
  const Order = () => {
    fetch('http://localhost:8000/api/orders/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "products": cart,
        "gender":user.gender,
        "name":user.name,
        "email":user.email,
        "phone_number":user.phone_number
      })
    })
      .then(response => response.json())
      .then(data =>{ console.log(data),console.log("after",cart)})
      .catch((err) => {
        console.error(err)
      })
  }
  let Total = 0
  for (let i = 0; i < cart.length; i++) {
    Total = Total + Number((cart[i].price));
  }
  console.log(Total);
  console.log(cart);
  return (
    <div className={styles.shopping_cart}>
      <ParallaxImage title="Your Cart" />
      <div className={styles.cart}>
        {cart.map((shop, index) => {
          return (
            <Images key={index} onclick={() => addcart(shop)} src={shop.img_url} title={shop.name} price={shop.price}  />
          );
        })
        }
      </div>
      {cart.length > 0 ? (<p>Your Total Price is {Total} $</p>) : (<div className={styles.button}><p>You didn't have your cart.</p><a href="home"><button>Go to shop</button></a></div>)}
      {cart.length > 0 ? (<button onClick={Order} className={styles.btn}>Order Now!</button>) : (<div></div>)}
    </div>
  )
}
export default shop;
