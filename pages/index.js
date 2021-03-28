import styles from '../styles/Register.module.css'

export default function Regiser() {
  return (
    <div className={styles.container}>
      <img src="image/logo.png" className={styles.logo} />
      <div className={styles.modalcontent}>
        <p className={styles.li} >Register</p>
        <form className={styles.form} action="/" method="GET" >
          <div className={styles.info}>
            <input className={styles.fn} type="text" placeholder="First Name" />
            <input className={styles.ln} type="text" placeholder="Last Name"  />
          </div>
          <input className={styles.email} type="email" placeholder="Email" id="email" />
          <p className={styles.error}></p>
          <input type="password" placeholder="Password" className={styles.password} id="password" />
          <p className={styles.error}></p>
          <input type="password" placeholder="Confirm Password" className={styles.password} id="Confirm Password" />
          <p className={styles.error}></p>
          <div className={styles.box}>
            <input id="cb" type="checkbox" className={styles.tick} />
            <div className={styles.text}>
              I accept the Terms Of Use and Privacy Policy
            </div>
          </div>
          <a href="/login" ><button className={styles.a} type="submit" id="submit" onsubmit="summit()">Register</button></a>
        </form>
      </div>
    </div>
  )
}
