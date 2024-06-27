import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Globals } from './Globals.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Globals>
      <App />
    </Globals>
  </React.StrictMode>,
)
