import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SkeletonTheme
      baseColor="#FFF3DA"
      highlightColor="#f5d58c"
      duration={2}
    >
      <App />
    </SkeletonTheme>
  </StrictMode>,
)
