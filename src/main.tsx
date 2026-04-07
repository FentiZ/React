import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './09.03/Task2/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)