import Image from './../component/presentations/imageCart'
import ParallaxImage from '../component/presentations/parallax_image'
import Search from '../component/containers/search'
import Sidebar from '../component/containers/sidebar'
import styles from '../styles/style_page.module.css'
import Sort from '../component/containers/sort'

export default function Boy(){
    return(
        <div>
            <ParallaxImage title="Boy" />
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
                        <div className={styles.img}><Image src='product_for_boy_set_T-shirt.jpg' title='Hoodie' price='8$'/></div>
                        <div className={styles.img}><Image src='product_for_boy_sport_T-shirt.jpg' title='T-Shirt' price='10$'/></div>
                        <div className={styles.img}><Image src='product_for_boy_shocks.jpg' title='Plaid Shirt' price='10$'/></div>
                        <div className={styles.img}><Image src='product_for_boy_trousers.jpg' title='Trouser' price='10$'/></div>
                        <div className={styles.img}><Image src='product_for_boy_shoes.jpg' title='Trouser' price='12$'/></div>
                        <div className={styles.img}><Image src='set-boy.jpg' title='Set-T-Shirt' price='15$'/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}