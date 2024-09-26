import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Props from './components/Props.jsx'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>

);

