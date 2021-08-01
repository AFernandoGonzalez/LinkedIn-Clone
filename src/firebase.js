import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDiK9UBnwxcPXyaiYCLD7OyuWGOz4B6R3Q",
    authDomain: "linkedin-clone-yt-55e2a.firebaseapp.com",
    projectId: "linkedin-clone-yt-55e2a",
    storageBucket: "linkedin-clone-yt-55e2a.appspot.com",
    messagingSenderId: "914241862766",
    appId: "1:914241862766:web:c6e435d287d14836bffa7f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
