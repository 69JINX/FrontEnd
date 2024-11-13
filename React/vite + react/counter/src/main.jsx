import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Counter from './Component/Counter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter/>
  </StrictMode>,
)
