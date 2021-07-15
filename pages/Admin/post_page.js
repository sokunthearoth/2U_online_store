import React from 'react';
import styles from '../../styles/seller_acc.module.css'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';



const Post_Page = () => {
    const [color, setColor] = React.useState("#563d7c");
    const handleChangeColor = (e) => {
        setColor(e.target.value);
    }
    return (
        <div className={styles.Item}>
            {/* <h1>Post</h1> */}

            <form className={styles.form}>
                <button><input type='file' multiple/></button>
                

                <Grid container spacing={1}>
                    <Grid container xs={12} sm={6}>
                        <TextField id="standard-basic" label="Product Name" />
                        <TextField id="standard-basic" label="Description" />
                        <TextField id="standard-basic" label="Discount" />
                        <TextField id="standard-basic" label="Categories" />
                        <TextField id="standard-basic" label="Number of color" />
                    </Grid>

                    <Grid container xs={12} sm={6}>
                        <TextField id="standard-basic" label="Number of Instock" />
                        <TextField id="standard-basic" label="Full Price" />
                        <TextField id="standard-basic" label="Price" />
                        <TextField id="standard-basic" label="Type of Categories" />
                        <label className={styles.L}>Color picker :</label>
                        <input onChange={handleChangeColor} type="color" value={color} title="Choose your color"></input>
                    </Grid>
                </Grid>
                <div className={styles.input}>
                    <input type="submit" value="Post" className={styles.btn} />
                    <input type="submit" value="Cancel" className={styles.btns} />
                </div>


            </form>
        </div>
    );
}
export default Post_Page;