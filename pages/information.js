import styles from '../styles/information.module.css'
import { useRouter } from 'next/router'
import Link from '../component/presentations/link'






const Information = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <img src="NTU.png" className={styles.logo} />
            <div className={styles.choosing}>
                <h2>Create Account</h2>
                <p>Welcome to TWO YOU</p>
                <div className={styles.img}>
                    <div  className={styles.link}>
                        <Link href='/information_seller'>
                            <img src="../for seller.png" />
                            <p>Admin</p>
                        </Link>
                    </div>

                    <div className={styles.link}>
                        <Link href='/login'>
                            <img src="../buyer.jpg" />
                            <p>Coustomer</p>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Information;