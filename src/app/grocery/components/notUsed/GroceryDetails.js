import React from 'react';
import DetailLineItem from './DetailLineItem';
import '../Css/Grocery.css'; 
import {Button} from '@material-ui/core'

import GroceryDetailItem from '../../../Helpers/GroceryDetailItem'
import { connect } from 'react-redux';
import * as actions from '../../../action/actionCreators'
import DateValue from '../../../Helpers/Utils'

class GroceryDetails extends React.Component {

    constructor(){
        super();
        this.AddItemInGroceryHandler = this.AddItemInGrocery.bind(this);
    }
    AddItemInGrocery(){
      
        const newObj = new GroceryDetailItem(-1,'Item 4',2, DateValue);
        //console.log('Props is in AddItemInGrocery ',this.props);
        this.props.dispatch(actions.AddItemInGrocery(newObj));
    }
    render(){
        return (
            <div>
                <DetailLineItem HeaderValue="Enter Your Name" ItemValue = 'Test' ></DetailLineItem>
                <Button onClick={this.AddItemInGroceryHandler} variant="contained" size="medium" color="primary" >Save</Button>
            </div>
        );
    }
}

export default connect((state) =>{
    return {
        Groceries : state.GroceryDetails
    }
})(GroceryDetails);