import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Typography, Button, Avatar, Toolbar } from '@material-ui/core';
import useStyles from './styles';
import jam from '../../images/jam.png';

const Navbar = () => {
    const classes = useStyles();

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();

    const user = null;
    const element = <h3>Date: {month}/{date}/{year} <hr></hr> Time: {hours}:{minutes}</h3>;




    return (
        
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Jam</Typography>
                <img className={classes.image} src={jam} alt="jam" height="80" />
                <div className={classes.date} variant="h1">{element}</div>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                ) : (                    
                    <Button component={Link} to="/auth" variant="contained" color="primary" id="myForm">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar