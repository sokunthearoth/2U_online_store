import Image from './../component/presentations/imageCart'
import Sidebar from '../component/containers/sidebar'
import Search from '../component/containers/search'
import ParallaxImage from '../component/presentations/parallax_image'
import styles from '../styles/style_page.module.css'
import Sort from '../component/containers/sort'
import { ProductContext } from './../component/contexts/ProductContext'
import { SelectContext } from './../component/contexts/SelectContext'
import React, { useState, useEffect, useContext } from 'react';
export default function Men() {
    const products = {
        men_shirt:[
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
            url: "product_for_men_T-shirt.jpg",
            name: "Shirt",
            price: 10,
            gender: "MEN",
            type: "new-in",
        },
    ],
men_pants:[
     {
                url: "trouser.jpg",
            name: "Throuser",
            price: 8,
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
],
}
    //     

    //     {
    //         url: "set_clothe_women.jpg",
    //         name: "Set_Shirt",
    //         price: 15,
    //         gender: "WOMEN",
    //         type: "new-in"
    //     },
    //     {
    //         url: "product_for_women_hoodie_pink.jpg",
    //         name: "Shirt",
    //         price: 10,
    //         gender: "WOMEN",
    //         type: "new-in"
    //     },
    //     {
    //         url: "product_for_women_jean.jpg",
    //         name: "Jean",
    //         price: 18,
    //         gender: "WOMEN",
    //         type: "new-in"
    //     },
    //     {
    //         url: "product_for_women_skirt.jpg",
    //         name: "Skirt",
    //         price: 15,
    //         gender: "WOMEN",
    //         type: "new-in"
    //     },
    //     {
    //         url: "skirt.jpg",
    //         name: "Skirt",
    //         price: 15,
    //         gender: "WOMEN",
    //         type: "new-in"
    //     },
    //     {
    //         url: "yellow_dress.jpg",
    //         name: "Dress",
    //         price: 10,
    //         gender: "WOMEN",
    //         type: "new-in"
    //     },
    //     {
    //         url: "brown_dress.jpg",
    //         name: "Dress",
    //         price: 15,
    //         gender: "WOMEN",
    //         type: "new-in",
    //     },
    //     {
    //         url: "blue_dress.jpg",
    //         name: "Dress",
    //         price: 20,
    //         gender: "WOMEN",
    //         type: "new-in",
    //     },
    //     {
    //         url: "product_for_boy_set_T-shirt.jpg",
    //         name: "T-shirt",
    //         price: 10,
    //         gender: "BOY",
    //         type: "new-in",
    //     },
    //     {
    //         url: "product_for_boy_sport_T-shirt.jpg",
    //         name: "T-shirt",
    //         price: 10,
    //         gender: "BOY",
    //         type: "new-in",
    //     },
    //     {
    //         url: "product_for_boy_trousers.jpg",
    //         name: "Trouser",
    //         price: 10,
    //         gender: "BOY",
    //         type: "new-in",
    //     },
    //     {
    //         url: "product_for_boy_shocks.jpg",
    //         name: "Plaid Shirt",
    //         price: 10,
    //         gender: "BOY",
    //         type: "new-in",
    //     },
    //     {
    //         url: "product_for_boy_shoes.jpg",
    //         name: "Trouser",
    //         price: 10,
    //         gender: "BOY",
    //         type: "new-in",
    //     },
    //     {
    //         url: "product_for_girl_dress.jpg",
    //         name: "Dress",
    //         price: 15,
    //         gender: "GIRL",
    //         type: "new-in",
    //     },
    //     {
    //         url: "product_for_girl_trouser.jpg",
    //         name: "Trouser",
    //         price: 8,
    //         gender: "GIRL",
    //         type: "new-in",
    //     },
    //     {
    //         url: "product_for_girl_Orange_clothes.jpg",
    //         name: "Set-Dress Kid",
    //         price: 15,
    //         gender: "GIRL",
    //         type: "new-in",
    //     },
    //     {
    //         url: "set_clothe.jpg",
    //         name: "Set-Shirt",
    //         price: 15,
    //         gender: "GIRL",
    //         type: "new-in",
    //     },
    //     {
    //         url: "hoddies_girl.jpg",
    //         name: "Hoddie",
    //         price: 15,
    //         gender: "GIRL",
    //         type: "new-in",
    //     },
    //     {
    //         url: "pink_hoodie_girl.jpg",
    //         name: "Hoddie",
    //         price: 10,
    //         gender: "GIRL",
    //         type: "new-in",
    //     },
    //     {
    //         url: "product_SkinCare.jpg",
    //         name: "CLAM Skincare",
    //         price: 15,
    //         gender: "SKIN-CARE",
    //         type: "new-in",
    //     },
    //     {
    //         url: " skincare-set-dry.jpg",
    //         name: "Bella Aura Skincare",
    //         price: 20,
    //         gender: "SKIN-CARE",
    //         type: "new-in",
    //     },
    //     {
    //         url: "Skin_care.jpg",
    //         name: "Lightening Serum",
    //         price: 25,
    //         gender: "SKIN-CARE",
    //         type: "new-in",
    //     },
    //     {
    //         url: "Men_SkinCare.jpg",
    //         name: "Best Face Mask",
    //         price: 25,
    //         gender: "SKIN-CARE",
    //         type: "new-in",
    //     },
    // }
    const {select,setselect} = useContext(SelectContext)
    const { cart, setcart } = useContext(ProductContext)
    const addcart = (carts) => {
        setcart(cart.concat(carts));
        console.log(cart);
    }

    return (
        <div>
            <ParallaxImage title="men" />
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
                        {select === 'men_shirt' && products.men_shirt.filter(product => product.gender === "MEN").map((product,index) => {
                            return (
                                <div className={styles.img}><Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} /></div>
                            );
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}