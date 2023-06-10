import {initializeApp} from 'firebase/app';
import { getFirestore , collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNEk8vxwgxrO2Yg1fhAGFzfD0aM5j67Fs",
  authDomain: "simple-contact-form-a482f.firebaseapp.com",
  projectId: "simple-contact-form-a482f",
  storageBucket: "simple-contact-form-a482f.appspot.com",
  messagingSenderId: "934435760510",
  appId: "1:934435760510:web:bfcb877ebc01408bb2eb2f"
};

const app = initializeApp(firebaseConfig);
  
  
  const db = getFirestore(app);

  export {app,db,collection,addDoc}

// const getStorage =Storage(app);
     












