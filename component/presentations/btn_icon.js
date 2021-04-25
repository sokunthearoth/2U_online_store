import styles from '../../styles/btn_icon.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faHeart, faShoppingBasket} from "@fortawesome/free-solid-svg-icons"



export default function ButtonIcon(props){
    return(
        <div className={styles.btn}>
            <div className={styles.button}>
                <a href="cart"><FontAwesomeIcon icon={faShoppingBasket} className={styles.icon}></FontAwesomeIcon></a>
                <a href=""><FontAwesomeIcon icon={faHeart} className={styles.icon}></FontAwesomeIcon></a>
                <a href=""><FontAwesomeIcon icon={faEye} className={styles.icon}></FontAwesomeIcon></a>
            </div>
        </div>
    )
}