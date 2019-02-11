import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import firebase from 'firebase/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index';



const config = {
    apiKey: "AIzaSyCNrIhMOHUhHSlEI1mg3e8ca-PHAtPoA5Y",
    authDomain: "hotel-app-17423.firebaseapp.com",
    databaseURL: "https://hotel-app-17423.firebaseio.com",
    projectId: "hotel-app-17423",
    storageBucket: "hotel-app-17423.appspot.com",
    messagingSenderId: "404852911189"
};
firebase.initializeApp(config);

const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
         <App />
    </Provider>
</BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
