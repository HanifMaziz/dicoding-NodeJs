// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

// const firstName = process.argv[2];
// const lastName = process.argv[3];

// console.log(`Hello ${firstName} ${lastName}`);


//require module
const coffee = require('./lib/coffee');

console.log(coffee);


//require user 
const { firstName, lastName } = require('./user');
 
 
console.log(firstName);
console.log(lastName);

// Mengimpor core module http
const http = require('http'); 


//install npm moment
const moment = require('moment');

const date  = moment().format("MMM Do YY");
console.log(date);