import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: 'AIzaSyClemue2ZPCfN-ATvMLZDkE5LsQsUFPu1M',
//   authDomain: 'blog-ba06f.firebaseapp.com',
//   projectId: 'blog-ba06f',
//   storageBucket: 'blog-ba06f.appspot.com',
//   messagingSenderId: '1060058645135',
//   appId: '1:1060058645135:web:453a3187fd0bebdec2a6fa'
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FB,
  authDomain: import.meta.env.VITE_DOMAIN_FB,
  projectId: import.meta.env.VITE_PROJECTID_FB,
  storageBucket: import.meta.env.VITE_BUCKET_FB,
  messagingSenderId: import.meta.env.VITE_SENDERID_FB,
  appId: import.meta.env.VITE_APPID_FB
};

export const app = initializeApp(firebaseConfig);
