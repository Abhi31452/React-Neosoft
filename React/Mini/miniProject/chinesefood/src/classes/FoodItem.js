

export class FoodItem{
    constructor(
        _id = 0,
        name = '',
        description = '',
        category ='',
        price=0 ,
        quantity_in_stock=0,
        image_url = "",
        rating =0,
        is_available = 0
    ){
        this._id =_id;
        this.name=name;
        this.description=description;
        this.category=category;
        this.price=price ;
        this.quantity_in_stock = quantity_in_stock;
        this.image_url = image_url;
        this.rating = rating;
        this.is_available= is_available;
    }
}