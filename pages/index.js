import React, {useContext, useState} from "react";
import { useForm } from "react-hook-form";
import styles from '../styles/Register.module.css'
import { useRouter } from 'next/router'
import {UserContext} from '../component/contexts/UserContext'
import {FormContext} from '../component/context/formcontext'
import Link from '../component/presentations/link'
import { fireStorage } from '../services/firebase'
import ReactLoading from 'react-loading';

const Register = () => {
  const [loading , setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }} = useForm();
  const router = useRouter();
  const {form, setForm} = useContext(FormContext);
  const {user, setUser} = useContext(UserContext);
  const [message,setMessage]=React.useState(``)
  const onSubmit = (data) => {
    setForm(data);
    if(document.getElementById('password').value === document.getElementById('confirm_password').value) {
      router.push('/information')
    } else {
      setMessage(`Passwords don't match`);
      
    }
  }
  const handlePost = (e) => {
    e.preventDefault();
    setLoading(true)
const file = document.getElementById("profile").files[0]
console.log(file)
const storageRef = fireStorage.ref('user-profile/');
const fileRef = storageRef.child(file.name);
fileRef.put(file)
    .then((res) => {
        fileRef.getDownloadURL()
            .then((res) => {
                fetch('http://localhost:8000/api/users/', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "name":document.getElementById('name').value,
                        "email":document.getElementById('email').value,
                        "phone_number":document.getElementById('phone_number').value,
                        "password":document.getElementById('password').value,
                        "gender":document.getElementById('gender').value,
                        "img_url": res
                    })
                })
                    .then(response => response.json())
                    .then(data => {
                      console.log("hello",data)
                      setUser(data)
                      console.log(user.img_url)
                      setForm(data);
                      setLoading(false);
                      if(document.getElementById('password').value === document.getElementById('confirm_password').value) {
                        router.push('/login')
                      } else {
                        setMessage(`Passwords don't match`);
                      }
                    })
                    .catch((err) => {
                        console.error(err)
                    })
            }).catch((err) => {
                console.log(err)
            })
    })
}
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
      {loading&&<ReactLoading type="bars" color="blue" height={'20%'} width={'20%'} />}</div>
      <img src="NTU.png" className={styles.logo} />
      <div className={styles.modalcontent}>
        <p className={styles.li} >Register</p>

        <form className={styles.form} action="/" method="GET" onSubmit = {handlePost} >
          <input 
              name="name" 
              type="text"
              id='name' 
              placeholder="Full Name" 
              ref={register({required:true})}
          />
        {errors.name && <span className={styles.error}>This field is required</span>}
          <input 
            name="email" 
            type="email" 
            id='email' 
            placeholder="Email" 
            id="email" 
            ref={register({required:true})}
          />
          {errors.name && <span className={styles.error}>This field is required</span>}
          <input 
            name="phone_number" 
            type="text" 
            id='phone_number' 
            placeholder="Phone Number" 
            id="phone_number" 
            ref={register({required:true})}
          />
            <label >Gender:</label>

<select id="gender">
  <option value="Men">Men</option>
  <option value="Women">Women</option>
</select>
        {errors.email && <span className={styles.error}>This field is required </span>}
          <input 
            name="password" 
            type="password" 
            id='password'
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
         <label>Profile Picture:</label>
         <input 
            type="file"
            accept="image/*"
            id='profile'
            style={{marginLeft:'20px',textAlign:'center'}}
          />
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