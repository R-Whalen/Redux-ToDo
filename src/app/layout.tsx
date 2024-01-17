import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from ""

export const metadata: Metadata = {
  title: 'Redux-ToDo',
  description: 'An experimentation with react-redux',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
