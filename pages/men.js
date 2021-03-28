import Image from './../component/presentations/imageCart'
import Sidebar from '../component/containers/sidebar'
import Search from '../component/containers/search'
import ParallaxImage from '../component/presentations/parallax_image'
import styles from '../styles/style_page.module.css'
import Sort from '../component/containers/sort'

export default function Men(){
    return(
        <div>
            <ParallaxImage title="men" />
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
                        <div className={styles.img}><Image src='hoddies.jpg' title='Plaid Shirt' price='10$'/></div>
                        <div className={styles.img}><Image src='jecket.jpg' title='Coat' price='30$'/></div>
                        <div className={styles.img}><Image src='product-image.jpg' title='Coat' price='25$'/></div>
                        <div className={styles.img}><Image src='product_for_men_watch.jpg' title='Shirt' price='25$'/></div>
                        <div className={styles.img}><Image src='product_for_men_T-shirt.jpg' title='Shirt' price='25$'/></div>
                        <div className={styles.img}><Image src='trouser_black.jpg' title='Trouser' price='30$'/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}