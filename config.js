import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCw7qV3djNsE0cRtcwSYvdDykeQ9saB6JI",
  authDomain: "wireless-buzzer-7a44e.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-7a44e-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-7a44e",
  storageBucket: "wireless-buzzer-7a44e.appspot.com",
  messagingSenderId: "291185733404",
  appId: "1:291185733404:web:48e79e839a887a8a8814d9"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.database();