class GroceryDetailItem {
    constructor(itemId , itemName, quantity, date,price,productMeasuremnetUnit,imageName,description){
        this.ItemId= itemId;
        this.ItemName = itemName;
        this.Quantity = quantity;
        this.Price = price;
        this.ProductMeasuremnetUnit = productMeasuremnetUnit;
        this.ImageName = imageName;
        this.Description = description
    }
}

export default GroceryDetailItem;