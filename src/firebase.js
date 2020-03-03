import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCWnlGWRjrQQUj64M_1MrvWJ373hxDARNc",
  authDomain: "lunch-rush-135d6.firebaseapp.com",
  databaseURL: "https://lunch-rush-135d6.firebaseio.com",
  projectId: "lunch-rush-135d6",
  storageBucket: "lunch-rush-135d6.appspot.com",
  messagingSenderId: "628978118145",
  appId: "1:628978118145:web:f9ced97cf755bf83399a00",
  measurementId: "G-ZZ8NDM3CFW"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
