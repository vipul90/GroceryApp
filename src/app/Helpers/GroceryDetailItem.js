class GroceryDetailItem {
    constructor(itemId , itemName, quantity, date,price,productMeasuremnetUnit,imageName){
        this.ItemId= itemId;
        this.ItemName = itemName;
        this.Quantity = quantity;
        // this.Date = date;
        this.Price = price;
        this.ProductMeasuremnetUnit = productMeasuremnetUnit;
        this.ImageName = imageName;
    }
    // get ItemName(){
    //     return this.ItemName;
    // }
    // set ItemName(value){
    //     this.ItemName = value;
    // }

    // get Quantity(){
    //     return this.Quantity;
    // }
    // set Quantity(value){
    //     this.Quantity = value;
    // }

    // get Date(){
    //     return this.Date;
    // }
    // set Date(value){
    //     this.Date = value;
    // }
}

export default GroceryDetailItem;