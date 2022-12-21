class restaurantInfo{
    
    constructor(restaurant, address, dish){
        this.restaurant = restaurant
        this.address = address
        this.dish = dish
    }
    getRestaurant(){
        return this.restaurant}

    getAddress(){
        return this.address}
        
    getDish(){
        return this.dish}
}

class Dish{
    constructor(name, description, image, price){
        this.name = name
        this.description = description
        this.image = image
        this.price = price
    }
    present(){
        console.log("Name: " + this.getName())
        console.log("Description: " + this.getDescription())
        console.log("Price: $" + this.getPrice())
    }
    getName(){
        return this.name}
        
    getDescription(){
        return this.description}
        
    getPrice(){
        return this.price}
}

const lasagna = new Dish("Lasagna", "Dish made with several layers of lasagna sheets with sauce and other ingredients, such as meats and cheese, in between the lasagna noodles", "lasagna.jpeg", 50)

const applePie = new Dish("Apple Pie", "Fruit pie in which the principal filling ingredient is apples. The earliest printed recipe is from England. Often served with whipped cream", "applepie.jpeg", 45)

const restaurant = new restaurantInfo("Bistro", "Location Avenue, 150", [lasagna, applePie])

restaurant.getDish()[1].present()
restaurant.getDish()[0].present()
