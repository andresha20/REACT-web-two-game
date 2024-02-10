import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LogicContextProvider } from './providers/LogicProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LogicContextProvider>
      <App />
    </LogicContextProvider>
  </React.StrictMode>,
)
