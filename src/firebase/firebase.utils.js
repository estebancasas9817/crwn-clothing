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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
