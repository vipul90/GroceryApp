import GroceryDetailItem from '../Helpers/GroceryDetailItem'
import DateValue from '../Helpers/Utils'
import {Almonds,Apple,Bread,Cucumber,Flour,Grapes,Guava,Lichi,Mangoes,Milk,Mushrooms,Onion,Pomegranate,
    Sanitizer,Sugar,VegetableOil} from '../grocery/shared/import-images/file'

const initialState = {
    error: null,
    availableGroceryList:[
        new GroceryDetailItem(1,'Almonds',10,DateValue,80.50,'200 gm',Almonds),
        new GroceryDetailItem(2,'Apple',5,DateValue,400,'2 Kg',Apple),
        new GroceryDetailItem(14,'Hand Sanitizer',2,DateValue,750,'2 l',Sanitizer),
        new GroceryDetailItem(3,'Bread',4,DateValue,30,'200 gm',Bread),
        new GroceryDetailItem(4,'Cucumber',5,DateValue,40,'1 Kg',Cucumber),
        new GroceryDetailItem(5,'Ashirvaad Atta',2,DateValue,310,'10 Kg',Flour),
        new GroceryDetailItem(6,'Grapes',8,DateValue,140,'500 gm',Grapes),
        new GroceryDetailItem(7,'Guava',10,DateValue,280,'3 Kg',Guava),
        new GroceryDetailItem(8,'Lichi',12,DateValue,370,'2 Kg',Lichi),
        new GroceryDetailItem(9,'Mangoes',5,DateValue,700,'5 Kg',Mangoes),
        new GroceryDetailItem(10,'Milk',20,DateValue,80,'1 l',Milk),
        new GroceryDetailItem(11,'Mushrooms',15,DateValue,42,'200 gm',Mushrooms),
        new GroceryDetailItem(12,'Onion',15,DateValue,60,'3 Kg',Onion),
        new GroceryDetailItem(13,'Pomegranate',5,DateValue,900,'5 Kg',Pomegranate),
        new GroceryDetailItem(15,'Sugar',25,DateValue,65,'1 Kg',Sugar),
        new GroceryDetailItem(16,'Vegetable Oil',5,DateValue,215,'2 l',VegetableOil)
    ],
    userGroceryItems: [],
    CurrentItemId:0
  };

  export default initialState;