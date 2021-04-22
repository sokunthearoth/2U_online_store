import Link from '../presentations/link'
import React, { useState } from 'react';
import styles from './../../styles/Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faShoppingBasket, faUser } from "@fortawesome/free-solid-svg-icons"
import { ProductContext } from './../contexts/ProductContext'
import { useContext } from 'react'
import Sidebar from './sidebar'
import { Button } from 'bootstrap';

export default function Nav() {
    const { cart, setcart } = useContext(ProductContext)
    const [isopen, setOpen] = useState(false);
    const handleOpenNavBar = () => {
        setOpen(!isopen);
    }

    return (
        <div className={styles.header}>
            <Link href='/home' className={styles.link}><img src='NTU.png' className={styles.nav}></img></Link>
            <div className={styles.L}>
                <div className={styles.nav_link}>
                    <Link href='/home' className={styles.link}>Home</Link>
                    <Link href='/men' className={styles.link}>Men</Link>
                    <Link href='/women' className={styles.link}>Women</Link>
                    <Link href='/boy' className={styles.link}>Boy</Link>
                    <Link href='/girl' className={styles.link}>Girl</Link>
                    <Link href='/skincare' className={styles.link}>Skin Care</Link>
                    <Link href='/about' className={styles.link}>About</Link>
                    <Link href='/contact' className={styles.link}>Contacts</Link>
                </div>
                <div className={styles.nav_icon}>
                    <Link href='/' ><FontAwesomeIcon icon={faUser} className={styles.User}></FontAwesomeIcon></Link>
                    <Link href='/cart'><FontAwesomeIcon icon={faShoppingBasket} className={styles.icon}></FontAwesomeIcon></Link>
                    <p className={styles.status}>{cart.length}</p>
                    <button onClick={handleOpenNavBar}>
                        <FontAwesomeIcon icon={faBars} className={styles.menu}></FontAwesomeIcon>
                    </button>
                    {
                        isopen === true ? (
                            <div className={styles.dropdowncontainer}>
                                <Sidebar/>
                                sljalkf
                            </div>
                        ) :
                            (<span></span>)
                    }
                </div>
            </div>
        </div>
    )
}