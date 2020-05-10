import React from 'react'
import { Grid } from '@material-ui/core';
import '../../Css/Grocery.css'
import UserGroceryItem from './UserGroceryItem'
import {connect} from 'react-redux'
import * as actionCreators from '../../../action/actionCreators'
import {bindActionCreators} from 'redux'
// import "@babel/polyfill"
import PropTypes from "prop-types";
import EmptyCart from './EmptyCart'

class UserGroceryList extends React.Component {   
    render(){
        return (
            <div>
                <div className="myCartGrid"><strong>My Shopping Cart</strong></div> 
                {this.props.TotalQuantity > 0 ? 
                ( <div><Grid container>
                        <Grid item xs={12} >
                            <Grid container>
                                <Grid item xs={10} sm={10}  md={10} lg={11} className="gridTotal">
                                    Total
                                </Grid>
                                <Grid item xs={2} sm={2}  md={2} lg={1} className="">
                                <div className="priceCell"><strong>&#x20B9;{this.props.UserGroceries.reduce((prev,next)=>{ return prev + next.Total; },0)} </strong></div> 
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <hr style={{color:'lightgrey'}}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing = {2}>
                        {this.props.UserGroceries.map(item=>{
                            return <UserGroceryItem 
                            key={item.Id} 
                            UserDataForItem = {item}
                            AddItemFn = {this.props.AddItemInUserGroceryList}
                            IncreaseItemFn = {this.props.IncreaseItemInUserGroceryList}
                            DecreaseItemFn = {this.props.DecreaseItemInUserGroceryList}
                            RemoveItemFn = {this.props.RemoveItemInUserGroceryList} 
                            ProductDetail = {this.props.AvailableGroceries.find(x => x !==undefined && x.ItemId === item.ItemId) }>
                            </UserGroceryItem>
                        })}
                    </Grid></div>) : 
                <EmptyCart /> }
            </div>
        );
    }
}

UserGroceryList.propTypes = {
    UserGroceries: PropTypes.array,
    AvailableGroceries: PropTypes.array,
    AddItemInUserGroceryList: PropTypes.func,
    IncreaseItemInUserGroceryList: PropTypes.func,
    DecreaseItemInUserGroceryList: PropTypes.func,
    RemoveItemInUserGroceryList: PropTypes.func,
    TotalQuantity : PropTypes.number
  };
  
const mapDispatchToProps = (dispatch) =>{
    return {
        ...bindActionCreators(actionCreators,dispatch)
    }
}

const mapStateToProps = (state) =>{
    return {
        AvailableGroceries : state.GroceryDetails.availableGroceryList,
        UserGroceries : state.GroceryDetails.userGroceryItems,
        TotalQuantity:state.GroceryDetails.userGroceryItems.reduce((prev,next)=>{ return prev + next.Quantity; },0)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserGroceryList);