import './globals.css'

export const metadata = {
  title: 'Ayomide Joshua — Shopify CRO & E-commerce Growth Specialist',
  description: 'Shopify management, conversion rate optimization, store strategy and e-commerce growth support for ambitious brands.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
