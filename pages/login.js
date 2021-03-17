import styles from './../styles/Register.module.css'

export default function Login(){
    return(
        <div >
            <img src="image/logo.png" className={styles.logo} />
            <form className={styles.form}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}