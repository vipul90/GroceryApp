import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddCartButton from '../../shared/AddCartButton'
import { Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import { prototype } from 'stream';

const useStyles = makeStyles(() => ({
  cardRoot: {
    display: 'flex',
  },
  divDetails: {
    display: 'flex',
    flexDirection: 'column',
    width:'100%',
  },
  bottomDivDetails: {
    display: 'flex',
    flexDirection: 'column',
    width:'100%',
    marginTop:'-20px'
  },
  cardContent: {
    flex: '1 0 auto',
    margin:'0px'
  }
}));

export default function UserGroceryCard(props) {
  const [open, setOpen] = React.useState(false);
  const styles = useStyles();
  const productDetail = props.ProductDetail;
  const userDetail = props.UserDataForItem;
  const RemoveItemFromrGroceryList = (userItemId) => {
    let payload = {Id:userItemId};
    props.RemoveItemFn(payload);
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (  
    <Card className={styles.cardRoot}>
      <CardMedia
        className="cardMedia"
        image={productDetail.ImageName}
        title={productDetail.ItemName} />
      <div className={styles.divDetails}>
        <CardContent className={styles.cardContent}>
        <div>         
            <Grid container>
                <Grid item xs={10} sm={10} md={10} lg={11} className="gridItem">
                <Typography component="h5" variant="h5">
                        {productDetail.ItemName}
                    </Typography>
                </Grid>               
                <Grid item xs={2} sm={2}  md={2} lg={1}>
                    <DeleteIcon onClick={handleClickOpen}></DeleteIcon>
                    <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Are You Sure?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you want to delete {productDetail.ItemName} ?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button variant="contained"  onClick={handleClose} color="primary" autoFocus>
                        No
                    </Button>
                    <Button variant="contained" onClick={() => {RemoveItemFromrGroceryList(userDetail.Id)}} color="primary">
                        Yes
                    </Button>
                   
                    </DialogActions>
                </Dialog>
                </Grid>
            </Grid>
        </div>
          <Typography variant="subtitle1" color="textSecondary">
            {productDetail.ProductMeasuremnetUnit}
          </Typography>
        </CardContent>
        <div className={styles.bottomDivDetails}>
            <CardContent className={styles.cardContent}>
                <Grid container>
                    <Grid item xs={4} sm={3} md={3} lg={2}>
                            <AddCartButton {...props}/>
                    </Grid>
                    <Grid item xs={2} sm={2}  md={2} lg={1} className="gridCell">
                            <span className="spanCrossRendering">X</span>
                    </Grid>
                    <Grid item xs={4} sm={5}  md={5} lg={8}>
                        <span className="priceCell">
                            <strong>&#x20B9;{productDetail.Price}</strong>
                        </span>
                    </Grid>
                    <Grid item xs={2} sm={2}  md={1} lg={1} >
                        <div className="priceCell"><strong>&#x20B9;{userDetail.Total}</strong></div>
                    </Grid>
                
                </Grid>
            </CardContent>
        </div>
        
      </div>
    </Card>
  );
}

UserGroceryCard.prototype ={
  
}