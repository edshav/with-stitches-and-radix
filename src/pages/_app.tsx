import type { AppProps } from 'next/app';
import { IdProvider } from '@radix-ui/react-id';
import { globalStyles } from 'styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
}
export default MyApp;
