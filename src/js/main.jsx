"use strict";

import insertCss from 'insert-css';
import style from '../index.styl';
import React from 'react';
import App from './components/app';

insertCss(style);
document.body.style.visibility = 'visible';

React.render(<App />, document.getElementById('app'));
