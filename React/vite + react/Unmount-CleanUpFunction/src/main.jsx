import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CompHandle from './CompHandle.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <CompHandle />
    <App />
  </>,
)
