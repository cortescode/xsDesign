import admin, { type ServiceAccount } from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import { FIREBASE_CREDENTIALS_JSON } from '$env/static/private';

// Path to your service account key JSON file

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert(JSON.parse(FIREBASE_CREDENTIALS_JSON)),
		databaseURL: "https://xsdesign-188e9.firebaseio.com"
	});
}

export const adminAuth = getAuth();


// Obtains a firebase user by id
export async function getAuthUser(uid: string) {
	try {
		const userRecord = await adminAuth.getUser(uid);
		return userRecord;
	} catch (error) {
		console.error('Error obtaining user:', error);
		return null;
	}
}


export async function verifyToken(token: string) {
	try {
		const decodedToken = await adminAuth.verifyIdToken(token);
		return decodedToken.uid;
	} catch (error) {
		console.error('Error verifying token:', error);
		return null;
	}
}

// Function to set custom claims
export async function setCustomUserClaims(uid: string, claims: object) {
	await adminAuth.setCustomUserClaims(uid, claims);
}