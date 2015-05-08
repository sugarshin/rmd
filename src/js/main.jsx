import React from 'react';
import insertCss from 'insert-css';

import App from './components/app';
import style from '../index.styl';

insertCss(style);
document.body.style.visibility = 'visible';

React.render(<App />, document.getElementById('container'));
