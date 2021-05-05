let myArray = ["Cokelat", 42.5, 22, true, "Programing"];
console.log(myArray);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
// console.log(myArray[5]);
// console.log("Panjang nilai myArray adalah" +myArray.length);

//push command -- insert data pada array
// myArray.push('JavaScript');
// console.log(myArray);

//mengeluarkan data dan elemen terahir array POP command
// myArray.pop();
// console.log(myArray);

//shift -unshift
// myArray.shift();
// myArray.unshift("Apple");
// console.log(myArray);

//delete
delete myArray[1];
console.log(myArray);

//splice
myArray.splice(2,1);
console.log(myArray);


//spread operator
console.log("spread Operator");
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(favorites);

// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);

console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];

console.log(allFavorites);

// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const others = ["Cake", "Pie", "Donut"];

// const allFavorites = [...favorites, ...others];

console.log(allFavorites);

const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

