import Image from './../component/presentations/imageCart'
import Search from '../component/containers/search'
import Sidebar from '../component/containers/sidebar'
import ParallaxImage from '../component/presentations/parallax_image'
import styles from '../styles/style_page.module.css'
import Sort from '../component/containers/sort'

export default function Skincare(){
      return (
        <div>
            <ParallaxImage title="skin care" />
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
                        <div className={styles.img}><Image src='product_SkinCare.jpg' title='Professional Skincare' price='15$'/></div>
                        <div className={styles.img}><Image src='Skin_care.jpg' title='Lightening Serum' price='25$'/></div>
                        <div className={styles.img}><Image src='skincare-set-dry.jpg' title='Bella Aura Skincare' price='20$'/></div>
                        <div className={styles.img}><Image src='Men_SkinCare.jpg' title='Best Face Masks' price='25$'/></div>
                        <div className={styles.img}><Image src='mask.jpg' title='Brightening Mask' price='15$'/></div>
                        <div className={styles.img}><Image src='image mask.jpg' title='IMAGE Skinkcare' price='20$'/></div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
