import React, { useContext, useState } from "react";
import styles from './../../styles/update.module.css'
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ProductIDContext } from '../contexts/ProductIDContext'
import { UpdateShowContext } from '../contexts/UpdateShow'
import ReactLoading from 'react-loading';

export default function UpdateProduct() {
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [loading , setLoading] = React.useState(false);
    const [description, setdescription] = useState('');
    const [category, setcategory] = useState('');
    const [discount, setdiscount] = useState('');
    const [instock, setinstock] = useState('');
    const [img_url, setimg_url] = useState('');
    const [products, setProducts] = useState(name, price, description, category, discount, instock, img_url);
    const [ProductID, setProductID] = React.useContext(ProductIDContext)
    const [show, setShow] = React.useContext(UpdateShowContext)
<<<<<<< HEAD
    const handleUpdate = async () => {
        try {
            const res = await fetch(
                `http://localhost:8000/api/users/${ProductID}`,
                {
                    method: 'put',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(products)
                }
            )
            console.log(res)
        } catch (err) {
            console.log(err)
=======
    const handleUpdate = async() => {
        setLoading(true)
    try{
        const res = await fetch(
             `http://localhost:8000/api/products/${ProductID}`,
             {
                 method: 'put',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify({
                    "name":name,
                    "price":price,
                    "catefory":category,
                    "description":description,
                    "discount":discount,
                    "instock":instock,
                    "img_url":img_url,
                 })
             }      
             )
             console.log(res)
             setLoading(false)
     }catch(err){
         console.log(err)
         setLoading(false)
     }
 }

    React.useEffect(async()=>{
        let unmounted=false;
    await fetch(`http://localhost:8000/api/products?id=${ProductID}`)
    .then(res=>res.json())
    .then((res)=>{
        if (!unmounted) {
        setname(res.name);
        setprice(res.price);
        setcategory(res.category);
        setdescription(res.description);
        setdiscount(res.discount);
        setinstock(res.instock);
        setimg_url(res.img_url);
        console.log(res);
        console.log("hi",ProductID);
>>>>>>> ffd212f41976e234c8abf308b0a20e1fa2e9a222
        }
    }

    React.useEffect(async () => {
        let unmounted = false;
        await fetch(`http://localhost:8000/api/products?id=${ProductID}`)
            .then(res => res.json())
            .then((res) => {
                if (!unmounted) {
                    setProducts(res);
                    console.log(res);
                    console.log("hi", ProductID);
                }
            })
            .catch((err) => {
                console.log(err)
                return () => {
                    unmounted = false;
                };
            })
    }, [])
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            backdrop="static"
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
{loading&&<ReactLoading type="balls" color="blue" height={'20%'} width={'20%'}/>}
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">Are You Sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className={styles.form}>
                    <input type="text" value={name} name="name" onChange={(e) => setname(e.target.value)} placeholder="Name" />
                    <input type="text" value={price} name="price" onChange={(e) => setprice(e.target.value)} placeholder="Price" />
                    <input type="text" value={category} name="category" onChange={(e) => setcategory(e.target.value)} placeholder="Category" />
                    <input type="text" value={description} name="description" onChange={(e) => setdescription(e.target.value)} placeholder="Description" />
                    <input type="text" value={discount} name="discount" onChange={(e) => setdiscount(e.target.value)} placeholder="Discount" />
                    <input type="text" value={instock} name="instock" onChange={(e) => setinstock(e.target.value)} placeholder="Instock" />
                    <input type="text" value={img_url} name="img_url" onChange={(e) => setimg_url(e.target.value)} placeholder="ImageURL" />
                </form><br></br>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { setShow(false), setProducts('') }}>
                    Close
                </Button>
                <Button onClick={handleUpdate}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}
