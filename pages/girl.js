import Image from './../component/presentations/imageCart'
import styles from '../styles/style_page.module.css'
import ParallaxImage from '../component/presentations/parallax_image'
import Search from '../component/containers/search'
import Sidebar from '../component/containers/sidebar'
import Sort from '../component/containers/sort'


export default function Girl(){
    return(
        <div>
            <ParallaxImage title="girl" />
            <div className={styles.product_girl}>
                {/* <hr className={styles.hr}></hr> */}
                <Sidebar></Sidebar>
                <div className={styles.Girl}>
                    <div className={styles.Group}>
                        <Search></Search>
                        <Sort></Sort>
                    </div>
                    <hr className={styles.hr}></hr>
                    <div className={styles.product}>
                        <div className={styles.img}><Image src='product_for_girl_dress.jpg' title='Dress' price='15$'/></div>
                        <div className={styles.img}><Image src='product_for_girl_Orange_clothes.jpg' title='Set-Dress Kid' price='15$'/></div>
                        <div className={styles.img}><Image src='pink_hoodie_girl.jpg' title='Hoddie' price='10$'/></div>
                        <div className={styles.img}><Image src='hoddies_girl.jpg' title='Hoddie' price='15$'/></div>
                        <div className={styles.img}><Image src='product_for_girl_trouser.jpg' title='Trouser' price='8$'/></div>
                        <div className={styles.img}><Image src='set-hoodie.jpg' title='Set-Hoodie' price='15$'/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}