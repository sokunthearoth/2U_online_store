import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import styles from '../styles/information_seller.module.css'
import { useRouter } from 'next/router'
import {FormContext} from '../component/context/formcontext'
import Link from '../component/presentations/link'



const Seller = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const router = useRouter();
    const {form, setForm} = useContext(FormContext);
    const [message,setMessage]=React.useState(``)
    const onSubmit = (data) => {
      setForm(data);
      router.push('/seller_acc')
    }
    return (
        <div className={styles.container}>
            <img src="NTU.png" className={styles.logo} />
            <div className={styles.modalcontent}>
        <p className={styles.li} >Shop Information</p>

        <form className={styles.form} action="/" method="GET" onSubmit = {handleSubmit(onSubmit)} >
            <div className={styles.information}>
                <input 
                    name="nameShop" 
                    type="text" 
                    placeholder="Name of shop" 
                    ref={register({required:true})}
                />

                <input 
                    name="type of shop" 
                    type="text" 
                    placeholder="Type of shop" 
                    ref={register({required:true})}
                />

                <input 
                    name="phone number" 
                    type="text" 
                    placeholder="Phone Number" 
                    id="phone_number" 
                    ref={register({required:true})}
                />
            
                <input 
                    name="categories" 
                    type="text" 
                    placeholder="Categories" 
                    id="categories" 
                    ref={register({required:true})}
                />
            </div>
            <div className={styles.address}>

                <input
                    name="street_address"
                    type="text"
                    placeholder="Street Address"
                    id="street_address"
                    ref={register({required:true})}
                />

                <input
                    name="address"
                    type="text"
                    placeholder="City & Province"
                    id="address"
                    ref={register({required:true})}
                />

            </div>
          

          
          <input type="submit" value="SUBMIT" className={styles.a} /> <br></br><br></br>


        </form>
      </div>
        </div>
    )
}
export default Seller;