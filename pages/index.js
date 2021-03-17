import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  
  return (
    <div className={styles.container}>
          <img src="image/logo.png" className={styles.logo} />
          <form className={styles.form}>
            <div className={styles.info}>
              <input type="name" placeholder="First Name"/>
              <input type="name" placeholder="Last Name"/>
            </div>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> I accept the Term of Use & Privacy Policy .</label>
            <button type="submit">Submit</button>
          </form>

    </div>
  )
}
