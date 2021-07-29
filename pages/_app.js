import '../styles/globals.css'
import { useRouter } from 'next/router'
import Nav from '../component/containers/nav'
import Head from 'next/head'
import { ToastProvider, useToasts } from 'react-toast-notifications';
import Footer from '../component/containers/footer'
import { FormContextProvider } from '../component/context/formcontext'
import { ProductContextProvider } from '../component/contexts/ProductContext'
import { SelectContextProvider } from '../component/contexts/SelectContext'
import { SearchContextProvider } from '../component/contexts/SearchContext'
import { ViewContextProvider } from '../component/contexts/ViewContext'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
    <ViewContextProvider>
      <FormContextProvider>
        <SearchContextProvider>
          <SelectContextProvider>
            <ProductContextProvider>
              <ToastProvider>
                {router.pathname === '/login' || router.pathname === '/' || router.pathname === '/information' || router.pathname === '/information_seller' || router.pathname === '/set_profile' ? <div /> : <Nav />}
                <Head>
                  <title>2U</title>
                  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                </Head>
                <Component {...pageProps} />
                {router.pathname === '/login' || router.pathname === '/' || router.pathname === '/information' || router.pathname === '/information_seller' || router.pathname === '/set_profile' || router.pathname === '/Admin/seller_acc' ? <div /> : <Footer />}
              </ToastProvider>
            </ProductContextProvider>
          </SelectContextProvider>
        </SearchContextProvider>
      </FormContextProvider>
      </ViewContextProvider>
    </>

  )
}

export default MyApp
