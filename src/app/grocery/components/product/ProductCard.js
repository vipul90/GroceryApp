import React from 'react';
import {Card,CardActions,CardContent,CardMedia,Typography, Grid,Fade,Tooltip }from '@material-ui/core';
import AddCartButton from '../../shared/AddCartButton';
import InfoIcon from '@material-ui/icons/Info';
import PropTypes from "prop-types";
// import Fade from '@material-ui/core/Fade';

export default function ProductCard(props){
  const productDetail = props.ProductDetail;
  return (
    <Card className="CardRoot">
      <div>
        <CardMedia
          component="img"
          image = {productDetail.ImageName}
          alt={productDetail.ItemName}
          height="150"
          title={productDetail.ItemName}/>
        <CardContent>
        <Grid container>
                <Grid item xs={10} sm={10} md={10} lg={11} className="gridItem">
                    <Typography gutterBottom variant="h6" component="h4">
                    {productDetail.ItemName}
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={1} className="gridItem">
                <Tooltip placement="right" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={<div className="product-Description">{productDetail.Description}</div>}>
                     <InfoIcon />
                  </Tooltip>
                </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" component="p">
            {productDetail.ProductMeasuremnetUnit}
          </Typography>
        </CardContent>
      </div>
      <div>
        <span className="spanMargin">
            <strong>&#x20B9;{productDetail.Price}</strong>
        </span>
        <CardActions className="CardButton">
          <AddCartButton {...props}/>
        </CardActions>
      </div>
    </Card>
  )
}
ProductCard.propTypes ={
  ProductDetail : PropTypes.object
}


