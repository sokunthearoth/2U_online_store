import Image from './../component/presentations/imageCart'
import styles from '../styles/style_page.module.css'
import ParallaxImage from '../component/presentations/parallax_image'
import Search from '../component/containers/search'
import Sidebar from '../component/containers/sidebar'
import Sort from '../component/containers/sort'
import React, {useState, useEffect} from 'react';

export default function Women(){
    return(
        <div>
            <ParallaxImage title="women" />
            <div className={styles.product_girl}>
                {/* <hr className={styles.hr}></hr> */}
                <Sidebar></Sidebar>
                <div className={styles.Girl}>
                    <div className={styles.Group}>
                        <Search></Search>
                        <Sort></Sort>
                    </div>
                    <hr className={styles.hr}></hr>
                    <div className={styles.product}>
                        <div className={styles.img}><Image src='set_clothe_women.jpg' title='Set-Shirt' price='15$'/></div>
                        <div className={styles.img}><Image src='product_for_women_hoodie_pink.jpg' title='Shirt' price='10$'/></div>
                        <div className={styles.img}><Image src='product_for_women_jean.jpg' title='Jean' price='15$'/></div>
                        <div className={styles.img}><Image src='black_dress.jpg' title='Dress' price='15$'/></div>
                        <div className={styles.img}><Image src='dress.jpg' title='Dress' price='15$'/></div>
                        <div className={styles.img}><Image src='brown_dress.jpg' title='Dress' price='15$'/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}