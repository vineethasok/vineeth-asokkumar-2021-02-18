import '../styles/globals.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="body-container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
