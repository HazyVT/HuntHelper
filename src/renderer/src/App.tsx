import '../assets/app.css'
import { Box } from '@chakra-ui/react'
import Titlebar from './components/Titlebar'
import Sidebar from './components/Sidebar'

function App(): JSX.Element {
  return (
    <Box w="100vw" h="100vh" bgColor="background.900">
      <Titlebar />
    </Box>
  )
}

export default App
