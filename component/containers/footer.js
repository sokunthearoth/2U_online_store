import styles from '../../styles/foot.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp} from "@fortawesome/free-solid-svg-icons"

export default function Footer(props){
    return(
        <div>
            <a href="#" className="link">
                <FontAwesomeIcon icon={faAngleUp} className={styles.icon}></FontAwesomeIcon>
                <p className={styles.text}>Go Back To Top</p>
            </a>
        </div>
    )
}