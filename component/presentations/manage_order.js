import React, { useContext } from "react";
import styles from '../../styles/seller_acc.module.css'




const Order_Page = () => {
    const [time,setTime]= React.useState('')
    const [namedata,setNamedata]= React.useState('')
    const [emaildata, setEmaildata]= React.useState('')
    const [genderdata, setGenderdata]= React.useState('')
    const [phone_number,setPhone_number]= React.useState('')
    const [orderdata,setOrderdata]=React.useState([])
    React.useEffect(async()=>{
        let unmounted=false;
    await fetch('http://localhost:8000/api/orders')
    .then(res=>res.json())
    .then((res)=>{
        if (!unmounted) {
        setEmaildata(res.email)
        // setGenderdata(res.gender)
        // setPhone_number(res.phone_number)
        setNamedata(res.name)
        setOrderdata(res.products);
        // setTime(res.ordertime)
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
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Product</th>
                        <th scope="col">Time</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>{namedata}</td>
                        {/* <td>{genderdata}</td>  */}
                        <td>{emaildata}</td>
                        {/* <td>{phone_number}</td>
                        <td>{time}</td> */}
                        {/* <td>{orderdata.map((order,index)=>{
                            return(
                                <table>
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <tr scope="row"></tr>
                                    <td>{order.name}</td>
                                    <td>{order.price}</td>
                                    <td>{order.description}</td>
                                </tr>
                            </tbody>
                            </table>
                            )
                        })}</td> */}
                        
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Order_Page;