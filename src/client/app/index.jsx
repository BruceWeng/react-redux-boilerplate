import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';

// Redux
import { Provider } from 'react-redux';
import store from './store';

render(<Provider store={store}><App/></Provider>, document.getElementById('app'));