import '../assets/app.css'
import { Box } from '@chakra-ui/react'
import Titlebar from './components/Titlebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CounterPage from './router/CounterPage'
import HuntsPage from './router/HuntsPage'

function App(): JSX.Element {
  return (
    <Box w="100vw" h="100vh" bgColor="background.main">
      <Router>
        <Titlebar />
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/hunts" element={<HuntsPage />} />
        </Routes>
      </Router>
    </Box>
  )
}

export default App
