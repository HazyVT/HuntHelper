import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    text: {
      main: '#ece4ea'
    },
    background: {
      main: '#150f14',
      50: '#f4f0f4',
      100: '#eae1e8',
      200: '#d5c3d2',
      300: '#c0a5bb',
      400: '#aa88a5',
      500: '#956a8e',
      600: '#775572',
      700: '#5a3f55',
      800: '#3c2a39',
      900: '#1e151c'
    },
    primary: {
      main: '#c8b0c2',
      50: '#f5f0f3',
      100: '#eae1e8',
      200: '#d5c3d1',
      300: '#c0a5b9',
      400: '#ab87a2',
      500: '#96698b',
      600: '#78546f',
      700: '#5a3f53',
      800: '#3c2a38',
      900: '#1e151c'
    },
    secondary: {
      main: '#604443',
      50: '#f5f0f0',
      100: '#eae1e1',
      200: '#d5c3c3',
      300: '#c0a6a5',
      400: '#ab8887',
      500: '#966a69',
      600: '#785554',
      700: '#5a403f',
      800: '#3c2a2a',
      900: '#1e1515'
    },
    accent: {
      main: '#a08476',
      50: '#f5f1f0',
      100: '#eae4e1',
      200: '#d5c9c3',
      300: '#c0aea5',
      400: '#ab9387',
      500: '#967869',
      600: '#786054',
      700: '#5a483f',
      800: '#3c302a',
      900: '#1e1815'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
