import GroceryDetailItem from '../Helpers/GroceryDetailItem'
import DateValue from '../Helpers/Utils'
import {Almonds,Apple,Bread,Cucumber,Flour,Grapes,Guava,Lichi,Mangoes,Milk,Mushrooms,Onion,Pomegranate,
    Sanitizer,Sugar,VegetableOil} from '../grocery/shared/import-images/file'

const initialState = {
    error: null,
    availableGroceryList:[
        new GroceryDetailItem(1,'Paneer',2,DateValue,80.50,'200 gm',Almonds),
        new GroceryDetailItem(2,'Item 2',3,DateValue,200,'2 Kg',Apple),
        new GroceryDetailItem(3,'Item 3',4,DateValue,300,'1 l',Bread),
        new GroceryDetailItem(4,'Item 4',5,DateValue,400,'2 l',Cucumber),
        new GroceryDetailItem(5,'Item 5',5,DateValue,400,'2 l',Flour),
        new GroceryDetailItem(6,'Item 6',30,DateValue,1400,'5 Kg',Grapes),
        new GroceryDetailItem(7,'Item 7',40,DateValue,1400,'5 Kg',Guava),
        new GroceryDetailItem(8,'Item 8',10,DateValue,1400,'5 Kg',Lichi),
        new GroceryDetailItem(9,'Item 9',13,DateValue,1400,'5 Kg',Mangoes),
        new GroceryDetailItem(10,'Item 10',12,DateValue,1400,'5 Kg',Milk),
        new GroceryDetailItem(11,'Item 11',20,DateValue,1400,'5 Kg',Mushrooms),
        new GroceryDetailItem(12,'Item 12',21,DateValue,1400,'5 Kg',Onion),
        new GroceryDetailItem(13,'Item 13',23,DateValue,1400,'5 Kg',Pomegranate),
        new GroceryDetailItem(14,'Item 14',5,DateValue,1400,'5 Kg',Sanitizer),
        new GroceryDetailItem(15,'Item 15',20,DateValue,1400,'5 Kg',Sugar),
        new GroceryDetailItem(16,'Item 16',5,DateValue,1400,'5 Kg',VegetableOil)
        // new GroceryDetailItem(17,'Item 17',60,DateValue,1400,'5 Kg',Paneer),
        // new GroceryDetailItem(18,'Item 18',19,DateValue,1400,'5 Kg',Paneer),
        // new GroceryDetailItem(19,'Item 19',20,DateValue,1400,'5 Kg',Paneer),
        // new GroceryDetailItem(20,'Item 20',40,DateValue,1400,'5 Kg',Paneer),
        // new GroceryDetailItem(21,'Item 21',16,DateValue,1400,'5 Kg',Paneer),
        // new GroceryDetailItem(22,'Item 22',100,DateValue,1400,'5 Kg',Paneer),
        // new GroceryDetailItem(23,'Item 23',400,DateValue,1400,'5 Kg',Paneer),
        // new GroceryDetailItem(24,'Item 24',220,DateValue,1400,'5 Kg',Paneer),

    ],
    userGroceryItems: [],
    CurrentItemId:0
  };

  export default initialState;