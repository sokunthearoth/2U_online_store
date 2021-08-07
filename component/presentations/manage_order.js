import React, { useContext } from "react";
import styles from '../../styles/seller_acc.module.css'




const Order_Page = () => {
    const [orderdata,setOrderdata]=React.useState([])
    React.useEffect(async()=>{
        let unmounted=false;
    await fetch('http://localhost:8000/api/orders')
    .then(res=>res.json())
    .then((res)=>{
        if (!unmounted) {
        setorderdata(res);
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
            <table class="table" id="table 2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Price</th>
                        <th scope="col">Time</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {orderdata.map((order,index) => {
                    return(  
                    <tr>
                        <th scope="row">{order._id}</th>
                        <td><img src={order.img_url} className={styles.Image}></img></td>
                        <td>{order.username}</td>
                        <td>{order.email}</td>
                        <td>{order.phone_number}</td>
                        <td>{order.discount}</td>
                        <td>{order.price}$</td>
                        <td>{order.timecreated}</td>
                        
                    </tr>
                 )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Order_Page;