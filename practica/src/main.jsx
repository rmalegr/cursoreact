/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'
// import { HelloWorldApp } from "./HelloWorldApp";
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={15} />
  </React.StrictMode>
)
