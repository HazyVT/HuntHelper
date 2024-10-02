import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const lightTheme = extendTheme({
  colors: {
    text: {
      main: '#11100d'
    },
    background: {
      main: '#fafaf9',
      50: '#f3f3f1',
      100: '#e8e8e3',
      200: '#d1d1c7',
      300: '#b9b9ac',
      400: '#a2a290',
      500: '#8b8b74',
      600: '#6f6f5d',
      700: '#535346',
      800: '#38382e',
      900: '#1c1c17'
    },
    primary: {
      main: '#989076',
      50: '#f4f3f0',
      100: '#e9e7e2',
      200: '#d3d0c5',
      300: '#bdb8a8',
      400: '#a7a18b',
      500: '#91896e',
      600: '#746e58',
      700: '#575242',
      800: '#3a372c',
      900: '#1d1b16'
    },
    secondary: {
      main: '#b3c4b1',
      50: '#f1f4f0',
      100: '#e3e9e2',
      200: '#c6d3c5',
      300: '#aabda8',
      400: '#8ea78b',
      500: '#71916e',
      600: '#5b7458',
      700: '#445742',
      800: '#2d3a2c',
      900: '#171d16'
    },
    accent: {
      main: '#96b09b',
      50: '#f0f4f1',
      100: '#e2e9e3',
      200: '#c5d3c8',
      300: '#a8bdac',
      400: '#8ba790',
      500: '#6e9175',
      600: '#58745d',
      700: '#425746',
      800: '#2c3a2f',
      900: '#161d17'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={lightTheme}>
    <App />
  </ChakraProvider>
)
