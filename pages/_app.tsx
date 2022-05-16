import '../styles/globals.css'
import '../components/Header.module.scss'
import '../components/Main.css'
import '../components/Useful.css'
import '../components/mgcontainer.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
