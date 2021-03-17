import Link from '../presentations/link'
import styles from './../../styles/Nav.module.css'
export default function Nav() {
    return (
        <div>
        <div className={styles.L}>
                <Link href='/home' className={styles.link}>Home</Link>
                <Link href='/men' className={styles.link}>Men</Link>
                <Link href='/women' className={styles.link}>Women</Link>
                <Link href='/boy' className={styles.link}>Boy</Link>
                <Link href='/girl' className={styles.link}>Girl</Link>
                <Link href='/skincare' className={styles.link}>Skin Care</Link>
                <Link href='/contact' className={styles.link}>Contacts</Link>
                <Link href='/about' className={styles.link}>About</Link>
                <Link href='/' ><img align="middle" className={styles.icon} src="sign.png"></img></Link>
                <Link href='/cart'><img align="middle" className={styles.icon} src="cart.png"></img></Link>
                <img src='NTU.png' className={styles.nav}></img>
        </div>
        </div>
    )
}