import firebase from 'firebase'
var config = { 
  apiKey: "AIzaSyAPplaF1AaBWw47dvf-SOpD27DrrCxkNKo",
  authDomain: "survey-203e2.firebaseapp.com",
  databaseURL: "https://survey-203e2-default-rtdb.firebaseio.com",
  projectId: "survey-203e2",
  storageBucket: "survey-203e2.appspot.com",
  messagingSenderId: "260497538012",
  appId: "1:260497538012:web:260f2cae0e6b74e5ce6d19"
};
var fire = firebase.initializeApp(config);
export default fire;

