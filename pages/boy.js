import Image from './../component/presentations/imageCart'
import ParallaxImage from '../component/presentations/parallax_image'
import Search from '../component/containers/search'
import Sidebar from '../component/containers/sidebar'
import styles from '../styles/style_page.module.css'
import { ToastProvider, useToasts } from 'react-toast-notifications';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { ViewContext } from './../component/contexts/ViewContext'

import Sort from '../component/containers/sort'
import { ProductContext } from './../component/contexts/ProductContext'
import { SelectContext } from './../component/contexts/SelectContext'
import { SearchContext } from './../component/contexts/SearchContext'
import React, { useState, useEffect, useContext } from 'react';
export async function getStaticProps() {
    const user = await fetch('http://localhost:8000/api/users')
    const product = await fetch('http://localhost:8000/api/products')
    const boy_shirts = await fetch('http://localhost:8000/api/products/boy_shirts')
    const boy_pants = await fetch('http://localhost:8000/api/products/boy_pants')
    const boyshirtsdata = await boy_shirts.json()
    const boypantsdata = await boy_pants.json()
    const userdata = await user.json()
    const productdata = await product.json()
    return {
      
      props: {userdata, productdata, boyshirtsdata, boypantsdata,},
    }
  }
export default function Boy({userdata, productdata, boyshirtsdata, boypantsdata,}) {
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
    // const match1 = boyshirtsdata.some(item => item.name.includes(search));
    // const match2 = boypantsdata.some(item => item.name.includes(search));
    return (
        <div>
            <ParallaxImage title="Boy" />
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
                        {issearch && sort === "d" && select === 'boy_shirts' && boyshirtsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "d" && select === 'boy_shirts' && boyshirtsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "lh" && select === 'boy_shirts' && boyshirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "hl" && select === 'boy_shirts' && boyshirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "lh" && select === 'boy_shirts' && boyshirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "hl" && select === 'boy_shirts' && boyshirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "d" && select === 'boy_pants' && boypantsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "d" && select === 'boy_pants' && boypantsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "lh" && select === 'boy_pants' && boypantsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "hl" && select === 'boy_pants' && boypantsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "lh" && select === 'boy_pants' && boypantsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "hl" && select === 'boy_pants' && boypantsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
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
            {/* {match1 && match2 ? (<div />) : (<img src='sorry.png' style={style} />)}
            {!match1 && !match2 ? (<div />) : (<div />)} */}
        </div>
    )
}