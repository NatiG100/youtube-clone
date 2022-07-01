import { ThemeProvider } from '@emotion/react';
import '../styles/globals.css'
import { darkTheme } from '../theme';
import Layout from './../Components/Layout';

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
