import styles from './../styles/Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEnvelope, faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons"
import ParallaxImage from '../component/presentations/parallax_image'

export default function Contact(){
    return(
        <div className={styles.contact}>
            <ParallaxImage title="contact us" />
            <div className={styles.content}>
                <div className={styles.info}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} title='Location'></FontAwesomeIcon>
                    <p>No. 28,street 368, Sangkat Boeng Keng Kang.</p><br/>
                    <FontAwesomeIcon icon={faPhone} className={styles.icon}></FontAwesomeIcon>
                    <p>+855 16794681</p><br/>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon}></FontAwesomeIcon>
                    <p>sokunthearoth.suon@gamil.com</p>
                </div>
                <form className={styles.form}>
                    <input type="name" placeholder="Full Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="number" placeholder="Phone Number"/>
                    <input type="text" placeholder="Message"/>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}