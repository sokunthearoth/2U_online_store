import styles from '../../styles/search.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"


export default function Search() {
  return (
    <div className={styles.container}>
      <form className={styles.btn_search}>
        <input className={styles.input} type="text" placeholder="Search"></input>
        <button type="submit" className={styles.button}><FontAwesomeIcon icon={faSearch} className={styles.icon}></FontAwesomeIcon></button>
      </form>
    </div>
  );
}
