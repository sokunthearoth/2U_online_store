import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import styles from '../styles/Register.module.css'
import { useRouter } from 'next/router'
import {FormContext} from '../component/context/formcontext'
import Link from '../component/presentations/link'

const Register = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const router = useRouter();
  const {form, setForm} = useContext(FormContext);
  const [message,setMessage]=React.useState(``)
  const onSubmit = (data) => {
    setForm(data);
    if(document.getElementById('password').value === document.getElementById('confirm_password').value) {
      router.push('/information')
    } else {
      setMessage(`Passwords don't match`);
      
    }
  }

  return (
    <div className={styles.container}>
      <img src="NTU.png" className={styles.logo} />
      <div className={styles.modalcontent}>
        <p className={styles.li} >Register</p>

        <form className={styles.form} action="/" method="GET" onSubmit = {handleSubmit(onSubmit)} >
          <input 
              name="name" 
              type="text" 
              placeholder="Full Name" 
              ref={register({required:true})}
          />
        {errors.name && <span className={styles.error}>This field is required</span>}
          <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            id="email" 
            ref={register({required:true})}
          />
        {errors.email && <span className={styles.error}>This field is required </span>}
          <input 
            name="password" 
            type="password" 
            placeholder="Password" 
            id="password" 
            ref={register({required:true, minLength: 8, maxLength: 15})}
          />
        {errors.password && <span className={styles.error}>Password must between 8 to 15 digits.</span>}
       
          <input 
            name="confirm" 
            type="password" 
            placeholder="Confirm Password" 
            id="confirm_password" 
            ref={register({required:true, minLength: 8, maxLength: 15})}
          />
         {errors.confirm && <span className={styles.error}>Password must between 8 to 15 digits.</span>}

          <div className={styles.box}>
            <input  id="cb" name="check" type="checkbox" className={styles.tick} ref={register({required:true})}/>
            <div className={styles.text}>
              I accept the Terms Of Use and Privacy Policy
            </div>
            {errors.check && <span className={styles.error}>This field is required</span>}
          </div>
          
          <input type="submit" value="REGISTER" className={styles.a} /> <br></br><br></br>

          <p className={styles.p}>Already have an account? <Link href='/login'><b className={styles.link}>Login</b></Link></p>

        </form>
      </div>
    </div>
  )
}
export default Register;