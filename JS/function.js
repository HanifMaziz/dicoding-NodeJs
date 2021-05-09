// function greeting(){
//     console.log("HI");
// }

// greeting();

// function greeting1(name, language){
//  if(language==="english"){
//     console.log(`Good Morning ${name}!`);
// } else if (language === "French") {
//     console.log(`Bonjour ${name}!`);
// } else {
//     console.log(`Selamat Pagi ${name}!`);
// }
// }

// greeting1("Hanif", "French");

// function multiply(a, b) {
//     return a * b;
// }

// let result = multiply(10, 2)
// console.log(result)

// //memanfaatkan destructurisasi object
// const user = {
//     id: 24,
//     displayName : 'kren',
//     fullName : 'kylo bren',
// };

// function introduce({displayName,fullName}){
// console.log(`${displayName} is ${fullName}`);
// };

// introduce(user);

// //rest parameter
// function sum(...numbers) {
//     let result = 0;
//     for (let number of numbers){
//         result += number;
//     }
//     return result;

// }

// console.log(sum(1,2,3,4,5));

// //arrow function
// const sayName = name => {
//     console.log(`Name saya adalah ${name}`);
// }

// sayName('Hanif');

// const sayHello =()=>{
//     console.log("Selamat pagi semua");
// }

// sayHello();

// const sayName1 =name =>console.log("Mantap");
// sayName1();

function minimal(a,b){
    let result=0;
    if (a<b){
        result=a;
    }
    else{
        result=b;
    }
    return result;
}

console.log(minimal(1,4));
console.log(minimal(3,2));
console.log(minimal(3,3));
console.log(minimal(1,4));

function power (a,b ){
let c = Math.pow(a,b);
return c
}

console.log(power(3, 3));

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));