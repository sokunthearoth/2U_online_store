import Image from './../component/presentations/imageCart'
import Sidebar from '../component/containers/sidebar'
import Search from '../component/containers/search'
import ParallaxImage from '../component/presentations/parallax_image'
import styles from '../styles/style_page.module.css'
import Sort from '../component/containers/sort'
import Button from 'react-bootstrap/Button'
import { ToastProvider, useToasts } from 'react-toast-notifications';
import Modal from 'react-bootstrap/Modal'
import { ProductContext } from '../component/contexts/ProductContext'
import { SelectContext } from './../component/contexts/SelectContext'
import { SearchContext } from './../component/contexts/SearchContext'
import { ViewContext } from './../component/contexts/ViewContext'
import React, { useState, useEffect, useContext } from 'react';
export async function getStaticProps() {
    const user = await fetch('http://localhost:8000/api/users')
    const product = await fetch('http://localhost:8000/api/products')
    const men_shirts = await fetch('http://localhost:8000/api/products/men_shirts')
    const men_pants = await fetch('http://localhost:8000/api/products/men_pants')
    const men_belts = await fetch('http://localhost:8000/api/products/men_belts')
    const men_watches = await fetch('http://localhost:8000/api/products/men_watches')
    const men_shoes = await fetch('http://localhost:8000/api/products/men_shoes')
    const menshirtsdata = await men_shirts.json()
    const menpantsdata = await men_pants.json()
    const menbeltsdata = await men_belts.json()
    const menwatchesdata = await men_watches.json()
    const menshoesdata = await men_shoes.json()
    const userdata = await user.json()
    const productdata = await product.json()
    return {

        props: { userdata, productdata, menshirtsdata, menpantsdata, menshoesdata, menbeltsdata, menwatchesdata },
    }
}
export default function Men({ userdata, productdata, menshirtsdata, menpantsdata, menshoesdata, menbeltsdata, menwatchesdata }) {
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
        console.log(cart.toString());
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
    const match1 = menshirtsdata.some(item => item.name.includes(search));
    const match2 = menpantsdata.some(item => item.name.includes(search));
    const match3 = menshoesdata.some(item => item.name.includes(search));
    const match4 = menwatchesdata.some(item => item.name.includes(search));
    const match5 = menbeltsdata.some(item => item.name.includes(search));
    return (
        <div>
            <ParallaxImage title="men" />
            <div className={styles.product_girl}>
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
                        {!issearch && sort === "d" && select === 'men_shirt' && menshirtsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "d" && select === 'men_shirt' && menshirtsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "lh" && select === 'men_shirt' && menshirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "hl" && select === 'men_shirt' && menshirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "lh" && select === 'men_shirt' && menshirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "hl" && select === 'men_shirt' && menshirtsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "d" && select === 'men_pants' && menpantsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "d" && select === 'men_pants' && menpantsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "lh" && select === 'men_pants' && menpantsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "hl" && select === 'men_pants' && menpantsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "lh" && select === 'men_pants' && menpantsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "hl" && select === 'men_pants' && menpantsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "d" && select === 'men_shoes' && menshoesdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "d" && select === 'men_shoes' && menshoesdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "lh" && select === 'men_shoes' && menshoesdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "hl" && select === 'men_shoes' && menshoesdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "lh" && select === 'men_shoes' && menshoesdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "hl" && select === 'men_shoes' && menshoesdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}

                        {issearch && sort === "d" && select === 'men_belts' && menbeltsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "d" && select === 'men_belts' && menbeltsdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "lh" && select === 'men_belts' && menbeltsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "hl" && select === 'men_belts' && menbeltsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "lh" && select === 'men_belts' && menbeltsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "hl" && select === 'men_belts' && menbeltsdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "d" && select === 'men_watches' && menwatchesdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "d" && select === 'men_watches' && menwatchesdata.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "lh" && select === 'men_watches' && menwatchesdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "hl" && select === 'men_watches' && menwatchesdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "lh" && select === 'men_watches' && menwatchesdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} onclickview={() => { addview(product), setShow(true) }} src={product.img_url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "hl" && select === 'men_watches' && menwatchesdata.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
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
        </div>
    )
}