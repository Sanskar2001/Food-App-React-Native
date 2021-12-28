import {initializeApp} from "./node_modules/firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdwcdvtZCa_cwArCYk7DQqD-XVOe6egL8",
  authDomain: "foodapp-a79a4.firebaseapp.com",
  projectId: "foodapp-a79a4",
  storageBucket: "foodapp-a79a4.appspot.com",
  messagingSenderId: "476242946673",
  appId: "1:476242946673:web:53eac6793774bcb84f09d0"
};
const firebaseApp=initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp);
export  {firebaseApp,db};


