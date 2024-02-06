function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}
function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}
function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}

const myScooter = new Scooter(2023, 'red', 'XYZ');
const myDriver = new Driver('John Doe', 30, '5 years');
const myPickupLocation = new PickupLocation('123 Main St', 'New York');


console.log(myScooter);
console.log(myDriver);
console.log(myPickupLocation);
