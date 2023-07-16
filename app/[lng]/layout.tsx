import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import Header from '@/component/header'
import { Metadata } from 'next'


export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
  title: 'Postr',
  description: 'Social Anonymous App',
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <section>{children}</section>
  )
}