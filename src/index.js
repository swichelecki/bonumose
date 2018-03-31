import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDxvh7YQPWUN_NpYxvPZPV64ogO17uo87Y",
  authDomain: "bonumose.firebaseapp.com",
  databaseURL: "https://bonumose.firebaseio.com",
  projectId: "bonumose",
  storageBucket: "bonumose.appspot.com",
  messagingSenderId: "333345966571"
};

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
