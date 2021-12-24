import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const navlinks = [
  {
    id: 1,
    text: 'Home',
    url: 'https://www.google.com/doodles'
  },
  {
    id: 2,
    text: 'About Me',
    url: 'https://www.google.com/doodles'
  },
  {
    id: 3,
    text: 'Projects',
    url: 'https://www.google.com/doodles'
  },
  {
    id: 4,
    text: 'Photography',
    url: 'https://www.google.com/doodles'
  },
  {
    id: 5,
    text: 'Contact Me',
    url: 'https://www.google.com/doodles'
  }
]

ReactDOM.render(
  <App navlinks={navlinks}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
