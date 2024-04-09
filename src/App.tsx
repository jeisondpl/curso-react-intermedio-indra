import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './styles/theme'
import Routers from './routers'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
