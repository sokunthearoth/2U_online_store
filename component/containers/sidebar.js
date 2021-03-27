import React, { useState, useEffect } from 'react';
import styles from '../../styles/sidebar.module.css'

export default function Sidebar() {
  const [isopen, setOpen] = useState(false);
  const [open, set] = useState(false);
  const [t, f] = useState(false);
  const [o, c] = useState(false);
  const [tru, fal] = useState(false);
  const style = {
    width: 20,
    display: t === true ? 'inline' : 'none',
  }
  const style4 = {
    width: 20,
    display: tru === true ? 'inline' : 'none',
  }
  const style1 = {
    width: 20,
    display: o === true ? 'inline' : 'none',
  }
  const style2 = {
    width: 20,
    display: open === true ? 'inline' : 'none',
  }
  const style3 = {
    width: 20,
    display: isopen === true ? 'inline' : 'none',
  }
  const handleOpenNavBar = () => {
    setOpen(!isopen);
    set(false);
    f(false);
    c(false);
    fal(false);
  }
  const handleOpenNavBar1 = () => {
    set(!open);
    setOpen(false);
    f(false);
    c(false);
    fal(false);
  }
  const handleOpenNavBar2 = () => {
    f(!t);
    set(false);
    setOpen(false);
    c(false);
    fal(false);
  }
  const handleOpenNavBar3 = () => {
    c(!o);
    set(false);
    f(false);
    setOpen(false);
    fal(false);
  }
  const handleOpenNavBar4 = () => {
    fal(!tru);
    set(false);
    f(false);
  setOpen(false);
    c(false);
  }
  return (
    <div>
      <div className={styles.sidenav}>
        <button onClick={handleOpenNavBar2} className={t === true ? (styles.dropdownbtn1) : (styles.dropdownbtn)}>Men<img style={style} src='/arrowred.png'></img></button>
        {
          t === true ? (
            <div className={styles.dropdowncontainer}>
              <a href="#">New In</a>
              <a href="#">Shirts</a>
              <a href="#">Socks</a>
              <a href="#">Shoes</a>
              <a href="#">Belts</a>
              <a href="#">Watches</a>
            </div>
          ) :
            (<span></span>)
        }
        <button onClick={handleOpenNavBar3} className={o === true ? (styles.dropdownbtn1) : (styles.dropdownbtn)}>Women<img style={style1} src='/arrowred.png'></img></button>
        {
          o === true ? (
            <div className={styles.dropdowncontainer}>
              <a href="#">New In</a>
              <a href="#">Shirts</a>
              <a href="#">Socks</a>
              <a href="#">Shoes</a>
              <a href="#">Belts</a>
              <a href="#">Watches</a>
            </div>
          ) :
            (<span></span>)
        }
        <button onClick={handleOpenNavBar4} className={tru === true ? (styles.dropdownbtn1) : (styles.dropdownbtn)}>Boy<img style={style4} src='/arrowred.png'></img></button>
        {
          tru === true ? (
            <div className={styles.dropdowncontainer}>
              <a href="#">New In</a>
              <a href="#">Shirts</a>
              <a href="#">Socks</a>
              <a href="#">Shoes</a>
              <a href="#">Belts</a>
              <a href="#">Watches</a>
            </div>
          ) :
            (<span></span>)
        }
        <button onClick={handleOpenNavBar} className={isopen === true ? (styles.dropdownbtn1) : (styles.dropdownbtn)}>Girl<img style={style3} src='/arrowred.png'></img></button>
        {
          isopen === true ? (
            <div className={styles.dropdowncontainer}>


              <a href="#">New In</a>
              <a href="#">Shirts</a>
              <a href="#">Socks</a>
              <a href="#">Shoes</a>
              <a href="#">Belts</a>
              <a href="#">Watches</a>
            </div>
          ) :
            (<span></span>)
        }
        <button onClick={handleOpenNavBar1} className={open === true ? (styles.dropdownbtn1) : (styles.dropdownbtn)}>Skin Care<img style={style2} src='/arrowred.png'></img></button>
        {
          open === true ? (
            <div className={styles.dropdowncontainer}>
              <a href="#">New In</a>
              <a href="#">Shirts</a>
              <a href="#">Socks</a>
              <a href="#">Shoes</a>
              <a href="#">Belts</a>
              <a href="#">Watches</a>
            </div>
          ) :
            (<span></span>)
        }
      </div>
    </div>
  )
}