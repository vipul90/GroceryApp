import React from 'react';
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Typography }from '@material-ui/core';
import AddCartButton from '../../shared/AddCartButton'

export default function ProductCard(props){
  const productDetail = props.ProductDetail;
  return (
    <Card className="CardRoot">
      <CardActionArea>
        <CardMedia
          component="img"
          image = {productDetail.ImageName}
          alt={productDetail.ItemName}
          height="150"
          title={productDetail.ItemName}/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
          {productDetail.ItemName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {productDetail.ProductMeasuremnetUnit}
          </Typography>
        </CardContent>
      </CardActionArea>
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


