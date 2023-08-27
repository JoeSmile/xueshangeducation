import FormModal from '@/components/FormModal';
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
        bg: 'white'
      }
    }
  },
  colors: {
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
        <FormModal />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
)
}
