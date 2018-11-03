import React from 'react';
import ReactDOM from 'react-dom';
import List from './src/postlist/components/list';
import data from './src/api.json';

const app = document.getElementById('app');

ReactDOM.render(<List data={data}/>,app);
