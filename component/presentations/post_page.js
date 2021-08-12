import React from 'react';
import { useState } from 'react';
import styles from '../../styles/seller_acc.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InputLabel from '@material-ui/core/InputLabel';
import { fireStorage } from './../../services/firebase'
import ReactLoading from 'react-loading';

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

    const [loading , setLoading] = React.useState(false);
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
        setLoading(true)
        e.preventDefault();
        const file = document.getElementById("Product-Image").files[0]
        console.log(file)
        const storageRef = fireStorage.ref('product_image/');
        const fileRef = storageRef.child(file.name);
        fileRef.put(file)
            .then((res) => {
                fileRef.getDownloadURL()
                    .then((res) => {
                        fetch('http://localhost:8000/api/products/', {
                            method: 'post',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                "name": name,
                                "price": price,
                                "description": description,
                                "category": category,
                                "discount": discount,
                                "instock": instock,
                                "img_url": res
                            })
                        })
                            .then(response => response.json())
                            .then(data =>{ console.log(data) ,setLoading(false)})
                            .catch((err) => {
                                console.error(err)
                            })
                    }).catch((err) => {
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
            {loading&&<ReactLoading type="balls" color="blue" height={'20%'} width={'20%'} className={styles.loading} />}
            {/* <h1>Post</h1> */}

            <form className={styles.form}>
                <input accept="image/*"
                id='Product-Image'
                    type="file" />

                <div className={classes.root}>
                    <Grid container spacing={0} className={styles.post}>
                        <Grid item xs={12} sm={6}>
                            <TextField id="standard-basic" onChange={(e) => setname(e.target.value)} value={name} label="Product Name" />
                            <TextField id="standard-basic" onChange={(e) => setdescription(e.target.value)} value={description} label="Description" />
                            {/* <TextField id="standard-basic" label="Categories" /> */}
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
                                <MenuItem value={1} onClick={()=>{setcategory("men_shirt")}}>Men Shirt</MenuItem>
                                <MenuItem value={2} onClick={()=>{setcategory("women_shirt")}}>Women Shirt</MenuItem>
                                <MenuItem value={3} onClick={()=>{setcategory("boy_shirt")}}>Boy Shirt</MenuItem>
                                <MenuItem value={4} onClick={()=>{setcategory("girl_shirt")}}>Girl Shirt</MenuItem>
                                <MenuItem value={5} onClick={()=>{setcategory("men_jean")}}>Men Jean</MenuItem>
                                <MenuItem value={6} onClick={()=>{setcategory("women_jean")}}>Women Jean</MenuItem>
                                <MenuItem value={7} onClick={()=>{setcategory("boy_jean")}}>Boy Jean</MenuItem>
                                <MenuItem value={8} onClick={()=>{setcategory("girl_jean")}}>girl Jean</MenuItem>
                                <MenuItem value={9} onClick={()=>{setcategory("women_skirt")}}>Women Skirt</MenuItem>
                                <MenuItem value={10} onClick={()=>{setcategory("girl_skirt")}}>Girl Skirt</MenuItem>
                                <MenuItem value={11} onClick={()=>{setcategory("men_watch")}}>Men Watch</MenuItem>
                                <MenuItem value={12} onClick={()=>{setcategory("men_belt")}}>Men belt</MenuItem>
                                <MenuItem value={13} onClick={()=>{setcategory("women_cosmestics")}}>Women Cosmestics</MenuItem>
                                <MenuItem value={14} onClick={()=>{setcategory("women_dress")}}>Women Dress</MenuItem>
                                <MenuItem value={15} onClick={()=>{setcategory("girl_dress")}}>Girl Dress</MenuItem>
                                <MenuItem value={16} onClick={()=>{setcategory("men_pants")}}>Men Pants</MenuItem>
                                <MenuItem value={17} onClick={()=>{setcategory("women_pants")}}>Women Pants</MenuItem>
                                <MenuItem value={18} onClick={()=>{setcategory("boy_pants")}}>Boy Pants</MenuItem>
                                <MenuItem value={19} onClick={()=>{setcategory("girl_pants")}}>Girl Pants</MenuItem>
                                <MenuItem value={20} onClick={()=>{setcategory("skincare")}}>Skincare</MenuItem>
                            </Select>
                        </Grid>
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