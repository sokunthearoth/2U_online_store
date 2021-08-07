import React from 'react';
import { useState } from 'react';
import styles from '../../styles/seller_acc.module.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {fireStorage} from './../../services/firebase'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    InputLabel: {
        marginTop: '50px',
    }
}));



const Post_Page = () => {

    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState('');
    const [typeCategories, setTypeCategories] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleChanges = (event) => {
        setType(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloses = () => {
        setTypeCategories(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleOpens = () => {
        setTypeCategories(true);
    };

    const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');
  const [discount, setdiscount] = useState('');
  const [instock, setinstock] = useState('');
  const products = { name, price, description, category, discount, instock };
    // const [color, setColor] = React.useState("#563d7c");
    // const handleChangeColor = (e) => {
    //     setColor(e.target.value);
    // }
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

    // const [color, setColor] = React.useState("#563d7c");
    // const handleChangeColor = (e) => {
    //     setColor(e.target.value);
    // }


// const Post_Page = () => {
//   const [name, setname] = useState('');
//   const [price, setprice] = useState('');
//   const [description, setdescription] = useState('');
//   const [category, setcategory] = useState('');
//   const [discount, setdiscount] = useState('');
//   const [instock, setinstock] = useState('');
//   const products = { name, price, description, category, discount, instock };
//     const [color, setColor] = React.useState("#563d7c");
//     const handleChangeColor = (e) => {
//         setColor(e.target.value);
//     }
//     const handlePost = (e) => {
//       e.preventDefault();
//       const file = document.getElementById("Product-Image").files[0]
//       console.log(file)
//       const storageRef = fireStorage.ref('product_image/');
//       const fileRef= storageRef.child(file.name);
//       fileRef.put(file)
//       .then((res)=>{
//         fileRef.getDownloadURL()
//         .then((res)=>{   
//           fetch('http://localhost:8000/api/products/', {
//         method: 'post',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           "name":name,
//           "price":price,
//           "description":description,
//           "category":category,
//           "discount":discount,
//           "instock":instock,
//           "img_url":res
//         }) 
//       })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch((err) => {
//           console.error(err)
//         })
//     }).catch((err)=>{
//       console.log(err)
//     })
//       })
//     }
    return (
        <div className={styles.Item}>
            {/* <h1>Post</h1> */}

            <form className={styles.form}>
                {/* <button><input type='file' multiple /></button> */}

                <div className={classes.root}>
                    <Grid container spacing={0} className={styles.post}>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" label="Image url" className={styles.img} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="standard-basic" onChange={(e) => setname(e.target.value)} value={name} label="Product Name" />
                            <TextField id="standard-basic" onChange={(e) => setdescription(e.target.value)} value={description} label="Description" />
                            {/* <TextField id="standard-basic" label="Categories" /> */}
                            <InputLabel id="demo-controlled-open-select" className={classes.InputLabel}>Categories :</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={age}
                                onChange={handleChange}
                                className={styles.drop}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Men</MenuItem>
                                <MenuItem value={20}>Women</MenuItem>
                                <MenuItem value={30}>Boy</MenuItem>
                                <MenuItem value={40}>Girl</MenuItem>
                                <MenuItem value={50}>Skincare</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="standard-basic" onChange={(e) => setinstock(e.target.value)} value={instock} label="Number of Instock" />
                            <TextField id="standard-basic" onChange={(e) => setprice(e.target.value)} value={price} label="Price" />
                            {/* <TextField id="standard-basic" label="Type of Categories" /> */}
                            <InputLabel id="type-of-categories" className={classes.InputLabel}>Type of Categories :      </InputLabel>
                            <Select
                                labelId="type-of-categories"
                                id="type-of-categories"
                                open={typeCategories}
                                onClose={handleCloses}
                                onOpen={handleOpens}
                                value={type}
                                onChange={handleChanges}
                                className={styles.drop}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Men Shirt</MenuItem>
                                <MenuItem value={2}>Women Shirt</MenuItem>
                                <MenuItem value={3}>Boy Shirt</MenuItem>
                                <MenuItem value={4}>Girl Shirt</MenuItem>
                                <MenuItem value={5}>Men Jean</MenuItem>
                                <MenuItem value={6}>Women Jean</MenuItem>
                                <MenuItem value={7}>Boy Jean</MenuItem>
                                <MenuItem value={8}>girl Jean</MenuItem>
                                <MenuItem value={9}>Women Skirt</MenuItem>
                                <MenuItem value={10}>Girl Skirt</MenuItem>
                                <MenuItem value={11}>Men Watch</MenuItem>
                                <MenuItem value={12}>Men belt</MenuItem>
                                <MenuItem value={13}>Women Cosmestics</MenuItem>
                                <MenuItem value={14}>Women Dress</MenuItem>
                                <MenuItem value={15}>Girl Dress</MenuItem>
                                <MenuItem value={16}>Men Pants</MenuItem>
                                <MenuItem value={17}>Women Pants</MenuItem>
                                <MenuItem value={18}>Boy Pants</MenuItem>
                                <MenuItem value={19}>Girl Pants</MenuItem>
                                <MenuItem value={20}>Skincare</MenuItem>
                            </Select>
                        </Grid>
                        <button><input type='file' id="Product-Image" multiple/></button>
                    </Grid>

                 {/* <Grid container spacing={1}>
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
                    </Grid> */}
                </div>
                <div className={styles.input}>
                    <input type="submit" onClick={handlePost} value="Post" className={styles.btn} />
                    <input type="submit" value="Cancel" className={styles.btns} />
                </div>

            </form>
        </div>
    )
}
export default Post_Page;