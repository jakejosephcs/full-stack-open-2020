import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const persons = [
  { 
    name: 'Arto Hellas',
    number: '040-1234567'
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App persons={persons}/>
  </React.StrictMode>,
  document.getElementById('root')
);