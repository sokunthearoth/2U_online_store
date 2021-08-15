import React, { useContext, useState} from "react";
import styles from '../../styles/seller_acc.module.css'
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ProductIDContext } from '../contexts/ProductIDContext'
import { UpdateShowContext } from '../contexts/UpdateShow'
import { DeleteShowContext } from '../contexts/DeleteShowContext'
import { DeleteProductIDContext } from '../contexts/DeleteProductIDContext'
import UpdateProduct from './UpdateProduct'
const Product_Page = () => {
    const [ProductID,setProductID]=React.useContext(ProductIDContext)
    const [show, setShow] = React.useContext(UpdateShowContext)     
    const [deleteshow,setdeleteshow]=React.useContext(DeleteShowContext)
    const [DeleteProductID,setDeleteProductID]=React.useContext(DeleteProductIDContext)
    const [productdata,setProductdata]=React.useState([])
    if (DeleteProductID.length>0){
        setdeleteshow(true)
        console.log(DeleteProductID)
    }
    const handleDeleteProduct = async (id) => {
        try {
          const res = await fetch(
            `http://localhost:8000/api/products/${id}`,
            {
              method: 'DELETE',
            }
          )
          console.log("user Deleted")

        } catch (err) {
          console.log(err)
        }
      }
    React.useEffect(async()=>{
    let unmounted=false;
    await fetch('http://localhost:8000/api/products')
    .then(res=>res.json())
    .then((res)=>{
        if (!unmounted) {
        setProductdata(res);
        console.log(res)
        }
    })
    .catch((err)=>{
        console.log(err)
        return () => {
            unmounted = false;
        };
    })
},[])
    return (
        <div className={styles.items}>
            <table class="table" id="table 1">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Price</th>
                        <th scope="col">Instock</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                 <tbody>
                {productdata.map((product,index) => {
                    return(  
                    <tr>
                        <th scope="row"></th>
                        <td><img src={product.img_url} className={styles.Image} width='50px'></img></td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.description}</td>
                        <td>{product.discount}</td>
                        <td>{product.price}$</td>
                        <td>{product.instock}</td>
                        <td>{product.timecreated}</td>
                        <td>  <ButtonGroup className="mb-2"><Button onClick={() => {setProductID(product._id),setShow(true)}} variant="outline-info"/*onClick={handleUpdate(product._id)}*/ >Update</Button><Button variant="outline-danger"   onClick={()=>setDeleteProductID(product._id)}>Delete</Button>  </ButtonGroup></td>
                    </tr>
                 )
                    })
                    }
  </tbody>
            </table>
            <Modal
                                                   show={deleteshow}
                                                   onHide={() => setdeleteshow(false)}
                                                   backdrop="static"
                                                   keyboard={false}
                                                   aria-labelledby="contained-modal-title-vcenter"
                                                   centered
                                               >
                                                   <Modal.Header >
                                                       <Modal.Title id="contained-modal-title-vcenter">Are You Sure?</Modal.Title>
                                                   </Modal.Header>
                                                   <Modal.Footer>
                                                       <Button variant="primary" onClick={()=>{handleDeleteProduct(DeleteProductID)}} >Yes</Button>
                                                       <Button variant="primary" onClick={()=>{setDeleteProductID (''),setdeleteshow(false)}}>No</Button>
                                                   </Modal.Footer>
                                               </Modal>
                                               {show === false ? (<div></div>) : (<UpdateProduct></UpdateProduct>) }
        </div>
    )
}
export default Product_Page;