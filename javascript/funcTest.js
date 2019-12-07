function aFunc(){
    return this;
}
console.log(aFunc());   // windows


var person = {
    name:"lin",
    printPerson:function(){
        return this.name;
    }
}

console.log(person.printPerson());