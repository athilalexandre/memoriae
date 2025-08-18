import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, Firestore, collection, addDoc, doc, getDoc, getDocs, updateDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore';
import { getStorage, FirebaseStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);
const storage: FirebaseStorage = getStorage(app);

export { app, auth, db, storage };

// Types
export interface Experience {
  id: string;
  message: string;
  title: string;
  musicUrl: string;
  photos: string[];
  backgroundPhotos?: string[];
  createdAt: Date;
  createdBy: string;
  layout: string;
}

// Authentication functions
export const signInAdmin = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signOutAdmin = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Firestore functions
export const createExperience = async (experience: Omit<Experience, 'id' | 'createdAt'>): Promise<string> => {
  const docRef = await addDoc(collection(db, 'experiences'), {
    ...experience,
    createdAt: new Date(),
  });
  return docRef.id;
};

export const getExperience = async (id: string): Promise<Experience | null> => {
  const docRef = doc(db, 'experiences', id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Experience;
  }
  return null;
};

export const getAllExperiences = async (): Promise<Experience[]> => {
  const q = query(collection(db, 'experiences'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Experience[];
};

export const updateExperience = async (id: string, updates: Partial<Experience>): Promise<void> => {
  const docRef = doc(db, 'experiences', id);
  await updateDoc(docRef, updates);
};

export const deleteExperience = async (id: string): Promise<void> => {
  const docRef = doc(db, 'experiences', id);
  await deleteDoc(docRef);
};

// Storage functions
export const uploadPhoto = async (file: File): Promise<string> => {
  const storageRef = ref(storage, `photos/${Date.now()}_${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

export const deletePhoto = async (photoUrl: string): Promise<void> => {
  const photoRef = ref(storage, photoUrl);
  await deleteObject(photoRef);
}; 