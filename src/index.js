import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Sanchez:400,40i', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
