import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import HelloTagB from './HelloTagB.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelloTagB />
  </StrictMode>,
)
