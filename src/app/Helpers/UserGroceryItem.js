class UserGroceryItem {
    constructor(id, itemId ,date,quantity,price,productMeasuremnetUnit){
        this.Id = id;
        this.ItemId= itemId;
        this.Date = date;
        this.Price = price;
        this.ProductMeasuremnetUnit = productMeasuremnetUnit;
        this.Quantity = quantity;
        this.Total = (this.Quantity) * (this.Price);
        // this.ItemName = itemName;
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

export default UserGroceryItem;