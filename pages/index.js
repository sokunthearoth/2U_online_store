import styles from '../styles/Register.module.css'

export default function Regiser() {
  return (
    <div className={styles.container}>
          <img src="image/logo.png" className={styles.logo} />
          <div className={styles.modalcontent}>
        <p className={styles.li} >Register</p>
        <form id="form" action="/" method="GET" >
        <input className={styles.fn} type="email" placeholder="First Name" id="email"/>
        <input className={styles.ln} type="email" placeholder="Last Name" id="email"/><br></br>
            <input className={styles.email} type="email" placeholder="Email" id="email"/><br></br>
            <p className={styles.error}></p>
            <input type="password" placeholder="Password" className={styles.password} id="password" /><br></br>
            <p className={styles.error}></p>
            <input type="password" placeholder="Confirm Password" className={styles.password} id="Confirm Password" /><br></br>
            <p className={styles.error}></p>
            <input id="cb" type="checkbox" className={styles.tick}/>
<div className={styles.text}>
I accept the Terms Of Use and Privacy Policy
</div><br></br>
            <a href="./HTML/login.html" ><button className={styles.a} type="submit" id="submit" onsubmit="summit()">Register</button></a>
        </form>
    </div>
    </div>
  )
}
