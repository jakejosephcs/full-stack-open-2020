import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const persons = [
  { name: 'Arto Hellas' }
]

ReactDOM.render(
  <React.StrictMode>
    <App persons={persons}/>
  </React.StrictMode>,
  document.getElementById('root')
);