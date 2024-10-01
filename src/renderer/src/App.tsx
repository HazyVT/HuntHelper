import '../assets/app.css'
import { Box } from '@chakra-ui/react'

function App(): JSX.Element {
  return (
    <Box w="100vw" h="100vh" bgColor="background.main">
      <Box w="100vw" h={8} bgColor="background.main" className="titlebar"></Box>
    </Box>
  )
}

export default App
