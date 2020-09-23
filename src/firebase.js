import firebase from "firebase";

const fire = firebase.initializeApp({
  apiKey: "AIzaSyATI0AfqskEiMBZqOlOyKJjJ5jGHTy2l6M",
  authDomain: "clone-65eee.firebaseapp.com",
  databaseURL: "https://clone-65eee.firebaseio.com",
  projectId: "clone-65eee",
  storageBucket: "clone-65eee.appspot.com",
  messagingSenderId: "56164179377",
  appId: "1:56164179377:web:fc205b91644deb094eb190",
});

const auth = fire.auth();

export { auth };
