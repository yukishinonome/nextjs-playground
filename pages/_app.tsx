import '../styles/global.scss'
import { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../styles/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  )
}
