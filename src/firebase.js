import {getStorage} from 'firebase/storage'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZo-Ub8fKVuOfYstxVoYhT236iH_3pRbk",
  authDomain: "modeluploads-1e0a4.firebaseapp.com",
  projectId: "modeluploads-1e0a4",
  storageBucket: "modeluploads-1e0a4.appspot.com",
  messagingSenderId: "940124087195",
  appId: "1:940124087195:web:c873a74fee6179f1a6373e",
  measurementId: "G-JJYKQE8WHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);