import styles from '../../styles/sort.module.css'
const Sort = ({onchange}) => {
    return (
        <div>
            <label className={styles.label}>Sort By : </label>
            <select onChange={onchange} className={styles.sort} id="cars" name="cars">
                <option value="d">Default</option>
                <option value="lh">Price ( Low - High )</option>
                <option value="hl">Price ( high - Low )</option>
            </select>
        </div>
    )
}
export default Sort;