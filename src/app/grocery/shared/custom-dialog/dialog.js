import React from 'react';
import {Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle , Button } from '@material-ui/core';
import PropTypes from "prop-types";

export default function CustomDialog(props) {
    return (
        <Dialog
        open={props.open}
        onClose={props.NoHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Are You Sure?"}</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            Do you want to delete {props.ItemName} ?
        </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button variant="contained"  onClick={props.NoHandler} color="primary" autoFocus>
            No
        </Button>
        <Button variant="contained" onClick={() =>{props.YesHandler(props.ItemId)}} color="primary">
            Yes
        </Button>
       
        </DialogActions>
    </Dialog>
    )
}

CustomDialog.propTypes ={
    open : PropTypes.bool,
    ItemName : PropTypes.string,
    NoHandler : PropTypes.func,
    YesHandler : PropTypes.func,
    ItemId : PropTypes.any
}
