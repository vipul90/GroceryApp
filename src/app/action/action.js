import constants from '../Helpers/commonConstants';
import initialState from '../state/initialState';
import UserGroceryItem from '../Helpers/UserGroceryItem';
import DateValue from '../Helpers/Utils';

function GroceryDetails(state =initialState , action ){
const {type, payload} = action;
    switch(type){
        case constants.ADD_USER_GROCERY_ITEM :
            payload.Id = state.CurrentItemId + 1;
            return { 
                ...state,
                userGroceryItems: [...state.userGroceryItems, payload],
                CurrentItemId : state.CurrentItemId + 1
            }
        case constants.REMOVE_USER_GROCERY_ITEM :
            return { 
                ...state,
                userGroceryItems: state.userGroceryItems.filter(x=>x.Id !== payload.Id)
            }
        case constants.DECREASE_USER_GROCERY_ITEM :
        return { 
            ...state,
            userGroceryItems: state.userGroceryItems.map(item =>{
                if(item.Id === payload.Id){
                    var newObj = new UserGroceryItem(item.Id, item.ItemId,DateValue,item.Quantity - 1,item.Price);
                    return newObj;
                } else{
                    return item;
                }
            })
        }
        case constants.INCREASE_USER_GROCERY_ITEM :
            
            return { 
                ...state,
                userGroceryItems: state.userGroceryItems.map(item =>{
                    if(item.Id === payload.Id){
                        var newObj = new UserGroceryItem(item.Id, item.ItemId,DateValue,item.Quantity + 1,item.Price);
                        return newObj;
                    } else{
                        return item;
                    }
                })
            }
        default:
        return state;
    }
}

export default GroceryDetails;