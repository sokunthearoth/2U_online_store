import styles from './../styles/contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEnvelope, faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons"
import ParallaxImage from '../component/presentations/parallax_image'
import emailjs from 'emailjs-com';
import {ToastProvider, useToasts} from 'react-toast-notifications';
export default function Contact(){
    const {addToast} = useToasts();
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_i15gk6t', 'template_hmy8uac', e.target, 'user_aeXV8av4lI7fXbbFENOw0')
        .then(
            (result) => {
              console.log(result.text);
              addToast("You message has successfully sent!", {
                appearance: 'success',
                autoDismiss: true,
              })
              
            },
            (error) => {
              console.log(error.text);
              addToast("Your message was not able to be sent!", {
                appearance: 'error',
                autoDismiss: true,
              })
            }
          );
        e.target.reset();
      }
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
                <form className="contact-form" onSubmit={sendEmail} className={styles.form}>
                    <input type="name" name="name" placeholder="Full Name"/>
                    <input type="email" name="email" placeholder="Email Address"/>
                    <input type="name" name="Phone_Number" placeholder="Phone Number"/>
                    <input type="text" name="question" placeholder="Message"/>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
    }