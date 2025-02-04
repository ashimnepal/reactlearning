import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import RouterConfigComponent from './config/Router.config.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterConfigComponent/>
  </StrictMode>,
)
