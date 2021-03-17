import styles from './../styles/about.module.css'


export default function About(){

    return(
        <div className={styles.title}>
            <div className={styles.parallax}>
                <h1>ABOUT US</h1>
            </div>
            <div className={styles.content}>
                <div>
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
                    <div>
                        <img src="reach.jpg"/>
                        <p>My name is Reach,Im 15 years old and was born on May 5 2005, and im the owner and a Cambodian devolper of the company 2U and im also a studying student at the school "Sabai Code".</p>
                    </div>
                    <div>
                        <img src="Roth.jpeg" width="600px"/>
                        <p>My name is Reach,Im 15 years old and was born on May 5 2005, and im the owner and a Cambodian devolper of the company 2U and im also a studying student at the school "Sabai Code".</p>
                    </div>
                </div>
            </div>
        </div>
    )
}