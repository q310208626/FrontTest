let person = {name:"lin",age:"25"};
console.log(person.name);
Object.defineProperty(person,"sex",{
    value:"male",
    writable:true,
    configurable:true
});
person.sex = "female";
console.log(person.name);
console.log(person.sex);
delete person.sex;
console.log(person.sex);

Object.defineProperty(person,"sex",{
    value:"male",
    writable:true,
    configurable:true
});

person.sex = "asda";
console.log(person.name);
console.log(person.sex);
