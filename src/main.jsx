import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ThemeProvider } from './styles/ThemeProvider.jsx'
import 'react-loading-skeleton/dist/skeleton.css'
import './styles/index.css'
import App from './App.jsx'

const savedTheme = localStorage.getItem("theme")
const isDarkTheme = savedTheme !== "light"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <SkeletonTheme
        baseColor={isDarkTheme ? "#FFF3DA" : "#FFF3DA"}
        highlightColor={isDarkTheme ? "#f5d58c" : "#f5d58c"}
        duration={2}
      >
        <App />
      </SkeletonTheme>
    </ThemeProvider>
  </StrictMode>,
)
