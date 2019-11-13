import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import { Router, Switch, Route, IndexRoute } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
//Add loacl storage
import { PersistGate } from 'redux-persist/integration/react'
// End Add loacl storage


import Routes from './routes';
import configureStore from './store/configureStore'

//import PrivateRoute from './auth';
//import Layout from './containers/layouts';
//import Login from './containers/login';
//import ComposeEmail from './containers/composeemail';
//import Register from './components/register';

const history = createHistory();

export default class App extends Component {
  render() {
    const { initialState } = this.props

    {/*New Add loacl storage*/}
    const { store, persistor } = configureStore(history, initialState)
    {/* Old
    const store = configureStore(history, initialState)
    End Add loacl storage */}

    return (

        <Provider store={store} key='provider'>
        {/*Add loacl storage*/}
        <PersistGate loading={null} persistor={persistor}>
        {/*End Add loacl storage*/}
              {//}<Routes history={history} store={store} />
            }
            <ConnectedRouter history={history}>
              <Routes store={store}/>
            </ConnectedRouter>
        {/*Add loacl storage*/}
        </PersistGate>
        {/*//End Add loacl storage*/}
        </Provider>
    );
  }
}
