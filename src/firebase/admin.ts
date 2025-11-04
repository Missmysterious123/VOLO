import "server-only";
import { initializeApp, getApps, App, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { firebaseConfig } from "./config";

// Function to safely initialize the Firebase Admin App
function initializeAdminApp(): App {
  // If an app is already initialized, return it
  if (getApps().length) {
    return getApps()[0];
  }

  // Check for service account credentials in environment variables
  if (
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY
  ) {
    const serviceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // The private key needs to be parsed correctly
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    };
    
    return initializeApp({
      credential: cert(serviceAccount),
      databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`,
    });
  }

  // Fallback for environments without service account variables
  // (e.g., local development without .env.local)
  // This will use Application Default Credentials if available
  return initializeApp({
    projectId: firebaseConfig.projectId,
    databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`,
  });
}

// Initialize the app and export the database instance
const adminApp = initializeAdminApp();
export const adminDb = getFirestore(adminApp);
