import styles from '../../styles/image.module.css'
// import ButtonIcon from './btn_icon'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faHeart, faShoppingBasket} from "@fortawesome/free-solid-svg-icons"

const Image = ({src, title, price}) => {
    return(
        <div className={styles.Image}>
            <div className={styles.img}>
                <img src={src} />
                <div className={styles.button}>
                    <a href="cart"><FontAwesomeIcon icon={faShoppingBasket} className={styles.icon}></FontAwesomeIcon></a>
                    <a href=""><FontAwesomeIcon icon={faHeart} className={styles.icon}></FontAwesomeIcon></a>
                    <a href="cart"><FontAwesomeIcon icon={faEye} className={styles.icon}></FontAwesomeIcon></a>
                </div>
            </div>
            <p className={styles.p_tile}>{title}</p>
            <p className={styles.p_price}>{price}</p>
        </div>
    )
}
export default Image;
