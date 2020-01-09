import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB4oSQFfMGqHJTrw0JtAyih42xo9SjmKa0",
    authDomain: "expensify-ddebe.firebaseapp.com",
    databaseURL: "https://expensify-ddebe.firebaseio.com",
    projectId: "expensify-ddebe",
    storageBucket: "expensify-ddebe.appspot.com",
    messagingSenderId: "671585449440",
    appId: "1:671585449440:web:f90b606c0e014562cfa785",
    measurementId: "G-3Q736YRS7S"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    name: "Vaibhav Singh",
    age: 22,
    stressLevel: 7,
    job: {
        title: "Software Developer",
        company: "Google"
    },
    location: {
        city: 'Bangalore',
        country: 'India'
    }
}).then(() => {
    console.log("data saved ");

}).catch((err) => {
    console.log("This failed");

});

database.ref().update({
    stressLevel: 9,
    "job/company": "Amazon",
    "location/city": "Gurugram"
})