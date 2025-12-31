//class: blueprint of real objects
//object: instance of class
//creating class

class Car{
    //constructor is function that helps is initial setup of class when creating its instance or object
    constructor(name,color,price,model){
        //defining properties of car
        this.name=name
        this.color=color
        this.price=price
        this.model=model
    }
}

//making instance of car class
let bmw=new Car("BMW","Blsck",600000,"M3")
let tesla=new Car("Tesla","grey",2345345,"Model 1")
//accessing property of object

console.log("name and color of bmw: ",bmw.name, bmw.color)

console.log("name and color of tesla: ",tesla.name, tesla.color)