import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     }).catch((e) => {
//         console.log('Error: ', e);
//     });

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('Delete', snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('Changed', snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('Added', snapshot.key, snapshot.val());
// });

// const onArrayChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });

//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 481985190
// });

// database.ref('notes/-LGrnRfk85Pt-UXUJIVS').update({
//     body: 'Firebase'
// });

// database.ref('notes').push({
//     title: 'Tech',
//     body: 'React'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const { name, job } = snapshot.val();
//     console.log(`${name} is a ${job.title} at ${job.company}.`);
// });

// database.ref().update({
//     name: 'Damien',
//     'job/title': 'software developer',
//     'job/company': 'Google'
// });

// database.ref().set({
//     name: 'Franz Kafka',
//     age: 40,
//     stressLevel: 6,
//     job: {
//         title: 'Author',
//         company: 'Dead Poets'
//     },
//     location: {
//         city: 'Prague',
//         country: 'Czech Republic'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data: ', e);
//     });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isDead').remove()
//     .then(() => console.log('Item was removed'))
//     .catch(() => console.log('Something went wrong'));