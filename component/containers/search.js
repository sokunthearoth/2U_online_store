import styles from '../../styles/search.module.css'
export default function Search(){
    return (
      <div className={styles.container}>
      <form>
        <input className={styles.input} type="text" placeholder="Search"/>
        <button type="submit" className={styles.button}><img className={styles.img} src="search.png"/></button>
      </form>
      </div>
    );
  }
