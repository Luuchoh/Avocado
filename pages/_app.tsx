import type { AppProps } from 'next/app'

import CartProvider from '@store/Cart'
import 'semantic-ui-css/semantic.min.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
