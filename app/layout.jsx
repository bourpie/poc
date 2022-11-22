import './globals.css'
import { Roboto } from '@next/font/google'
import Header from '../components/layout/Header'
import Aside from '../components/layout/Aside'
import Footer from '../components/layout/Footer'
import User from '../components/layout/User'

const roboto = Roboto({
  weight: ['100','300', '400','500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={roboto.className}>
        <Header />
        <User />
        <Aside />
        <main>
          <section className='pr-5'>
            {children}
          </section>
        </main>
        <Footer />
      </body>
    </html>
  )
}
