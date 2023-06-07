import { ThemeProvider } from '@emotion/react';
import '../styles/globals.css'
import { darkTheme } from '../theme';
import Layout from './../Components/Layout';
import {QueryClient, QueryClientProvider} from 'react-query'

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
