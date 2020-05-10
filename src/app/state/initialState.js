import GroceryDetailItem from '../Helpers/GroceryDetailItem';
import DateValue from '../Helpers/Utils';
import {Almonds,Apple,Bread,Cucumber,Flour,Grapes,Guava,Lichi,Mangoes,Milk,Mushrooms,Onion,Pomegranate,
    Sanitizer,Sugar,VegetableOil} from '../grocery/shared/import-images/file';
import ProductItemDesciption from './itemDescription';

const initialState = {
    error: null,
    availableGroceryList:[
        new GroceryDetailItem(1,'Almonds',10,DateValue,80.50,'200 gm',Almonds,ProductItemDesciption.AlmondsDesc),
        new GroceryDetailItem(2,'Apple',5,DateValue,400,'2 Kg',Apple,ProductItemDesciption.AppleDesc),
        new GroceryDetailItem(14,'Hand Sanitizer',2,DateValue,750,'2 l',Sanitizer,ProductItemDesciption.SanitizerDesc),
        new GroceryDetailItem(3,'Bread',4,DateValue,30,'200 gm',Bread,ProductItemDesciption.BreadDesc),
        new GroceryDetailItem(4,'Cucumber',5,DateValue,40,'1 Kg',Cucumber,ProductItemDesciption.CucumberDesc),
        new GroceryDetailItem(5,'Ashirvaad Atta',2,DateValue,310,'10 Kg',Flour,ProductItemDesciption.FlourDesc),
        new GroceryDetailItem(6,'Grapes',8,DateValue,140,'500 gm',Grapes,ProductItemDesciption.GrapesDesc),
        new GroceryDetailItem(7,'Guava',10,DateValue,280,'3 Kg',Guava,ProductItemDesciption.GuavaDesc),
        new GroceryDetailItem(8,'Lychee',12,DateValue,370,'2 Kg',Lichi,ProductItemDesciption.LichiDesc),
        new GroceryDetailItem(9,'Mangoes',5,DateValue,700,'5 Kg',Mangoes,ProductItemDesciption.MangoesDesc),
        new GroceryDetailItem(10,'Milk',20,DateValue,80,'1 l',Milk,ProductItemDesciption.MilkDesc),
        new GroceryDetailItem(11,'Mushrooms',15,DateValue,42,'200 gm',Mushrooms,ProductItemDesciption.MushroomsDesc),
        new GroceryDetailItem(12,'Onion',15,DateValue,60,'3 Kg',Onion,ProductItemDesciption.OnionDesc),
        new GroceryDetailItem(13,'Pomegranate',5,DateValue,900,'5 Kg',Pomegranate,ProductItemDesciption.PomegranateDesc),
        new GroceryDetailItem(15,'Sugar',25,DateValue,65,'1 Kg',Sugar,ProductItemDesciption.SugarDesc),
        new GroceryDetailItem(16,'Vegetable Oil',5,DateValue,215,'2 l',VegetableOil,ProductItemDesciption.VegetableOilDesc),
    ],
    userGroceryItems: [],
    CurrentItemId:0
  };

  export default initialState;