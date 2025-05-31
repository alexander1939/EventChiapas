import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/styles/style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./assets/styles/contact.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
