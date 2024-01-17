import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import createRoot from 'react-dom'
import './styles/index.scss'
import App from './App'

createRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
