import React from "react";
import ReactDom from 'react-dom';

import App from './component/App';

const $container = document.getElementById('app-container');

ReactDom.render(<App/>, $container);