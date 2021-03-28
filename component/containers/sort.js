import styles from '../../styles/sort.module.css'
export default function Sort() {
    return (
        <div>
            <label>Sort By : </label>
            <select className={styles.sort} id="cars" name="cars">
                <option value="volvo">Default</option>
                <option value="saab">Price ( Low - High )</option>
                <option value="fiat">Price ( high - Low )</option>
                <option value="audi">Name ( A - Z )</option>
                <option value="audi">Name ( Z - A )</option>
            </select>
        </div>
    )
}