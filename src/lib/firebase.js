import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyCVArx6jYE41IOB83By8jpyranET22GG9A",
    authDomain: "instagram-app-clone-36294.firebaseapp.com",
    projectId: "instagram-app-clone-36294",
    storageBucket: "instagram-app-clone-36294.appspot.com",
    messagingSenderId: "413455101304",
    appId: "1:413455101304:web:2c68b586779e1488b96c8d"  

}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore

seedDatabase(firebase);

export { firebase, FieldValue };