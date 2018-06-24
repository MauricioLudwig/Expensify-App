//
// Object destructuring
//

// const person = {
//     name: 'Damien',
//     age: 27,
//     location: {
//         city: 'Stockholm',
//         temp: 30
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;
// if (temperature && city) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Minas Tirith', 'Gondor', '19147'];
const [, city, state = 'Narnia'] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);