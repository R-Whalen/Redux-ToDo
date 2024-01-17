'use client';

import Header from '@/app/components/Header'
import { ThemeProvider } from 'next-themes'
import { Footer, ToDoList } from '@/app/components'

export default function Home() {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <main className='flex flex-col justify-between min-h-screen'>
          <div>
            <Header />
            <ToDoList />
          </div>
          <Footer />
        </main>
      </ThemeProvider>
    </>
  )
}
