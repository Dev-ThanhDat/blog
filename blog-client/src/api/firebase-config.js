import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FB,
  authDomain: import.meta.env.VITE_DOMAIN_FB,
  projectId: import.meta.env.VITE_PROJECTID_FB,
  storageBucket: import.meta.env.VITE_BUCKET_FB,
  messagingSenderId: import.meta.env.VITE_SENDERID_FB,
  appId: import.meta.env.VITE_APPID_FB
};

export const app = initializeApp(firebaseConfig);
