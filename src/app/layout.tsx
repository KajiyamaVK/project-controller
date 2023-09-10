import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emunah-life',
  description:
    'Aqui você encontra todo o conteúdo para o seu devocional diário.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" data-theme="light">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
