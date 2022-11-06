import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const fname = "vishal";
const currdate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
   <h1>{`my name is ${fname}` }</h1>
   <P>currdate = {currdate}</P>
   <P>currdate = {currtime}</P>
  </>,
  document.getElementById("root")
);


