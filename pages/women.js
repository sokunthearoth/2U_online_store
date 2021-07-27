import Image from './../component/presentations/imageCart'
import styles from '../styles/style_page.module.css'
import ParallaxImage from '../component/presentations/parallax_image'
import Search from '../component/containers/search'
import Sidebar from '../component/containers/sidebar'
import Sort from '../component/containers/sort'
import { ProductContext } from './../component/contexts/ProductContext'
import { SelectContext } from './../component/contexts/SelectContext'
import { ToastProvider, useToasts } from 'react-toast-notifications';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { ViewContext } from './../component/contexts/ViewContext'

import { SearchContext } from './../component/contexts/SearchContext'
import React, { useState, useEffect, useContext } from 'react';
export async function getStaticProps() {
    const user = await fetch('http://localhost:8000/api/users')
    const product = await fetch('http://localhost:8000/api/products')
    const women_shirts = await fetch('http://localhost:8000/api/products/women_shirts')
    const women_skirts = await fetch('http://localhost:8000/api/products/women_skirts')
    const women_dresses = await fetch('http://localhost:8000/api/products/women_dresses')
    const women_cosmetics = await fetch('http://localhost:8000/api/products/women_cosmetics')
    const womenshirtsdata = await women_shirts.json()
    const womenskirtsdata = await women_skirts.json()
    const womendressesdata = await women_dresses.json()
    const womencosmeticsdata = await women_cosmetics.json()
    const userdata = await user.json()
    const productdata = await product.json()
    return {
      
      props: {userdata, productdata, womenshirtsdata, womendressesdata, womencosmeticsdata,womenskirtsdata},
    }
  }


export default function Women({userdata, productdata, womenshirtsdata, womendressesdata, womencosmeticsdata,womenskirtsdata}) {
    const [sort, issort] = React.useState("d")
    const { addToast } = useToasts();
    const { select, setselect } = useContext(SelectContext);
    const { view, setView } = useContext(ViewContext);
    const { cart, setcart } = useContext(ProductContext);
    const { search, setsearch } = useContext(SearchContext);
    const [issearch, setissearch] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setView([]);
    }
    const addcart = (carts) => {
        setcart(cart.concat(carts));
        console.log(cart);
        addToast("Your order has been added to cart!", {
            appearance: 'success',
            autoDismiss: true,
          })
    }
    const addview = (views) => {
        setView(view.concat(views));
        console.log(view)
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
    const style = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
    // const match1 = womenshirtssdata.some(item => item.name.includes(search));
    // const match2 = womendressesdata.some(item => item.name.includes(search));
    // const match3 = womenskirtsdata.some(item => item.name.includes(search));
    // const match4 = womencosmeticsdata.some(item => item.name.includes(search));
    return (
        <div>
            <ParallaxImage title="women" />
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
                    {view.map((views, index) => {
                        return (
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">{views.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <img src={views.img_url} style={{width:'100%'}}></img>
                                    <p>Price: {views.price}$</p>
                                    <p>Description: {views.description}</p>
                                    <p>Instock: {views.instock}</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={() => addcart(views)}>Add to Cart!</Button>
                                </Modal.Footer>
                            </Modal>
                        );
                    })
                    }
                    <hr className={styles.hr}></hr>
                    <div className={styles.product}>

                        {issearch && sort === "d" && select === 'women_shirts' && womenshirtsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "d" && select === 'women_shirts' && womenshirtsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "lh" && select === 'women_shirts' && womenshirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "hl" && select === 'women_shirts' && womenshirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "lh" && select === 'women_shirts' && womenshirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "hl" && select === 'women_shirts' && womenshirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "d" && select === 'women_skirts' && womenskirtsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "d" && select === 'women_skirts' && womenskirtsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "lh" && select === 'women_skirts' && womenskirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "hl" && select === 'women_skirts' && womenskirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "lh" && select === 'women_skirts' && womenskirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "hl" && select === 'women_skirts' && womenskirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "d" && select === 'women_dresses' && womendressesdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "d" && select === 'women_dresses' && womendressesdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "lh" && select === 'women_dresses' && womendressesdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "hl" && select === 'women_dresses' && womendressesdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "lh" && select === 'women_dresses' && womendressesdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "hl" && select === 'women_dresses' && womendressesdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "d" && select === 'women_cosmetics' && womencosmeticsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "d" && select === 'women_cosmetics' && womencosmeticsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "lh" && select === 'women_cosmetics' && womencosmeticsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "hl" && select === 'women_cosmetics' && womencosmeticsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "lh" && select === 'women_cosmetics' && womencosmeticsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "hl" && select === 'women_cosmetics' && womencosmeticsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                    </div>
                </div>
            </div>
            {/* {match1 && match2 && match3 && match4 ? (<div />) : (<img src='sorry.png' style={style} />)}
            {!match1 && !match2 && !match3 && !match4 ? (<div />) : (<div />)} */}
        </div>
    )
}