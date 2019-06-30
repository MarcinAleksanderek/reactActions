import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducer'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { addComment } from './actions';
import { createLogger } from 'redux-logger';
import DevTools from './DevTools';


/*
const logger = createLogger();
const store = createStore(
	reducer,
	applyMiddleware(logger)
);*/

const store = createStore(
	reducer,
	DevTools.instrument()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
