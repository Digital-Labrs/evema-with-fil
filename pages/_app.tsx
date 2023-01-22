import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';
import AppContextProvider from '../context/AppContext';
import Web3ContextProvider from '../context/Web3Context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>
      <AppContextProvider>
        <ChakraProvider>
          <Toaster position='top-right' />
          <CSSReset />
          <Component {...pageProps} />
        </ChakraProvider>
      </AppContextProvider>
    </Web3ContextProvider>
  );
}
export default MyApp;
