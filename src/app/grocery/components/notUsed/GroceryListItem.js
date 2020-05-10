import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import CustomDropdown from './CustomDropdown';
import GroceryDetailItem from '../../../Helpers/GroceryDetailItem'
import DateValue from '../../../Helpers/Utils'

export default class GroceryListItem extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {IsEditable : false,
                      ItemName : this.props.ItemDetail.ItemName,
                      Quantity:this.props.ItemDetail.Quantity}
        this.MakeEditableHandler = this.MakeEditable.bind(this);
        this.MakeNonEditableHandler = this.MakeNonEditable.bind(this);
        this.inputChangedHandler = this.inputChanged.bind(this);
        this.SaveFunctionHandler = this.SaveFunction.bind(this);
        this.DropdownChangeHandler = this.DropdownChange.bind(this);
    }
    MakeEditable(){
        this.setState({
            IsEditable : true
        });
    }
    MakeNonEditable(){
        this.setState((state,props) => ({
            IsEditable : false,
            ItemName:props.ItemDetail.ItemName,
            Quantity:props.ItemDetail.Quantity
        }));
    }
    inputChanged(event){
        const updatedValue = event.target.value;
        console.log("Inside Input Changed");
        this.setState({
            ItemName : updatedValue
        });
    }

    SaveFunction(){
        // const updatedValue = event.target.value;
        const updatedObj = new GroceryDetailItem(this.props.ItemDetail.ItemId,this.state.ItemName,this.state.Quantity,DateValue)
        this.setState({
            IsEditable : false
        });
        this.props.SaveFn(updatedObj,this.props.DispatchFn);

    }
    DropdownChange(event) {
        const quantity = event.target.value;
        //console.log(quantity);
        this.setState({
            Quantity :quantity
        });
      }
    render(){
        const itemId = this.props.ItemDetail.ItemId;
        const isEditable = this.state.IsEditable;
        // console.log("12",this.state.Quantity);
        return (
            <tr>
                <td className ="cell" >
                  {isEditable === false ? this.state.ItemName :
                  <input type="text" value={this.state.ItemName } onChange={this.inputChangedHandler} /> }
                </td>
                 <td className ="cell" >
                {isEditable === false ?this.state.Quantity : <CustomDropdown Quantity ={this.state.Quantity} 
                                                                ChangeFn={this.DropdownChangeHandler} />
                //    <FormControl>
                //         <NativeSelect
                //         value={this.state.Quantity}
                //         onChange={this.handleChangeHandler}
                //         inputProps={{
                //             name: 'Quantity',
                //             id: 'quantity-native-label-placeholder',
                //         }}>
                //         <option value={0}>0</option>
                //         <option value={1}>1</option>
                //         <option value={2}>2</option>
                //         <option value={3}>3</option>
                //         <option value={4}>4</option>
                //         <option value={5}>5</option>
                //         <option value={6}>6</option>
                //         <option value={7}>7</option>
                //         </NativeSelect>
                //     </FormControl>
                }
                </td>
                <td className ="cell" >
                   {this.props.ItemDetail.Date} 
                </td> 
                <td className ="cell">
                 {isEditable === false ? (itemId > 0 ?
                    (<span>
                    <EditIcon onClick = {this.MakeEditableHandler} ></EditIcon>
                    <DeleteIcon onClick={this.props.RemoveFn.bind(this,this.props.ItemDetail,this.props.DispatchFn)} /> 
                    </span>): '') : 
                    <span>
                     <SaveIcon onClick = {this.SaveFunctionHandler}></SaveIcon>
                     <CancelIcon onClick = {this.MakeNonEditableHandler}/> </span>}
                </td>

            </tr>
        );
    }
}