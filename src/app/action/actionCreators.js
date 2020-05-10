import constants from '../Helpers/commonConstants';

const AddItemInUserGroceryList = (payload) =>{
    return {
        type:constants.ADD_USER_GROCERY_ITEM,
        payload : payload
    }
}
const IncreaseItemInUserGroceryList = (payload) =>{
    return {
        type:constants.INCREASE_USER_GROCERY_ITEM,
        payload : payload
    }
}

const DecreaseItemInUserGroceryList = (payload) =>{
    return {
        type:constants.DECREASE_USER_GROCERY_ITEM,
        payload : payload
    }
}

const RemoveItemInUserGroceryList= (payload) =>{
    return {
        type:constants.REMOVE_USER_GROCERY_ITEM,
        payload : payload
    }
}



export {AddItemInUserGroceryList,RemoveItemInUserGroceryList,IncreaseItemInUserGroceryList,DecreaseItemInUserGroceryList}