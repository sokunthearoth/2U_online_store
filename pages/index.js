import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import styles from '../styles/Register.module.css'
import { useRouter } from 'next/router'
import {FormContext} from '../component/context/formcontext'

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter();
  const {form, setForm} = useContext(FormContext)

  const onSubmit = (data) => {
    setForm(data);
    console.log(data)
    if(document.getElementById('password').value === document.getElementById('confirm_password').value) {
      router.push('/login')
    } else {
      alert("Passwords don't match");
    }
  }

  return (
    <div className={styles.container}>
      <img src="NTU.png" className={styles.logo} />
      <div className={styles.modalcontent}>
        <p className={styles.li} >Register</p>

        <form className={styles.form} action="/" method="GET" onSubmit = {handleSubmit(onSubmit)} >

          <div className={styles.info}>
            <input 
              name="firstname" 
              type="text" placeholder="First Name" 
              ref={register({required:true})}
            />

            <input 
              name="lastname" 
              type="text" 
              placeholder="Last Name" 
              ref={register} 
            />
          </div>

          <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            id="email" 
            ref={register({required:true})}
          />

          <input 
            name="password" 
            type="password" 
            placeholder="Password" 
            id="password" 
            ref={register({required:true, minLength: 8, maxLength: 15})}
          />
          <p className={styles.error}></p>

          <input 
            name="confirm" 
            type="password" placeholder="Confirm Password" 
            id="confirm_password" 
            ref={register({required:true, minLength: 8, maxLength: 15})}
          />
          <p className={styles.error}></p>

          <div className={styles.box}>
            <input  id="cb" type="checkbox" className={styles.tick} ref={register({required:true})}/>
            <div className={styles.text}>
              I accept the Terms Of Use and Privacy Policy
            </div>
          </div>
          
          <input type="submit" value="submit" className={styles.a} />
        </form>
      </div>
    </div>
  )
}
export default Register;