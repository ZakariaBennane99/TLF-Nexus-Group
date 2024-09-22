

import './globals.css'
import DashedLines from '../../components/DashedLines';
import { Oswald, Montserrat, Roboto } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core'
import ScrollToTopButton from '../../components/ScrollToTopButton';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const oswald = Oswald({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  variable: '--font-oswald',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat', 
  display: 'swap', 
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto', 
  display: 'swap',
})


export const metadata = {
  title: 'TLF Nexus Group',
  description: 'TLF Nexus Group is a premier service provider specializing in law enforcement support, project management, and staffing. We deliver tailored services to counties, cities, private companies, and NGOs, ensuring top-tier professionalism and results.',
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} ${oswald.variable}`}>
        <div className='content'>
          {children}
        </div>
        <DashedLines />
        <ScrollToTopButton />
      </body>
    </html>
  )
}