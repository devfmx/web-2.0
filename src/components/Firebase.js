import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCEAsgB_mjUHNFZ2-E3E-gDN5mDkGwGxs4",
    authDomain: "devfkiller.firebaseapp.com",
    databaseURL: "https://devfkiller.firebaseio.com",
    projectId: "devfkiller",
    storageBucket: "devfkiller.appspot.com",
    messagingSenderId: "702222687539"
};



export default  firebase.initializeApp(config);