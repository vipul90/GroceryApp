
import constants from '../../Helpers/commonConstants';
import initialState from '../../state/initialState';
import UserGroceryItem from '../../Helpers/UserGroceryItem';
import DateValue from '../../Helpers/Utils';
import GroceryDetails from '../../action/action';
import * as actionCreators from '../../action/actionCreators'
const objectToBePushed = new UserGroceryItem(-1,2, DateValue,1,200);
const addInitialItem = ()=>{
    const updatedState= {
        ...initialState,
        userGroceryItems: [...initialState.userGroceryItems, objectToBePushed],
        CurrentItemId : initialState.CurrentItemId + 1
    }

    return updatedState;
}

describe('All user Grocery Reducer', () => {
  
    let stateWithAddedItem;
    beforeEach(() => {
        stateWithAddedItem = addInitialItem();
    });

    it('Should return default state', () => {
        const newState = GroceryDetails(undefined,{});
        expect(newState).toBe(initialState);
      });
    it('Should return new state with newly added item', () => {
          const newState = GroceryDetails(initialState,actionCreators.AddItemInUserGroceryList(objectToBePushed));
          expect(newState).toEqual(stateWithAddedItem);
    });
    it('Should return new state with increased Quantity', () => {  
        const objectToBeUpdated = {Id:stateWithAddedItem.CurrentItemId};
        const newState = GroceryDetails(stateWithAddedItem,actionCreators.IncreaseItemInUserGroceryList(objectToBeUpdated));
        expect(newState.userGroceryItems.find(x=>x.Id == stateWithAddedItem.CurrentItemId).Quantity)
                        .toBe(stateWithAddedItem.userGroceryItems.find(x=>x.Id == stateWithAddedItem.CurrentItemId).Quantity + 1);
    });
    it('Should return new state with decreased Quantity', () => {
        const objectToBeUpdated = {Id:stateWithAddedItem.CurrentItemId};
        const newState = GroceryDetails(stateWithAddedItem,actionCreators.DecreaseItemInUserGroceryList(objectToBeUpdated));
        expect(newState.userGroceryItems.find(x=>x.Id == stateWithAddedItem.CurrentItemId).Quantity)
                        .toBe(stateWithAddedItem.userGroceryItems.find(x=>x.Id == stateWithAddedItem.CurrentItemId).Quantity - 1);
    });
    it('Should return new state after removing item', () => {
        const objectToBeRemoved = {Id:stateWithAddedItem.CurrentItemId};
        const newState = GroceryDetails(stateWithAddedItem,actionCreators.RemoveItemInUserGroceryList(objectToBeRemoved));
        expect(newState.userGroceryItems.length)
                        .toBe(stateWithAddedItem.userGroceryItems.length - 1);
        expect(newState.userGroceryItems.find(x=>x.Id == stateWithAddedItem.CurrentItemId)).toBe(undefined);
    });
});
