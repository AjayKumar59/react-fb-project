import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBcLRHJ-Tk8RgScFqtbPEcnaeeba2WERT8",
  authDomain: "facebook-clone-d0df6.firebaseapp.com",
  databaseURL: "https://facebook-clone-d0df6-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-d0df6",
  storageBucket: "facebook-clone-d0df6.appspot.com",
  messagingSenderId: "401154295380",
  appId: "1:401154295380:web:ccadb692edd0c0e2810fc1",
  measurementId: "G-GQGH64WJKB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage= firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, storage }
export default db



