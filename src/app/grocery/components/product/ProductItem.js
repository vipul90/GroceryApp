import React from 'react'
import { Grid } from '@material-ui/core';
import ProductCard from './ProductCard'

export default function ProductItem(props){    
       return (
            <Grid item xs={12} sm={6}  md={4} lg={3} className="gridCell">
                <ProductCard {...props}></ProductCard>
            </Grid>
       );
}
