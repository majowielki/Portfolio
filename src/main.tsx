import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/geist'
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
import 'remixicon/fonts/remixicon.css'
import './styles/global.css'
import { applyDesignSettings, loadDesignSettings } from './config/design'
import App from './App.tsx'

applyDesignSettings(loadDesignSettings())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
