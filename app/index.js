import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import firstreducer from './reducers';
import incrementbytwo from './reducers/incrementbytwo';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

var ReactDOM = require('react-dom');
var FirstContainer = require('./containers/FirstContainer');


const store = createStore(combineReducers({
  dennis: firstreducer,
  alice: incrementbytwo
}), (
  typeof window.devToolsExtension === 'function' ?
  window.devToolsExtension() : undefined
));

ReactDOM.render((
  <Provider store={store}>
    <div>
      Hello World!
      <FirstContainer name="dennis" style={{ marginTop: '10px' }} />
      <FirstContainer name="alice" />
    </div>
  </Provider>
), document.getElementById('app'));
