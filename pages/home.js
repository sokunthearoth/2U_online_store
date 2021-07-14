import React, { useState, useEffect, useContext } from 'react';
// import { Label } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import Button from './../component/presentations/button'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from './../component/presentations/imageCart'
import { ProductContext } from './../component/contexts/ProductContext'
export async function getStaticProps() {
  const product = await fetch('http://localhost:8000/api/products')
  const men_shirts = await fetch('http://localhost:8000/api/products/men_shirts')
  const women = await fetch('http://localhost:8000/api/products?category=women')
  const boy = await fetch('http://localhost:8000/api/products?category=boy')
  const girl = await fetch('http://localhost:8000/api/products?category=girl')
  const skincare = await fetch('http://localhost:8000/api/products/skincare')
  const menshirtsdata = await men_shirts.json()
  const womendata = await women.json()
  const boydata = await boy.json()
  const girldata = await girl.json()
  const skincaredata = await skincare.json()
  const productdata = await product.json()
  return {
    
    props: {productdata, menshirtsdata, womendata, boydata, girldata, skincaredata},
  }
}
export default function Home({productdata, menshirtsdata, womendata, boydata, girldata, skincaredata}) {
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
  const { cart, setcart } = useContext(ProductContext)
  useEffect(() => {
    document.title = `Home Page`;
  });
  const addcart = (carts) => {
    setcart(cart.concat(carts));
    console.log(cart);
  }
  return (
    <div>
      <div className={styles.slider}>
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
              {menshirtsdata.map((product, index) => {
                return (
                  <div><Image key={index} onclick={() => addcart(product)} src={product.img_url} title={product.name} price={product.price} /></div>
                );
              }
              )}
            </Carousel>
            <div className={styles.btn}>
              <Button onclick="/men" label='VIEW ALL'/>
            </div>
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
              {womendata.map((product, index) => {
                return (
                  <div><Image key={index} onclick={() => addcart(product)} src={product.img_url} title={product.name} price={product.price} /></div>
                );
              }
              )}
            </Carousel>
            <div className={styles.btn}>
              <Button onclick="/women" label='VIEW ALL'/>
            </div>
          </div>
        </div>
        <h2>BOY</h2>
        <div className={styles.men}>
          <div className={styles.group}>
            <img src="product_for_boy.jpg" />
            <Button onclick="/boy" label='VIEW ALL' />
          </div>
          <div className={styles.carousel_men}>
            <Carousel responsive={responsive}>
              {boydata.map((product, index) => {
                return (
                  <div><Image key={index} onclick={() => addcart(product)} src={product.img_url} title={product.name} price={product.price} /></div>
                );
              }
              )}
            </Carousel>
          </div>
          <div className={styles.btn}>
              <Button onclick="/boy" label='VIEW ALL'/>
          </div>
        </div>
        <h2>GIRL</h2>
        <div className={styles.men}>
          <div className={styles.group}>
            <img src="product_for_girl_clothes.jpg" />
            <Button onclick="/girl" label='VIEW ALL' />
          </div>
          <div className={styles.carousel_men}>
            <Carousel responsive={responsive}>
              {girldata.map((product, index) => {
                return (
                  <div><Image key={index} onclick={() => addcart(product)} src={product.img_url} title={product.name} price={product.price} /></div>
                );
              }
              )}
            </Carousel>
          </div>
          <div className={styles.btn}>
              <Button onclick="/girl" label='VIEW ALL'/>
          </div>
        </div>
        <h2>SKIN CARE</h2>
        <div className={styles.men}>
          <div className={styles.group}>
            <img src="product_Men_SkinCare.jpg" />
            <Button onclick="/skincare" label='VIEW ALL' />
          </div>
          <div className={styles.carousel_men}>
            <Carousel responsive={responsive}>
              {skincaredata.map((product, index) => {
                return (
                  <div><Image key={index} onclick={() => addcart(product)} src={product.img_url} title={product.name} price={product.price} /></div>
                );
              }
              )}
            </Carousel>
          </div>
          <div className={styles.btn}>
              <Button onclick="/skincare" label='VIEW ALL'/>
          </div>
        </div>

      </div>
    </div>
  )
}