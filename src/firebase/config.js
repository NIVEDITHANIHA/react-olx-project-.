import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth';
import 'firebase/firestore';
import  'firebase/compat/storage';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCcD8Jjo7wzTYO5CAa-JpqpgIPLG08PPy4",
  authDomain: "olx--com.firebaseapp.com",
  databaseURL: "https://olx--com-default-rtdb.firebaseio.com",
  projectId: "olx--com",
  storageBucket: "olx--com.appspot.com",
  messagingSenderId: "313015095751",
  appId: "1:313015095751:web:b815e08d02a7475da5c9e2",
  measurementId: "G-L8DE1KERCY"
};


 export default firebase.initializeApp(firebaseConfig);
 

