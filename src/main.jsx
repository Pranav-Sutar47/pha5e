import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LanguageState from './context/LanguageState'

createRoot(document.getElementById('root')).render(
  <LanguageState>
    <App />
  </LanguageState>,
)
