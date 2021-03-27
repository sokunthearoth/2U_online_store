import styles from '../../styles/sort.module.css'
export default function Sort(){
    return(
        <div>
            <label>Sort By: </label>
            <select className={styles.sort} id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
        </div>
    )
}