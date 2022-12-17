import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import 'src/styles/globals.css'

const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    mono: "Poppins, sans-serif",
  },
  colors: {
    highlight: "#FFBA08",
    highlight50: "#FFBA08", // Como podemos botar o 50% em HEX ???
    dark: {
      black: "#000000",
      headtext: "#47585B",
      info: "#999999",
      info50: "#999999", // Como podemos botar o 50% em HEX ???
    },
    light: {
      white: "#FFFFFF",
      headtext: "#F5F8FA",
      info: "#DADADA",
    },
  },
})

export default function App({ Component, pageProps }: AppProps)
{
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
