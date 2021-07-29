import React from 'react';
import styles from '../../styles/seller_acc.module.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';



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

    // const [color, setColor] = React.useState("#563d7c");
    // const handleChangeColor = (e) => {
    //     setColor(e.target.value);
    // }
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
                            <TextField id="standard-basic" label="Product Name" />
                            <TextField id="standard-basic" label="Description" />
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
                            <TextField id="standard-basic" label="Number of Instock" />
                            <TextField id="standard-basic" label="Price" />
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
                    </Grid>
                </div>
                <div className={styles.input}>
                    <input type="submit" value="Post" className={styles.btn} />
                    <input type="submit" value="Cancel" className={styles.btns} />
                </div>


            </form>
        </div>
    );
}
export default Post_Page;