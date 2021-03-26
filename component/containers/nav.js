import Link from '../presentations/link'
import styles from './../../styles/Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faShoppingBasket, faUser} from "@fortawesome/free-solid-svg-icons"


export default function Nav() {
    return (
        <div className={styles.header}>
            <img src='NTU.png' className={styles.nav}></img>
            <div className={styles.L}>
                    <Link href='/home' className={styles.link}>Home</Link>
                    <Link href='/men' className={styles.link}>Men</Link>
                    <Link href='/women' className={styles.link}>Women</Link>
                    <Link href='/boy' className={styles.link}>Boy</Link>
                    <Link href='/girl' className={styles.link}>Girl</Link>
                    <Link href='/skincare' className={styles.link}>Skin Care</Link>
                    <Link href='/about' className={styles.link}>About</Link>
                    <Link href='/contact' className={styles.link}>Contacts</Link>
                    <Link href='/' ><FontAwesomeIcon icon={faUser} className={styles.User}></FontAwesomeIcon></Link>
                    <Link href='/cart'><FontAwesomeIcon icon={faShoppingBasket} className={styles.icon}></FontAwesomeIcon></Link>

            </div>
        </div>
    )
}