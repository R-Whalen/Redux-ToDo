'use client';

import Header from '@/app/components/Header'
import { ThemeProvider } from 'next-themes'
import { Footer, ToDo } from '@/app/components'
import store from '../redux/store.js'
import { Provider } from 'react-redux';

export default function Home() {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" enableSystem>
        <main className='flex flex-col justify-between min-h-screen'>
          <div>
            <Header />
            <ToDo />
          </div>
          <Footer />
        </main>
      </ThemeProvider>
    </Provider>
  )
}
