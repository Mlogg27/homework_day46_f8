import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeaderHomePage from './components/Header/HeaderHomePage.jsx'
import HFContent1 from './components/FeatureContent/HFeatureContent1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderHomePage />
    <HFContent1/>
  </StrictMode>,
)
