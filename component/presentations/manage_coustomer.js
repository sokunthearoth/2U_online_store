import React, { useContext } from "react";
import styles from '../../styles/seller_acc.module.css'

const Customer_Page = () => {
    const [userdata,setUserdata]=React.useState([])
    React.useEffect(async()=>{
        let unmounted=false;
    await fetch('http://localhost:8000/api/users')
    .then(res=>res.json())
    .then((res)=>{
        if (!unmounted) {
        setUserdata(res);
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
            <table class="table" id="table ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Location</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {userdata.map((user,index) => {
                    return(  
                    <tr>
                        <th scope="row">{user._id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone_number}</td>
                        <td>{user.gender}</td>
                    </tr>
                 )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Customer_Page;