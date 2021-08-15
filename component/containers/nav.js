import Link from '../presentations/link'
import styles from './../../styles/Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faBell, faShoppingBasket, faUser } from "@fortawesome/free-solid-svg-icons"
import { ProductContext } from '../contexts/ProductContext'
import React, { useState, useEffect, useContext } from 'react';
import { Router, useRouter } from 'next/router'
import { SelectContext } from '../contexts/SelectContext'
import Image from 'next/image'
import { UserContext } from '../contexts/UserContext'


export default function Nav() {
    const { user, setUser } = useContext(UserContext)
    const { cart, setcart } = useContext(ProductContext)
    const router = useRouter();
    const { select, setselect } = useContext(SelectContext);
    const [isopenclick, click] = useState(false);
    const [isopen, setOpen] = useState(false);
    const [open, set] = useState(false);
    const [t, f] = useState(false);
    const [o, c] = useState(false);
    const [tru, fal] = useState(false);


    const styleopen = {
        color: 'red',
        textDecoration: 'underline black'
    }
    const styleclose = {
        color: 'black',
    }

    const handleOpen = () => {
        click(!isopenclick);
    }
    const handleOpenNavBar = () => {
      setOpen(!isopen);
      set(false);
      f(false);
      c(false);
      fal(false);
    //   setIsClick(false);
      setselect('girl_shirts');
    }
    const handleOpenNavBar1 = () => {
      set(!open);
      setOpen(false);
      f(false);
      c(false);
      fal(false);
    //   setIsClick(false);
      setselect('skin_cares');
    }
    const handleOpenNavBar2 = () => {
      f(!t);
      set(false);
      setOpen(false);
      c(false);
      fal(false);
      setselect('men_shirt');
    //   setIsClick(false);
    }
    const handleOpenNavBar3 = () => {
      c(!o);
      set(false);
      f(false);
      setOpen(false); 
      fal(false);
      setselect('women_shirts');
    //   setIsClick(false);
    }
    const handleOpenNavBar4 = () => {
      fal(!tru);
      set(false);
      f(false);
      setOpen(false);
      c(false);
      setselect('boy_shirts');
    //   setIsClick(false);
    }





    return (
        <div className={styles.header}>
            <Link href='/home' className={styles.link}><img src="/NTU.png" alt="Picture of the author" className={styles.nav} width={100} height={100}/></Link>
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
                    <Link href='/' className={styles.User}>{user === ('') ? (<img src="/profile_defult.png" alt="user" className={styles.User}/>):(<img src={user.img_url} alt="user" className={styles.User}/>)}</Link>
                    <Link href='/cart'><FontAwesomeIcon icon={faShoppingBasket} className={styles.icon}></FontAwesomeIcon></Link>
                    <p className={styles.status}>{cart.length}</p>
                    <Link href='#'><FontAwesomeIcon icon={faBell} className={styles.icon}></FontAwesomeIcon></Link>
                    <p className={styles.Status}>0</p>
                    <button onClick={handleOpen} className={styles.button}>
                        <FontAwesomeIcon icon={faBars} className={styles.menu}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            {
                isopenclick === true ? (
                    <div className={styles.dropdown}>
                        <ul>
                            <li><Link href='/home'>Home</Link></li>
                            <li>
                                <Link href='/men'>
                                    <button onClick={handleOpenNavBar2} className={styles.link}>Men</button>
                                </Link>
                            </li>
                            {
                                t === true ? (
                                    <div className={styles.dropdowncontainer}>
                                        <ul>
                                            <li><a onClick={() => setselect('men_shirt')} style={select === "men_shirt" ? (styleopen) : (styleclose)}>Shirts</a></li>
                                            <li><a onClick={() => setselect('men_pants')} style={select === "men_pants" ? (styleopen) : (styleclose)}>Pants</a></li>
                                            <li><a onClick={() => setselect('men_shoes')} style={select === "men_shoes" ? (styleopen) : (styleclose)}>Shoes</a></li>
                                            <li><a onClick={() => setselect('men_belts')} style={select === "men_belts" ? (styleopen) : (styleclose)}>Belts</a></li>
                                            <li><a onClick={() => setselect('men_watches')} style={select === "men_watches" ? (styleopen) : (styleclose)}>Watches</a></li>
                                        </ul>
                                    </div>
                                ) :
                                    (<span></span>)
                            }
                            <li>
                                <Link href='/women'>
                                    <button onClick={handleOpenNavBar3} className={styles.link}>Women</button>
                                </Link>
                            </li>
                            {
                                o === true ? (
                                    <div className={styles.dropdowncontainer}>
                                        <ul>
                                            <li><a onClick={() => setselect('women_shirts')} style={select === "women_shirts" ? (styleopen) : (styleclose)}>Shirts</a></li>
                                            <li><a onClick={() => setselect('women_skirts')} style={select === "women_skirts" ? (styleopen) : (styleclose)}>Skirts</a></li>
                                            <li><a onClick={() => setselect('women_dresses')} style={select === "women_dresses" ? (styleopen) : (styleclose)}>Dresses</a></li>
                                            <li><a onClick={() => setselect('women_cosmetics')} style={select === "women_cosmetics" ? (styleopen) : (styleclose)}>Cosmestics</a></li>
                                        </ul>
                                    </div>
                                ) :
                                    (<span></span>)
                            }
                            <li>
                                <Link href='/boy' className={styles.sidenav}>
                                    <button onClick={handleOpenNavBar4} className={styles.link}>Boy</button>
                                </Link>
                            </li>
                            {
                                tru === true ? (
                                    <div className={styles.dropdowncontainer}>
                                        <ul>
                                            <li><a onClick={() => setselect('boy_shirts')} style={select === "boy_shirts" ? (styleopen) : (styleclose)}>Shirts</a></li>
                                            <li><a onClick={() => setselect('boy_pants')} style={select === "boy_pants" ? (styleopen) : (styleclose)}>Pants</a></li>
                                        </ul>
                                    </div>
                                ) :
                                    (<span></span>)
                            }
                            <li>
                                <Link href='/girl'>
                                    <button onClick={handleOpenNavBar} className={styles.link}>Girl</button>
                                </Link>
                            </li>
                            {
                                isopen === true ? (
                                    <div className={styles.dropdowncontainer}>
                                        <ul>
                                            <li><a onClick={() => setselect('girl_shirts')} style={select === "girl_shirts" ? (styleopen) : (styleclose)}>Shirts</a></li>
                                            <li><a onClick={() => setselect('girl_pants')} style={select === "girl_pants" ? (styleopen) : (styleclose)}>Pants</a></li>
                                        </ul>
                                    </div>
                                ) :
                                    (<span></span>)
                            }
                            <li>
                                <Link href='/skincare'>
                                    <button onClick={handleOpenNavBar1} className={styles.link}>Skin Care</button>
                                </Link>
                            </li>
                            {
                                open === true ? (
                                    <div className={styles.dropdowncontainer}>
                                        <ul>
                                            <li><a onClick={() => setselect('skin_cares')} style={select === "skin_cares" ? (styleopen) : (styleclose)}>New In</a></li>
                                        </ul>
                                    </div>
                                ) :
                                    (<span></span>)
                            }
                            <li>
                                <Link href='/about' >About</Link>
                            </li>
                            <li>
                                <Link href='/contact'>Contacts</Link>
                            </li>
                            {/* <li>
                                <Link href='/' ><FontAwesomeIcon icon={faUser} className={styles.user}></FontAwesomeIcon></Link>
                            </li> */}
                        </ul>
                    </div>
                ) : (<span></span>)
            }

        </div>
    )
}