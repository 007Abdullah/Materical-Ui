import { makeStyles } from '@material-ui/core';
import React from 'react';

// withStyles and makeStyles

const useStyle = makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
    }
})


export default function Sidemenu() {
    const classes = useStyle();
    console.log(classes);
    return (
        <div className={classes.sideMenu}>

        </div>
    )
}
