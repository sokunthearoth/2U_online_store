import styles from '../../styles/images.module.css'
// import ButtonIcon from './btn_icon'

const Images = ({src, title, price,}) => {
    return(
        <div className={styles.Image}>
            <div className={styles.img}>
                <img src={src} />
            </div>
            <p className={styles.p_tile}>{title}</p>
            <p className={styles.p_price}>{price}$</p>
        </div>
    )
}
export default Images;