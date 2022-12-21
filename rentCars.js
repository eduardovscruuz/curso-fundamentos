class Car{
    constructor(model, plate, year, color, mileage, daily_value, observation) {
        this.model = model;
        this.plate = plate;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.daily_value = daily_value;
        this.observation = observation;
    }
}
class Sport extends Car{
    constructor(model, plate, year, color, mileage, daily_value, observation, time, improvements) {
        super(model, plate, year, color, mileage, daily_value, observation);
        this.time = time;
        this.improvements = improvements
    }
}
class Utilitary extends Car{
    constructor(model, plate, year, color, mileage, daily_value, observation, passanger_capacity, trunk_capacity, miles_per_gallon) {
        super(model, plate, year, color, mileage, daily_value, observation);
        this.passanger_capacity = passanger_capacity;
        this.trunk_capacity = trunk_capacity;
        this.miles_per_gallon = miles_per_gallon;
    }
}

class Reservation {
    constructor(client_cpf, status, start_date, end_date) {
        this.client_cpf = client_cpf;
        this.status = status;
        this.start_date = start_date;
        this.end_date = end_date;
    }
}

class specialOffer{
    constructor(tittle, description, expiration_date){
        this.tittle = tittle
        this.description = description
        this.expiration_date = expiration_date
    }
}

class Person {
    constructor(name, cpf, email, phone, address){
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}
class Employee extends Person {
    constructor(name, cpf, email, phone, address, age, hiring_date, salary, reservations_this_mounth = 0, status = false) {
        super(name, cpf, email, phone, address);
        this.age = age;
        this.hiring_date = hiring_date;
        this.salary = salary;
        this.reservations_this_mounth = reservations_this_mounth;
        this.status = status;
    }
}
class Client extends Person {
    constructor(name, cpf, email, phone, address, birth_date, driverLicense_number, driverLicense_picture, driverLicense_expiration){
        super(name, cpf, email, phone, address)
        this.birth_date = birth_date
        this.driverLicense_number = driverLicense_number
        this.driverLicense_picture = driverLicense_picture
        this.driverLicense_expiration = driverLicense_expiration
    }
} 