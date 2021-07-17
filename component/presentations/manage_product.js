import React, { useContext } from "react";
import styles from '../../styles/seller_acc.module.css'


const Product_Page = () => {
    const [productdata,setProductdata]=React.useState([])
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
                        <th scope="row">{product._id}</th>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.description}</td>
                        <td>{product.discount}</td>
                        <td>{product.price}$</td>
                        <td>{product.instock}</td>
                        <td>{product.timecreated}</td>
                    </tr>
                 )
                    })
                    }
  </tbody>
            </table>
        </div>
    )
}
export default Product_Page;