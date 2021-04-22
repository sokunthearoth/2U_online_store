import styles from './../styles/login.module.css'
import React, {useContext} from "react";
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import {FormContext} from '../component/context/formcontext'
import Link from '../component/presentations/link'


const Login = () => {
    const { register, handleSubmit,formState: { errors }} = useForm();
    const {form, setForm} = useContext(FormContext)
    const router = useRouter();
    const onSubmit = (data) => {
        console.log(data)
        console.log(form)
        if (form.email === data.email && form.password === data.password){
            router.push('/home')
        }

    }
    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <img src="NTU.png" className={styles.logo} />
                <div className={styles.modalcontent}>
                    <p className={styles.li} >Login</p>
                    <form className={styles.form} action="/" method="GET" onSubmit = {handleSubmit(onSubmit)} >
                        <input name="email" type="email" placeholder="Email" id="email" ref={register({required:true})}/><br></br>
                        {errors.email && <span className={styles.error}>This field is required</span>}
                        <input type="password" placeholder="Password" name="password" id="password" ref={register({required:true})}/><br></br>
                        {errors.password && <span className={styles.error}>This field is required</span>}<br></br>
                        <Link href="/">Forget Password ?</Link>
                        <input type="submit" value="LOGIN" className={styles.a} />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;