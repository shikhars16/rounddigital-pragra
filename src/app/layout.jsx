import { RootLayout } from '@/components/RootLayout'
import Head from 'next/head';
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Studio',
    default: 'RoundDigital',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full  text-base antialiased">
    <Head>
    <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
    </Head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
