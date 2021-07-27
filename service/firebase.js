import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDlhS9UAEr-slqQbunmI4LLSjHC7l2G2D0",
    authDomain: "u-store-6066c.firebaseapp.com",
    projectId: "u-store-6066c",
    storageBucket: "u-store-6066c.appspot.com",
    messagingSenderId: "403225436895",
    appId: "1:403225436895:web:bd792c4127110e53b7bf6a",
    measurementId: "G-9QQZBPPHZS"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
const firestore = firebase.firestore();
const fireStorage = firebase.storage();

export {
    firestore,
    fireStorage
}

// firebase.initializeApp(firebaseConfig);
// export default firebase;