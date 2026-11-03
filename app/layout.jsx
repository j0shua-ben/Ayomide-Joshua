import './globals.css'
import './hero-clean.css'

export const metadata = {
  title: 'Ayomide Joshua — Shopify & E-commerce Growth',
  description: 'Shopify management, conversion rate optimization, store optimization and e-commerce growth support for ambitious brands.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
