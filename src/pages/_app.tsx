import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import 'swiper/css';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'blackAlpha.700',
        backgroundColor: '#f8f8f8'
      }
    }
  },
  colors: {
    bgGray: '#f8f8f8',
    white: "#ffffff"
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>学尚教育</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
)
}
