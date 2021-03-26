import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  // const => document.getElementById("form");
  // form.addEventListener("submit",(e)=>{
  //     e.preventDefault();
  //     localStorage.setItem("email",document.getElementById("email").value);
  //     localStorage.setItem("password",document.getElementById("password").value);
  //     location.href="login.js"
  // })
  
  return (
    <div className={styles.container}>
          <img src="NTU.png" className={styles.logo} />
          <form className={styles.form}>
            <div className={styles.info}>
              <h2>Register</h2>
              <input type="name" placeholder="First Name"/>
              <input type="name" placeholder="Last Name"/>
            </div>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"><p>I accept the Term of Use & Privacy Policy .</p></label>
            <button type="submit">Submit</button>
          </form>

    </div>
  )
}
