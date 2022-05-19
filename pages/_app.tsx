import '../styles/globals.css'
import '../components/Header/Header.module.scss'
import '../components/Main/Main.module.scss'
import '../components/Useful/Useful.css'
import '../components/mgcontainer/mgcontainer.module.scss'
import '../components/PlayBtn/PlayBtn.module.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
