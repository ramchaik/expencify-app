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

// empty the database
// database.ref().set({});
/*
    To DO:
     -- fetch the data from firebase
*/

database.ref("expenses")
    .on("child_removed", (snapshot) => {
        const expenses = [];

        snapshot.forEach(childSnapshot => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log("removed successful ?", expenses);
    })

database.ref("expenses")
    .on("child_changed", (snapshot) => {
        const expenses = [];

        snapshot.forEach(childSnapshot => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log("change successful ?",expenses);
    })

database.ref("expenses")
    .on("child_added", (snapshot) => {
        const expenses = [];

        snapshot.forEach(childSnapshot => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log("added a child successful ?",expenses, " where child is : ", snapshot.val());
    })