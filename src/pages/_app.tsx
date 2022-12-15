import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Layout from '../../components/Layout'
import 'src/styles/globals.css'
const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Layout />
    </ChakraProvider>
  )
}
