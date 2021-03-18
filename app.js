let myFirstObject = {
    myFirstStringProperty: 'My property value',
    myFirstFloatProperty: 45.59,
    myFunction: function()
    {
        return this.myFirstFloatProperty / 2;
    },
    add: (a, b) => a + b,
};
console.log(myFirstObject);
console.log(myFirstObject.myFirstStringProperty);
console.log(myFirstObject.myFirstFloatProperty);
console.log(myFirstObject.myFunction());
console.log(myFirstObject.add(1, 2));
let person = {
    firstName: 'Stephen',
    lastName: 'Carter',
};
let person = {
    firstName: 'Thomas',
    lastName: 'Weir',
};
let Person = function(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dob;
    this.age = function () {
        let now = new Date();
        let years = now.getFullYear() - this.dateOfBirth.getFullYear();
        
        if (
        now.getMonth() < this.dateOfBirth.getMonth() ||
        (now.getMonth() == this.dateOfBirth.getMonth() &&
        now.getDay() < this.dateOfBirth.getDay())
        ) {
        years -= 1;
        }
        
        return years;
        };
        this.toString = () => {
            return 'Name: ${this.firstName} ${this.lastName} Age: ${this.age()}';
        };
};
let person1 = new Person('Stephen', 'Carter', new Date(1972, 11, 22));
let person2 = new Person('Arth', 'Patel', new Date(1997, 3, 5));
let person2 = new Person('Roezha', 'Zaragosa', new Date(1997, 3, 6));
console.log(person1.firstName);
console.log(person1.age());
console.log(person2.dateOfBirth);
console.log(person2.toString());
let people = [];
people.push(person1);
people.push(person2);
people.push(person3);
console.log('\nPrint all people');
people.forEach((p) => {
    console.log(p.toString());
});
people.forEach((p) => console.log(p.toString()));
console.log('\nQuery last name');
let query = people.filter((p) => {
    return p.lastName == 'Carter';
});
console.log(query[0].toString());
console.log('\nQuery last name and first name');
let query2 = people.filter(p => {
    return (p.lastName = 'Carter' && p.firstName == 'Stephen');
})

if (query2.length > 0)
{
    console.log('\nRecord found:');
    console.log(query2[0].toString());
}
else
{
    console.log('\nRecord not found');
}