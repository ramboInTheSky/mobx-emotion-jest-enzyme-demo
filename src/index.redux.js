import React from 'react'
import {render} from 'react-dom'
//redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
//my reducers
import {rootReducer} from './reducers'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const middleware = [ thunk ]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = applyMiddleware(...middleware)(createStore)(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render( 
    <Provider store={store}>
        <App/> 
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker()