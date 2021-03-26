import styles from '../../styles/button.module.css'

export default function Button(props){
    return(
        <div className={styles.Button}>
            <button onClick={props.onclick} >{props.label}</button>
        </div>
    )
}