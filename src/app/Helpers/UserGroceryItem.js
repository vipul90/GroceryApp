class UserGroceryItem {
    constructor(id, itemId ,date,quantity,price,productMeasuremnetUnit){
        this.Id = id;
        this.ItemId= itemId;
        this.Date = date;
        this.Price = price;
        this.ProductMeasuremnetUnit = productMeasuremnetUnit;
        this.Quantity = quantity;
        this.Total = (this.Quantity) * (this.Price);
    }
}

export default UserGroceryItem;