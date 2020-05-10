import React from 'react'
import { Grid } from '@material-ui/core';
import UserGroceryCard from './UserGroceryCard';

export default function UserGroceryItem(props)  {
       return (
            <Grid item xs={12} sm={12}  md={12} lg={12} className="gridCell">
                <UserGroceryCard {...props}></UserGroceryCard>
            </Grid>
       );
}