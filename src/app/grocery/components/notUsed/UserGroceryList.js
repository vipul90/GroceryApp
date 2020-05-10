import React from 'react'
import { connect } from 'react-redux';
import GroceryListItem from './GroceryListItem'
import '../Css/Grocery.css'; 
import GroceryDetailItem from '../../../Helpers/GroceryDetailItem'
import * as actions from '../../../action/actionCreators'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Button} from '@material-ui/core'

class UserGroceryList extends React.Component {
    constructor(props){
        super(props);
    }
    RemoveItemFromGroceryList(item,dispatch){
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                  <h1>Are you sure?</h1>
                  <p>You want to delete {item.ItemName}?</p>
                  <Button variant="contained" size="small" color="primary"  onClick={onClose}>No</Button>
                  <Button variant="contained" size="small" color="primary" className = 'buttonFloat'
                   onClick={() => {
                        dispatch(actions.RemoveItemInGrocery(item));
                         onClose();
                    }}> Yes, Delete It</Button>
                </div>
              );
            }
          });
    }
    SaveItemFromGroceryList(item,dispatch){
            dispatch(actions.UpdateItemInGrocery(item));
    }

    render(){
        return (
            <div>
                <table className="groceryTable">
                <thead>
                    <GroceryListItem ItemDetail ={new GroceryDetailItem(-1, 'Item Name','Quantity','Date of Purchase') }></GroceryListItem>
                </thead>
                <tbody>
                    {this.props.Groceries.map(item =>{
                        return <GroceryListItem 
                        key={item.ItemId} 
                        ItemDetail = {item}
                        RemoveFn={this.RemoveItemFromGroceryList}
                        DispatchFn ={this.props.dispatch}
                        SaveFn = {this.SaveItemFromGroceryList}></GroceryListItem>
                    })}
                </tbody>
                </table>
                <br />
                Grocery count is : {this.props.Groceries.length}
            </div>
        );
    }
}

export default connect((state, props) =>{
    // console.log( state.GroceryDetails.userGroceryItems.length);
    return {
        Groceries : state.GroceryDetails.userGroceryItems
    }
})(UserGroceryList);