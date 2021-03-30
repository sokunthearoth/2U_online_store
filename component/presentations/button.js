import styles from '../../styles/button.module.css'
import Link from 'next/link'
export default function Button(props){
    return(
        <div className={styles.Button}>
            <Link href={props.onclick}>
            <button>{props.label}</button>
            </Link>
        </div>
    )
}