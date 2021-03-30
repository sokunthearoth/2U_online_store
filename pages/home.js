import React, { useState, useEffect } from 'react';
// import { Label } from 'react-bootstrap';
import styles from '../styles/home.module.css'
import Button from './../component/presentations/button'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from './../component/presentations/imageCart'


export default function Home() {
    // const sliders = ["/cover_slider_1.jpg", "/cover_slider_4.jpg"];
    // const index = 0;
    // const slider_element = document.getElementById("slide");
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         slider_element.src = sliders[1];
    //         index++;
    //         if (index >= sliders.length) {
    //             index = 0;
    //         }
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

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
    return (
        <div>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" id="img">
              <div class="carousel-item active">
                <img class="d-block w-100" src="cover_slider_7.jpg" alt="First slide" ></img>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="cover_slider_1.jpg" alt="Second slide"></img>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="cover_slider_4.jpg" alt="Third slide"></img>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div className={styles.tb}>
              <h2 className={styles.t1}>Welcome To 2U!</h2>
              <p className={styles.t2}>At the 2U online shop we offer a variety of clothing and skin care products that came from our partnered brands from all over the world.In our store we have up to 30+ items and more to come with the highest quality and shipping with our worldside global express. We value our customer very much so please enjoy your shopping trip at the 2U online store!</p>
          </div>
          <div className={styles.paralax}>
            <p className={styles.p}>PRODUCT</p>
          </div>
          <div className={styles.product}>
            <h2>MEN</h2>
            <div className={styles.men}>
              <div className={styles.group}>
                <img src="product_for_men.jpg"/>
                <Button onclick="/men" label='VIEW ALL'/>
              </div>
              <div className={styles.carousel_men}>
                <Carousel responsive={responsive}>
                  <div>
                    <Image src='hoddies.jpg' title='Plaid Shirt' price='10$'/>
                  </div>
                  <div>
                    <Image src='jecket.jpg' title='Coat' price='30$'/>
                  </div>
                  <div>
                    <Image src='product-image.jpg' title='Coat' price='25$'/>
                  </div>
                  <div>
                    <Image src='product_for_men_watch.jpg' title='Shirt' price='25$'/>
                  </div>
                  <div>
                    <Image src='trouser.jpg' title='Throuser' price='8$'/>
                  </div>
                  <div>
                    <Image src='product_for_men_T-shirt.jpg' title='Shirt' price='25$'/>
                  </div>
                  <div>
                    <Image src='short.jpg' title='Short' price='15$'/>
                  </div>
                </Carousel>
              </div>
            </div>
            <h2>WOMEN</h2>
            <div className={styles.men}>
              <div className={styles.group}>
                <img src="product_for_women.jpg"/>
                <Button onclick="/women" label="VIEW ALL"/>
              </div>
              <div className={styles.carousel_men}>
                <Carousel responsive={responsive}>
                  <div><Image src='set_clothe_women.jpg' title='Set_Shirt' price='15$'/></div>
                  <div><Image src='product_for_women_hoodie_pink.jpg' title='Shirt' price='10$'/></div>
                  <div><Image src='product_for_women_jean.jpg' title='Jean' price='18$'/></div>
                  <div><Image src='product_for_women_skirt.jpg' title='Skirt' price='15$'/></div>
                  <div><Image src='skirt.jpg' title='Skirt' price='15$'/></div>
                  <div><Image src='yellow_dress.jpg' title='Dress' price='10$'/></div>
                  <div><Image src='brown_dress.jpg' title='Dress' price='15$'/></div>
                  <div><Image src='blue_dress.jpg' title='Dress' price='20$'/></div>
                </Carousel>
              </div>
            </div>
              <h2>BOY</h2>
              <div className={styles.men}>
                <div className={styles.group}>
                  <img src="product_for_boy.jpg"/>
                  <Button onclick="/boy" label="VIEW ALL"/>
                </div>
                <div className={styles.carousel_men}>
                  <Carousel responsive={responsive}>
                    <div><Image src='product_for_boy_set_T-shirt.jpg' title='T-shirt' price='10$'/></div>
                    <div><Image src='product_for_boy_sport_T-shirt.jpg' title='T-shirt' price='10$'/></div>
                    <div><Image src='product_for_boy_trousers.jpg' title='Trouser' price='10$'/></div>
                    <div><Image src='product_for_boy_shocks.jpg' title='Plaid Shirt' price='10$'/></div>
                    <div><Image src='product_for_boy_shoes.jpg' title='Trouser' price='10$'/></div>
                  </Carousel>
                </div>
              </div>
              <h2>GIRL</h2>
              <div className={styles.men}>
                <div className={styles.group}>
                  <img src="product_for_girl_clothes.jpg"/>
                  <Button onclick="/girl" label="VIEW ALL"/>
                </div>
                <div className={styles.carousel_men}>
                  <Carousel responsive={responsive}>
                    <div><Image src='product_for_girl_dress.jpg' title='Dress' price='15$'/></div>
                    <div><Image src='product_for_girl_trouser.jpg' title='Trouser' price='8$'/></div>
                    <div><Image src='product_for_girl_Orange_clothes.jpg' title='Set-Dress Kid' price='15$'/></div>
                    <div><Image src='set_clothe.jpg' title='Set-Shirt' price='15$'/></div>
                    <div><Image src='hoddies_girl.jpg' title='Hoddie' price='15$'/></div>
                    <div><Image src='pink_hoodie_girl.jpg' title='Hoddie' price='10$'/></div>
                  </Carousel>
                </div>
              </div>
              <h2>SKINCARE</h2>
              <div className={styles.men}>
                <div className={styles.group}>
                  <img src="product_Men_SkinCare.jpg"/>
                  <Button onclick = "/skincare" label="VIEW ALL"/>
                </div>
                <div className={styles.carousel_men}>
                  <Carousel responsive={responsive}>
                    <div><Image src='product_SkinCare.jpg' title='CLAM Skincare' price='15$'/></div>
                    <div><Image src='skincare-set-dry.jpg' title='Bella Aura Skincare' price='20$'/></div>
                    <div><Image src='Skin_care.jpg' title='Lightening Serum' price='25$'/></div>
                    <div><Image src='Men_SkinCare.jpg' title='Best Face Mask' price='25$'/></div>
                  </Carousel>
                </div>
              </div>
          </div>
        </div>
    )
}