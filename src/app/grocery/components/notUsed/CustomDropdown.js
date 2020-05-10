import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

class CustomDropdown extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {Quantity:this.props.Quantity}
    //     this.handleChangeHandler = this.handleChange.bind(this);
    // }
    // handleChange(event) {
    //     console.log(event.target);
    //     const quantity = event.target.Quantity;
    //     this.setState({
    //         Quantity :quantity
    //     });
    //   };
    render(){
        return(
            <FormControl>
                        <NativeSelect
                        value={this.props.Quantity}
                        onChange={this.props.ChangeFn.bind(this)}
                        inputProps={{
                            name: 'Quantity',
                            id: 'quantity-native-label-placeholder',
                        }}>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        </NativeSelect>
                    </FormControl>
        );
    }
}

export default CustomDropdown;