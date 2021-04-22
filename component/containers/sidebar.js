import React, { useState, useEffect, useContext } from 'react';
import styles from '../../styles/sidebar.module.css'
import { Router, useRouter } from 'next/router'
import Link from '../presentations/Active_Link'
import { SelectContext} from '../contexts/SelectContext'

export default function Sidebar() {
  const router = useRouter();
  const {select,setselect} = useContext(SelectContext);
  const [isopen, setOpen] = useState(false);
  const [open, set] = useState(false);
  const [t, f] = useState(false);
  const [o, c] = useState(false);
  const [tru, fal] = useState(false);


  const  [isClick, setIsClick] = useState(true);
  useEffect(()=>{
    if(isClick && router.pathname === "/men"){
      f(true);
    }
    if(isClick && router.pathname === "/women"){
      c(true);
    }
    if(isClick && router.pathname === "/boy"){
      fal(true);
    }
    if(isClick && router.pathname === "/girl"){
      setOpen(true);
    }
    if(isClick && router.pathname === "/skincare"){
      set(true);
    }
  })
  const styleopen={
    color: 'red',
    textDecoration: 'underline black'
  }
  const styleclose={
    color: 'black',
  }
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
    setIsClick(false);
  }
  const handleOpenNavBar1 = () => {
    set(!open);
    setOpen(false);
    f(false);
    c(false);
    fal(false);
    setIsClick(false);
  }
  const handleOpenNavBar2 = () => {
    f(!t);
    set(false);
    setOpen(false);
    c(false);
    
    fal(false);
    setIsClick(false);
  }
  const handleOpenNavBar3 = () => {
    c(!o);
    set(false);
    f(false);
    setOpen(false); 
    
    fal(false);
    setIsClick(false);
  }
  const handleOpenNavBar4 = () => {
    fal(!tru);
    set(false);
    f(false);
    setOpen(false);
    c(false);
    setIsClick(false);
  }
  return (
    <div>
        <div className={styles.sidenav}>
        <p className={styles.title}>categories</p>
        <Link href='/men'>
          <button onClick={handleOpenNavBar2} className={router.pathname === '/men'  ? (styles.dropdownbtn1) : (styles.dropdownbtn)}>Men<img style={style} src='/arrowred.png'></img></button>
        </Link>
        {
          t === true ? (
            <div className={styles.dropdowncontainer}>
              <a onClick={() => setselect('men_shirt')} style={select === "men_shirt" ? (styleopen) : (styleclose)}>Shirts</a>
              <a onClick={() => setselect('men_pants')} style={select === "men_pants" ? (styleopen) : (styleclose)}>Pants</a>
              <a onClick={() => setselect('men_shoes')} style={select === "men_shoes" ? (styleopen) : (styleclose)}>Shoes</a>
              <a onClick={() => setselect('men_belts')} style={select === "men_belts" ? (styleopen) : (styleclose)}>Belts</a>
              <a onClick={() => setselect('men_watches')}style={select === "men_watches" ? (styleopen) : (styleclose)}>Watches</a>
            </div>
          ) :
            (<span></span>)
        }
        <Link href='/women'>
          <button onClick={handleOpenNavBar3} className={router.pathname === '/women'? (styles.dropdownbtn1) : (styles.dropdownbtn)}>Women<img style={style1} src='/arrowred.png'></img></button>
        </Link>
        {
          o === true ? (
            <div className={styles.dropdowncontainer}>
              <a onClick={() => setselect('women_shirts')}style={select === "women_shirts" ? (styleopen) : (styleclose)}>Shirts</a>
              <a onClick={() => setselect('women_skirts')}style={select === "women_skirts" ? (styleopen) : (styleclose)}>Skirts</a>
              <a onClick={() => setselect('women_dresses')}style={select === "women_dresses" ? (styleopen) : (styleclose)}>Dresses</a>
              <a onClick={() => setselect('women_cosmetics')}style={select === "women_cosmetics" ? (styleopen) : (styleclose)}>Cosmestics</a>
            </div>
          ) :
            (<span></span>)
        }
        <Link href='/boy' className={styles.sidenav}>
          <button onClick={handleOpenNavBar4} className={router.pathname === '/boy' ? (styles.dropdownbtn1) : (styles.dropdownbtn)}>Boy<img style={style4} src='/arrowred.png'></img></button>
        </Link>
        {
          tru === true ? (
            <div className={styles.dropdowncontainer}>
              <a onClick={() => setselect('boy_shirts')}style={select === "boy_shirts" ? (styleopen) : (styleclose)}>Shirts</a>
              <a onClick={() => setselect('boy_pants')}style={select === "boy_pants" ? (styleopen) : (styleclose)}>Pants</a>
            </div>
          ) :
            (<span></span>)
        }
        <Link href='/girl'>
          <button onClick={handleOpenNavBar} className={router.pathname === '/girl' ? (styles.dropdownbtn1) : (styles.dropdownbtn)}>Girl<img style={style3} src='/arrowred.png'></img></button>
        </Link>
        {
          isopen === true ? (
            <div className={styles.dropdowncontainer}>
              <a onClick={() => setselect('girl_shirts')}style={select === "girl_shirts" ? (styleopen) : (styleclose)}>Shirts</a>
              <a onClick={() => setselect('girl_pants')}style={select === "girl_pants" ? (styleopen) : (styleclose)}>Pants</a>
            </div>
          ) :
            (<span></span>)
        }
        <Link href='/skincare'>
          <button onClick={handleOpenNavBar1} className={router.pathname === '/skincare' ? (styles.dropdownbtn1) : (styles.dropdownbtn)}>Skin Care<img style={style2} src='/arrowred.png'></img></button>
        </Link>
        {
          open === true ? (
            <div className={styles.dropdowncontainer}>
              <a onClick={() => setselect('skin_cares')}style={select === "skin_cares" ? (styleopen) : (styleclose)}>New In</a>
            </div>
          ) :
            (<span></span>)
        }
      </div>
    </div>
  )
}