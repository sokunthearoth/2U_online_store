import Image from './../component/presentations/imageCart'
import Search from '../component/containers/search'
import Sidebar from '../component/containers/sidebar'
import ParallaxImage from '../component/presentations/parallax_image'
import styles from '../styles/style_page.module.css'
import Sort from '../component/containers/sort'
import { ProductContext } from './../component/contexts/ProductContext'
import { SelectContext } from './../component/contexts/SelectContext'
import { SearchContext } from './../component/contexts/SearchContext'
import React, { useState, useEffect, useContext } from 'react';
export async function getStaticProps() {
    const user = await fetch('http://localhost:8000/api/users')
    const product = await fetch('http://localhost:8000/api/products')
    const skincare = await fetch('http://localhost:8000/api/products/skincare')
    const skincaredata = await skincare.json()
    const userdata = await user.json()
    const productdata = await product.json()
    return {
      
      props: {userdata, productdata, skincaredata}
  }
}
export default function Skincare({userdata, productdata, skincaredata}) {
    const [sort, issort] = React.useState("d")
    const { select, setselect } = useContext(SelectContext);
    const { cart, setcart } = useContext(ProductContext);
    const { search, setsearch } = useContext(SearchContext);
    const [issearch, setissearch] = useState(false);
    const addcart = (carts) => {
        setcart(cart.concat(carts));
        console.log(cart);
    }
    const style = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
    const handlesearch = (e) => {
        setsearch(e.target.value);
        setissearch(true);
        console.log(search);
        console.log(issearch);
    }
    const handlesort = (e) => {
        issort(e.target.value);
        setissearch(false);
        console.log(typeof (sort));
    }
    // const match4 = skincaredata.some(item => item.name.includes(search));
    return (
        <div>
            <ParallaxImage title="skin care" />
            <div className={styles.product_girl}>
                {/* <hr className={styles.hr}></hr> */}
                <div className={styles.sidebar}>
                    <Sidebar></Sidebar>
                </div>
                <div className={styles.Girl}>
                    <div className={styles.Group}>
                        <Search onchange={handlesearch}></Search>
                        <Sort onchange={handlesort}></Sort>
                    </div>
                    <hr className={styles.hr}></hr>
                    <div className={styles.product}>
                        {issearch && sort === "d" && select === 'skin_cares' && skincaredata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "d" && select === 'skin_cares' && skincaredata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "lh" && select === 'skin_cares' && skincaredata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}

                        {!issearch && sort === "hl" && select === 'skin_cares' && skincaredata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "lh" && select === 'skin_cares' && skincaredata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}

                        {issearch && sort === "hl" && select === 'skin_cares' && skincaredata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                    </div>
                </div>
            </div>
            {/* {match4 ? (<div />) : (<img src='sorry.png' style={style} />)}
            {!match4 ? (<div />) : (<div />)} */}
        </div>
    );
                    }
