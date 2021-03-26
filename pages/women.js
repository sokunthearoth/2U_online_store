import Image from './../component/presentations/imageCart'
import styles from '../styles/women.module.css'
import ParallaxImage from '../component/presentations/parallax_image'

export default function Women(){
    return(
        <div>
            <ParallaxImage title="Women" />
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