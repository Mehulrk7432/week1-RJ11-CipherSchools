// How to use .map(), .foreach(), .filter() , .find(), .sort()
// 1..map()

// let array =[1,2,3,4,5]
// // square of all numbers without using .map

// let newArray = [];

// for (let i = 0; i < array.length; i++) {
//     newArray[i] = array[i]*array[i];
// }
// console.log(newArray)

// using .map function
// let array = [5,10,15,20];

// function functionForMap(element){
//     return element*element;
// }
// let newArray = array.map(functionForMap)
// console.log(newArray)
// in js a function is also a js object

//function arrgument
let array = [5,10,15,20];
let newArray = array.map((element) => element*element);
console.log(newArray)

//2. for each
//return type is void
let array1 = [1,2,3,4,5,6];
array1.forEach((element, index)=>{
    console.log(element)
});

//.filter
// let array2 = [10,20,30,40,50];
//value >= 30

// approch for c++
// vector<int> v;
// for (int i = 0; i < sizeof (array)/sizeof(array[0]); i++) {
//     if (array[i] >= 30) {
// v.push_back(array[i]);
// }
// }

//approch for java
// List<Integer> list = new ArrayList<>();
// for (int i = 0; i < array.length; i++) {
// if (array[1] >= 30) {
// list.add(array[i]);}
// }

//approch for python
// list = [];
// for (i in range(0, len(array))):
// if (array[i] >=30):
// list.append(array[i])

//approch for JS
let array2 = [10,20,30,40,50];
let newArray2 = array2.filter((element) => {
    return element >= 30;
});
console.log(newArray2);

// .find
let array3 = [10,20,30,40,50];
let temp = array3.find((value) => {
    return value > 20;
});
console.log(temp);

// .sort()
let array4 = [30,20,40,50,60,111];
let sortedArray = array4.sort();
console.log(sortedArray);

//comparator functions
let array5 = [30,20,40,50,60];
let sortedArray1 = array5.sort((el1, el2) => {
    el1 = Number(el1);
    el2 = Number(el2);
    return el1 - el2;
});
console.log(sortedArray1);

//Object Destructuring
let myObject1 = {
    name1: "Alex",
    age1 :  24,
    address1 : {
        street: "Brooklyn",
        city1 : "NewYourk",
        state1 : "NY",
        country: "USA",

        passportDetails : {
            passportNumber : "ABCD12345",
        }
    },
}
let pass = myObject1.address1.passportDetails.passportNumber;
console.log(pass);

let myName = myObject1.name;
let age = myObject1.age;
console.log(myName, age)

//Array matching
//Map and set
let map = new Map();
map.set(1, "Shantanu");
map.set(2, "Alex");
console.log(map);
map.values()

let set = new Set();
set.add(1);
set.add(-1);
set.has();
let arr = [...set];
console.log(set);

//Class

class Animal {
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs, color, family, sound) {
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }
}

let animal = new Animal(4, "brown", "rodent", "Phew phew");
console.log(animal)