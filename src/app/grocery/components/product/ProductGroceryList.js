import React from 'react';
import { Grid } from '@material-ui/core';
import '../../Css/Grocery.css';
import ProductItem from './ProductItem';
import {connect} from 'react-redux';
import * as actionCreators from '../../../action/actionCreators';
import {bindActionCreators} from 'redux';
import CustomCarouselControl from '../../shared/carousel/CarouselControl';
import PropTypes from "prop-types";

class ProductGroceryList extends React.Component {   
    render(){
        return (
            <div data-test="ProductGroceryListComponent">
                 <Grid item xs={12} >
                        <CustomCarouselControl></CustomCarouselControl>`
                    </Grid>

                <Grid container spacing={4} >
                {this.props.AvailableGroceries.map(item=>{
                      return <ProductItem 
                      key={item.ItemId} 
                      ProductDetail = {item}
                      AddItemFn = {this.props.AddItemInUserGroceryList}
                      IncreaseItemFn = {this.props.IncreaseItemInUserGroceryList}
                      DecreaseItemFn = {this.props.DecreaseItemInUserGroceryList}
                      RemoveItemFn = {this.props.RemoveItemInUserGroceryList} 
                      UserDataForItem = {this.props.UserGroceries.find(x=>x !==undefined && x.ItemId === item.ItemId) }></ProductItem>
                })}
                </Grid>
            </div>
        );
    }
}

ProductGroceryList.propTypes = {
    UserGroceries: PropTypes.array,
    AvailableGroceries: PropTypes.array,
    AddItemInUserGroceryList: PropTypes.func,
    IncreaseItemInUserGroceryList: PropTypes.func,
    DecreaseItemInUserGroceryList: PropTypes.func,
    RemoveItemInUserGroceryList: PropTypes.func
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
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductGroceryList);