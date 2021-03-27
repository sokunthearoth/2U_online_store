import React, { useState, useEffect } from 'react';
import styles from '../styles/home.module.css'
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
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="cover_slider_3.jpg" alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="cover_slider_3.jpg" alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="cover_slider_3.jpg" alt="Third slide"></img>
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
                <p className={styles.t1}>Welcome To 2U!</p>
                <p className={styles.t2}>At the 2U online shop we offer a variety of clothing and skin care products that came from our partnered brands from all over the world.In our store we have up to 30+ items and more to come with the highest quality and shipping with our worldside global express. We value our customer very much so please enjoy your shopping trip at the 2U online store!</p>
            </div>
            <div className={styles.paralax}>
            <p className={styles.p}>PRODUCT</p>
            </div>
            <div id="root"></div>
        </div>
    )
}