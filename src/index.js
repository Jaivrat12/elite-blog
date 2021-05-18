import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(

    <React.StrictMode>
      	<App />
    </React.StrictMode>,
    document.getElementById('root')
);

const DB_URL = 'http://localhost:8000/blogs/';
export default DB_URL;