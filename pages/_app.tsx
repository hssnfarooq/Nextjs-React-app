import Head from 'next/head';
// import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useState, useEffect } from 'react';
import { NextPage } from 'next';
import { userService } from '../app/services';
import { useRouter } from 'next/router';
import publicPaths from '../app/constants/publicPages';
// import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  useEffect(() => {
    //  import("bootstrap/dist/js/bootstrap");
    // run auth check on initial load
    authCheck(router.asPath);

    // set authorized to false to hide page content while changing routes
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // run auth check on route change
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, [router.asPath]);

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    // const publicPaths = ['/login'];
    setTimeout(() => {
      const path = url.split('?')[0];
      console.log('first', path);
      console.log('second', router.asPath);
      // console.log("userService.userValue", userService.userValue)
      if (!userService.userValue && !publicPaths.includes(path)) {
        setAuthorized(false);
        router.push({
          pathname: '/login',
          query: { returnUrl: '/' },
          // query: { returnUrl: router.asPath }
        });
      } else {
        setAuthorized(true);
      }
    }, 0);
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* <div className='container'> */}
      {authorized && getLayout(<Component {...pageProps} />)}
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
      {/* </div> */}
    </>
  );
}

export default MyApp;
