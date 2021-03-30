import styles from './../styles/about.module.css'
import ParallaxImage from '../component/presentations/parallax_image'

export default function About(){

    return(
        <div className={styles.title}>
            <ParallaxImage title="About us" />
            <div className={styles.content}>
                <div className={styles.our_mission}>
                    <h2>Our Mission</h2>  
                    <p> Our mission is to
                        continually raise the bar of the customer
                        experience by using the internet and technology to help consumers find, discover and buy anything, and
                        empower businesses and content creators to maximise their success. We aim to be Earth's most customer
                        centric company.We will continue to push at the boundaries of how technology – digital infrastructure and
                        services – can improve the customer experience and help make the economies of the countries where we operate
                        more competitive on the global stage. Our name "2U" wants to depict a message that our company will do
                        everything in out power to deliver your valued orders to you safely and quickly with an affordable price!!
                    </p>
                </div>
                <div className={styles.our_team}>
                    <h2>Our Team</h2>
                    <div className={styles.G_1}>
                        <img src="reach.jpg" className={styles.pic}/>
                        <p>My name is Reach, I'm 15 years old and was born on May 5 2005, and I'm the owner and a Cambodian developer of the company 2U and I'm also a studying student at the school "Sabai Code".</p>
                        <div className={styles.socialIcon}>
                            <a href="https://web.facebook.com/profile.php?id=100008757060143"><img src="facebook.png" className={styles.img} /></a>
                            <a href="https://web.facebook.com/messages/t/100008757060143"><img src="messenger.png" className={styles.img} /></a>
                        </div>
                    </div>
                    <div className={styles.G_2}>
                        <img src="Roth.jpeg" className={styles.pic}/>
                        <p>My name is Roth, I'm 18 years old and study at high school in grade 12 , I'm the owner and a Cambodian developer of the company 2U and I'm also a studying student at the school "Sabai Code".</p>
                        <div className={styles.socialIcon}>
                            <a href="https://web.facebook.com/?_rdc=1&_rdr"><img src="facebook.png" className={styles.img} /></a>
                            <a href="https://web.facebook.com/messages/t/100031888552651"><img src="messenger.png" className={styles.img} /></a>
                            <a href="https://www.instagram.com/__r_o_t_h__sokun/"><img src="instagram.png" className={styles.img} /></a>
                        </div>         
                    </div>
                </div>
            </div>
        </div>
    )
}