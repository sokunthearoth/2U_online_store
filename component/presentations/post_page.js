import React from 'react';
import { useState } from 'react';
import styles from '../../styles/seller_acc.module.css'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import {fireStorage} from './../../services/firebase'


const Post_Page = () => {
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');
  const [discount, setdiscount] = useState('');
  const [instock, setinstock] = useState('');
  const products = { name, price, description, category, discount, instock };
    const [color, setColor] = React.useState("#563d7c");
    const handleChangeColor = (e) => {
        setColor(e.target.value);
    }
    const handlePost = (e) => {
      e.preventDefault();
      const file = document.getElementById("Product-Image").files[0]
      console.log(file)
      const storageRef = fireStorage.ref('product_image/');
      const fileRef= storageRef.child(file.name);
      fileRef.put(file)
      .then((res)=>{
        fileRef.getDownloadURL()
        .then((res)=>{   
          fetch('http://localhost:8000/api/products/', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name":name,
          "price":price,
          "description":description,
          "category":category,
          "discount":discount,
          "instock":instock,
          "img_url":res
        }) 
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((err) => {
          console.error(err)
        })
    }).catch((err)=>{
      console.log(err)
    })
      })
    }
    return (
        <div className={styles.Item}>
            {/* <h1>Post</h1> */}

            <form className={styles.form}>
                <button><input type='file' id="Product-Image" multiple/></button>
                

                <Grid container spacing={1}>
                    <Grid container xs={12} sm={6}>
                        <TextField id="standard-basic"  onChange={(e) => setname(e.target.value)} value={name} label="Product Name" />
                        <TextField id="standard-basic"  onChange={(e) => setdescription(e.target.value)} value={description} label="Description" />
                        <TextField id="standard-basic"  onChange={(e) => setdiscount(e.target.value)} value={discount} label="Discount" />
                        <TextField id="standard-basic"  onChange={(e) => setcategory(e.target.value)} value={category} label="Categories" />
                    </Grid>

                    <Grid container xs={12} sm={6}>
                        <TextField id="standard-basic"  onChange={(e) => setinstock(e.target.value)} value={instock} label="Number of Instock" />
                        <TextField id="standard-basic"  onChange={(e) => setprice(e.target.value)} value={price} label="Price" />
                        <TextField id="standard-basic" label="Number of color" />
                        <label className={styles.L}>Color picker :</label>
                        <input onChange={handleChangeColor} type="color" value={color} title="Choose your color"></input>
                    </Grid>
                </Grid>
                <div className={styles.input}>
                    <input type="submit" onClick={handlePost} value="Post" className={styles.btn} />
                    <input type="submit" value="Cancel" className={styles.btns} />
                </div>


            </form>
        </div>
    );
}
export default Post_Page;