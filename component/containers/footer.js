import styles from '../../styles/foot.module.css'
export default function Footer(props){
    return(
        <div>
            <a href="{props.bookmark}">
                <img src="/uparrow.png" className={styles.ar}></img>
                <p className={styles.text}>Go Back To Top</p>
            </a>
        </div>
    )
}