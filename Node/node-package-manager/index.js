// const _ = require('lodash');// TODO
 
// const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
 
// console.log(myOddEvenArray);

let evenNumber = [];
for(let i = 1;i<=100;i++){
      if(i%2 == 0){
        evenNumber.push(i);
      }
};
console.log(evenNumber);