import Link from '../presentations/link'
import styles from './../../styles/Nav.module.css'
export default function Nav(){
    return(
        <div className={styles.L}>
            <div>
        <Link href='/' name='Home'/>
        <Link href='/contact' name='Contact'/>
        <Link href='/about' name='About'/>
        <Link href='/men' name='Men'/>
        <Link href='/women' name='Women'/>
        <Link href='/boy' name='Boy'/>
        <Link href='/girl' name='Girl'/>
        <Link href='/skincare' name='Skin Care'/>
        <Link href='/signout' name='hi'><img src="sign.png"></img></Link>
        <Link href='/cart' name='Cart'/>
        <img src='NTU.png' className={styles.nav}></img>
        </div>
        
        </div>
    )
}