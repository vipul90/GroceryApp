import React from 'react'
import { NavLink } from "react-router-dom";
import {Grid} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    IconStyle: {
        fontSize: 48,
        color: 'black'
    }
}));
export default function Home() {
    const styles = useStyles();
        return (
            <div>
                <Grid container >
                    <Grid item xs={10}>
                            <NavLink to="/"><HomeIcon className={styles.IconStyle}></HomeIcon></NavLink>
                    </Grid>
                    <Grid item xs={2} className="gridRightAlign">
                            <NavLink to="/AddItem"><ShoppingCartIcon className={styles.IconStyle}></ShoppingCartIcon></NavLink>
                    </Grid>
                </Grid>
                <br />
            </div>
        );
}   
