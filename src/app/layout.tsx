'use client'
import { ThemeProvider } from '@/components/contexts/ThemeContext'
import './globals.css'
import Sidebar from '@/components/navigation/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <ThemeProvider>
        <body className='bg-white dark:bg-gray-900 transition-colors duration-300'>
          <Sidebar />
          <main className='ml-16 md:ml-64 p-4 transition-all duration-500 ease-in-out'>
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  )
}