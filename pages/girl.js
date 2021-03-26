import Image from './../component/presentations/imageCart'
import styles from '../styles/girl.module.css'
import ParallaxImage from '../component/presentations/parallax_image'


export default function Girl(){
    return(
        <div>
            <ParallaxImage title="girl" />
            <div className={styles.product}>
                <div className={styles.img}><Image src='product_for_women_dress.jpg' title='Dress' price='15$'/></div>
                <div className={styles.img}><Image src='product_for_women_dress.jpg' title='Dress' price='15$'/></div>
                <div className={styles.img}><Image src='product_for_women_dress.jpg' title='Dress' price='15$'/></div>
                <div className={styles.img}><Image src='product_for_women_dress.jpg' title='Dress' price='15$'/></div>
                <div className={styles.img}><Image src='product_for_women_dress.jpg' title='Dress' price='15$'/></div>
                <div className={styles.img}><Image src='product_for_women_dress.jpg' title='Dress' price='15$'/></div>
            </div>
        </div>
    )
}