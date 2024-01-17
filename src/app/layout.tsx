'use-client';

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Redux-ToDo',
  description: 'An experimentation with react-redux',
  icons: {
    icon: '/todo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
