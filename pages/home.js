import React, { useState, useEffect, useContext } from 'react';
// import { Label } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import Button from './../component/presentations/button'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from './../component/presentations/imageCart'
import { ProductContext } from './../component/contexts/ProductContext'
export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const products = [
    {
      url: "hoddies.jpg",
      name: "Plaid Shirt",
      price: 10,
      gender: "MEN",
      type: "new-in",
    },
    {
      url: "jecket.jpg",
      name: "Coat",
      price: 30,
      gender: "MEN",
      type: "new-in",
    },
    {
      url: "product-image.jpg",
      name: "Coat",
      price: 25,
      gender: "MEN",
      type: "new-in",
    },
    {
      url: "product_for_men_watch.jpg",
      name: "Shirt",
      price: 25,
      gender: "MEN",
      type: "new-in",
    },
    {
      url: "trouser.jpg",
      name: "Throuser",
      price: 8,
      gender: "MEN",
      type: "new-in",
    },
    {
      url: "product_for_men_T-shirt.jpg",
      name: "Shirt",
      price: 10,
      gender: "MEN",
      type: "new-in",
    },
    {
      url: "short.jpg",
      name: "Short",
      price: 15,
      gender: "MEN",
      type: "new-in",
    },
    {
      url: "set_clothe_women.jpg",
      name: "Set_Shirt",
      price: 15,
      gender: "WOMEN",
      type: "new-in"
    },
    {
      url: "product_for_women_hoodie_pink.jpg",
      name: "Shirt",
      price: 10,
      gender: "WOMEN",
      type: "new-in"
    },
    {
      url: "product_for_women_jean.jpg",
      name: "Jean",
      price: 18,
      gender: "WOMEN",
      type: "new-in"
    },
    {
      url: "product_for_women_skirt.jpg",
      name: "Skirt",
      price: 15,
      gender: "WOMEN",
      type: "new-in"
    },
    {
      url: "skirt.jpg",
      name: "Skirt",
      price: 15,
      gender: "WOMEN",
      type: "new-in"
    },
    {
      url: "yellow_dress.jpg",
      name: "Dress",
      price: 10,
      gender: "WOMEN",
      type: "new-in"
    },
    {
      url: "brown_dress.jpg",
      name: "Dress",
      price: 15,
      gender: "WOMEN",
      type: "new-in",
    },
    {
      url: "blue_dress.jpg",
      name: "Dress",
      price: 20,
      gender: "WOMEN",
      type: "new-in",
    },
    {
      url: "product_for_boy_set_T-shirt.jpg",
      name: "T-shirt",
      price: 10,
      gender: "BOY",
      type: "new-in",
    },
    {
      url: "product_for_boy_sport_T-shirt.jpg",
      name: "T-shirt",
      price: 10,
      gender: "BOY",
      type: "new-in",
    },
    {
      url: "product_for_boy_trousers.jpg",
      name: "Trouser",
      price: 10,
      gender: "BOY",
      type: "new-in",
    },
    {
      url: "product_for_boy_shocks.jpg",
      name: "Plaid Shirt",
      price: 10,
      gender: "BOY",
      type: "new-in",
    },
    {
      url: "product_for_boy_shoes.jpg",
      name: "Trouser",
      price: 10,
      gender: "BOY",
      type: "new-in",
    },
    {
      url: "product_for_girl_dress.jpg",
      name: "Dress",
      price: 15,
      gender: "GIRL",
      type: "new-in",
    },
    {
      url: "product_for_girl_trouser.jpg",
      name: "Trouser",
      price: 8,
      gender: "GIRL",
      type: "new-in",
    },
    {
      url: "product_for_girl_Orange_clothes.jpg",
      name: "Set-Dress Kid",
      price: 15,
      gender: "GIRL",
      type: "new-in",
    },
    {
      url: "set_clothe.jpg",
      name: "Set-Shirt",
      price: 15,
      gender: "GIRL",
      type: "new-in",
    },
    {
      url: "hoddies_girl.jpg",
      name: "Hoddie",
      price: 15,
      gender: "GIRL",
      type: "new-in",
    },
    {
      url: "pink_hoodie_girl.jpg",
      name: "Hoddie",
      price: 10,
      gender: "GIRL",
      type: "new-in",
    },
    {
      url: "product_SkinCare.jpg",
      name: "CLAM Skincare",
      price: 15,
      gender: "SKIN-CARE",
      type: "new-in",
    },
    {
      url: " skincare-set-dry.jpg",
      name: "Bella Aura Skincare",
      price: 20,
      gender: "SKIN-CARE",
      type: "new-in",
    },
    {
      url: "Skin_care.jpg",
      name: "Lightening Serum",
      price: 25,
      gender: "SKIN-CARE",
      type: "new-in",
    },
    {
      url: "Men_SkinCare.jpg",
      name: "Best Face Mask",
      price: 25,
      gender: "SKIN-CARE",
      type: "new-in",
    },
  ]
  const {cart,setcart}=useContext(ProductContext)
    useEffect(() => {
      document.title = `Home Page`;
    });
    const addcart = (carts) => {
      setcart(cart.concat(carts));
      console.log(cart);
    }
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" id="img">
            <div className="carousel-item active">
              <img className="d-block w-100" src="cover_slider_7.jpg" alt="First slide" ></img>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="cover_slider_1.jpg" alt="Second slide"></img>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="cover_slider_4.jpg" alt="Third slide"></img>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className={styles.tb}>
          <h2 className={styles.t1}>Welcome To 2U!</h2>
          <p className={styles.t2}>At the 2U online shop we offer a variety of clothing and skin care products that came from our partnered brands from all over the world. In our store we have up to 30 products, items and more to come with the highest quality and shipping with our worldside global express. We value our customer very much so please enjoy your shopping trip at the 2U online store!</p>
        </div>
        <div className={styles.paralax}>
          <p className={styles.p}>PRODUCT</p>
        </div>
        <div className={styles.product}>
          <h2>MEN</h2>
          <div className={styles.men}>
            <div className={styles.group}>
              <img src="product_for_men.jpg" />
              <Button onclick="/men" label='VIEW ALL' />
            </div>
            <div className={styles.carousel_men}>
              <Carousel responsive={responsive}>
                {products.filter(product => product.gender === "MEN").map((product,index) => {
                  return (
                    <div><Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} /></div>
                  );
                }
                )}
              </Carousel>
            </div>
          </div>
          <h2>WOMEN</h2>
          <div className={styles.men}>
            <div className={styles.group}>
              <img src="product_for_women.jpg" />
              <Button onclick="/women" label='VIEW ALL' />
            </div>
            <div className={styles.carousel_men}>
              <Carousel responsive={responsive}>
                {products.filter(product => product.gender === "WOMEN").map((product,index) => {
                  return (
                    <div><Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} /></div>
                  );
                }
                )}
              </Carousel>
            </div>
          </div>
          <h2>BOY</h2>
          <div className={styles.men}>
            <div className={styles.group}>
              <img src="product_for_boy.jpg" />
              <Button onclick="/boy" label='VIEW ALL' />
            </div>              <div className={styles.carousel_men}>
              <Carousel responsive={responsive}>
                {products.filter(product => product.gender === "BOY").map((product,index) => {
                  return (
                    <div><Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} /></div>
                  );
                }
                )}
              </Carousel>
            </div>
          </div>
          <h2>GIRL</h2>
          <div className={styles.men}>
            <div className={styles.group}>
              <img src="product_for_girl_clothes.jpg" />
              <Button onclick="/girl" label='VIEW ALL' />
            </div>              <div className={styles.carousel_men}>
              <Carousel responsive={responsive}>
                {products.filter(product => product.gender === "GIRL").map((product,index) => {
                  return (
                    <div><Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} /></div>
                  );
                }
                )}
              </Carousel>
            </div>
          </div>
          <h2>SKIN CARE</h2>
          <div className={styles.men}>
            <div className={styles.group}>
              <img src="product_Men_SkinCare.jpg" />
              <Button onclick="/skincare" label='VIEW ALL' />
            </div>              <div className={styles.carousel_men}>
              <Carousel responsive={responsive}>
                {products.filter(product => product.gender === "SKIN-CARE").map((product,index) => {
                  return (
                    <div><Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} /></div>
                  );
                }
                )}
              </Carousel>
            </div>
          </div>

        </div>
      </div>
    )
}