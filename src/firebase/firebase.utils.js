import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyCzbv2ljbrLE7Kfo9KZ6jvHhGzzUpv1Haw',
	authDomain: 'crwn-clothing-44ea0.firebaseapp.com',
	projectId: 'crwn-clothing-44ea0',
	storageBucket: 'crwn-clothing-44ea0.appspot.com',
	messagingSenderId: '662557147391',
	appId: '1:662557147391:web:25f66ff985e7ff913b0cca',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
