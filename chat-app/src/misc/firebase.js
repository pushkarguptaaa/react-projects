import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyAHOswR3rve6ZvlZ6kJDrc4O2okUkXdJCo',
  authDomain: 'chat-web-app-e9d19.firebaseapp.com',
  projectId: 'chat-web-app-e9d19',
  storageBucket: 'chat-web-app-e9d19.appspot.com',
  messagingSenderId: '406629961387',
  appId: '1:406629961387:web:dbef6295352cbf53d6b1ee',
  databaseURL:
    'https://chat-web-app-e9d19-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = firebase.initializeApp(config);
