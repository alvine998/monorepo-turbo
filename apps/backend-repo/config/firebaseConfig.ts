import * as admin from 'firebase-admin';
import * as path from 'path';

// Load the service account key JSON file
const serviceAccountPath = path.resolve(__dirname, './firebase-service-account.json');

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountPath),
});

const db = admin.firestore();
export { db, admin };