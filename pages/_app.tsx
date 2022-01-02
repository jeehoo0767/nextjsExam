import { AppProps } from 'next/app';
import 'styles/_palette.scss';
import 'styles/init.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
