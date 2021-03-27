import styles from './../styles/login.module.css'
export default function Login(){
    return(
        <div className={styles.login}>
               <div className={styles.container}>
          <img src="image/logo.png" className={styles.logo} />
          <div className={styles.modalcontent}>
        <p className={styles.li} >Login</p>
        <form id="form" action="/" method="GET" >
            <input className={styles.email} type="email" placeholder="Email" id="email"/><br></br>
            <p className={styles.error}></p>
            <input type="password" placeholder="Password" className={styles.password} id="password" /><br></br>
            <p className={styles.error}></p>
        
            <a href="./HTML/login.html" ><button className={styles.a} type="submit" id="submit" onsubmit="summit()">Login</button></a>
        </form>
    </div>
    </div>
    </div>
    )
}