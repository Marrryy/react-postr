import Header from '@/component/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Postr',
  description: 'Social Anonymous App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header title={metadata.title}/>

        <main className="container mx-auto min-h-screen mx-auto pt-10">
          {children}
        </main>
        </body>
    </html>
  )
}