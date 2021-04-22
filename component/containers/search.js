import styles from '../../styles/search.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Search = ({onchange}) => {
  return (
    <div className={styles.container}>
      <form onChange={onchange} className={styles.btn_search}>
        <input className={styles.input} type="text" placeholder="Search"></input>
      </form>
    </div>
  );
}
export default Search;
