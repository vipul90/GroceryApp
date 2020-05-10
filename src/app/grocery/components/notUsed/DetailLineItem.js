import React from 'react'

class DetailLineItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {itemValue : props.ItemValue};
        this.inputChangedHandler = this.inputChanged.bind(this);
    }
    inputChanged(event){
        const updatedValue = event.target.value;
        this.setState({
            itemValue : updatedValue
        });
    }
    render(){
        return (
                <div>
                    <span className="spanRightMargin">{this.props.HeaderValue}</span>
                    <input type="text" value={this.state.itemValue} onChange={this.inputChangedHandler} />
                </div>
        );
    }
}

export default DetailLineItem;