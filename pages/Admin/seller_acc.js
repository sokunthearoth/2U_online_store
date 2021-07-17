import React from 'react';
import styles from '../../styles/seller_acc.module.css'
import Image from 'next/image';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Post_Page from '../../component/presentations/post_page'
import Product_Page from '../../component/presentations/manage_product';
import Order_Page from '../../component/presentations//manage_order';
import Customer_Page from '../../component/presentations//manage_coustomer';
import DashBoard from '../../component/presentations/dashboard';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100vh',
        maxWidth: '1300px',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '18px',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        height: '100vh',
        padding: '0px 0px 0px 50px',
        textAlign: `left`,
    },
    label: {
        padding: '0px 50px 0px 50px',
    },
}));

const ProfileAccSeller = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className={styles.selleradmin}>
            <div className={styles.Profile}>
                <Image src="/profile_defult.png" alt="Picture of the author" width={100} height={100} />
                <br></br>
                <p>Name</p>
            </div>
            <div className={classes.root}>
                <div className={styles.left}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        className={classes.tabs}
                    >
                        <Tab className={classes.label} label="Post Product" {...a11yProps(0)} />
                        <Tab className={classes.label} label="Manage Product" {...a11yProps(1)} />
                        <Tab className={classes.label} label="Manage Order" {...a11yProps(2)} />
                        <Tab className={classes.label} label="Manage Customer" {...a11yProps(3)} />
                        <Tab className={classes.label} label="Dashboard" {...a11yProps(4)} />
                        <Tab className={classes.label} label="Logout" {...a11yProps(5)} />

                    </Tabs>
                </div>

                <div className={styles.right}>
                    <TabPanel  value={value} index={0}>
                        <Post_Page />
                    </TabPanel>
                    <TabPanel  value={value} index={1}>
                        <Product_Page />
                    </TabPanel>
                    <TabPanel  value={value} index={2}>
                        <Order_Page />
                    </TabPanel>
                    <TabPanel  value={value} index={3}>
                        <Customer_Page  />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <DashBoard />
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                </div>
            </div>


        </div>
    );
}
export default ProfileAccSeller;

