import styles from '../../styles/parallax.module.css'

export default function ParallaxImage(props){
    return(
            <div className={styles.parallax}>
                <h1>{props.title}</h1>
            </div>
    )
}