class Vehicle {
    constructor(make, model, year, color, mileage){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.gasoline = mileage;
    }
        vehicleInfo() {
          console.log("Make: " + this.make + ", " + "Model: " + this.model + ", " + "Color: " + this.color + ", " + "Miles: " + this.mileage)
    }
}

let car = new Vehicle("Jaguar", "Turbo XE", "Black", "33000");
car.vehicleInfo();

