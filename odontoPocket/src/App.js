import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {

        firebase.initializeApp({
            apiKey: "AIzaSyDy1BrMSGBfkvR6xaDktaxiJz87Xh8Bbi8",
            authDomain: "odontopocket-xrqsqq.firebaseapp.com",
            databaseURL: "https://odontopocket-xrqsqq.firebaseio.com",
            projectId: "odontopocket-xrqsqq",
            storageBucket: "odontopocket-xrqsqq.appspot.com",
            messagingSenderId: "831822096337",
            appId: "1:831822096337:android:b39c6160286fb64b"
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;

