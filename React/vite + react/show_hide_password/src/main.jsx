import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Textbox from './textbox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Textbox/>
  </StrictMode>,
)
