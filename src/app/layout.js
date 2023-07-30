// "use client"
import './globals.css'
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/LeftSidebar/Sidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Groww Assignment',
  description: 'Demo UI for the Groww Assignment',
}

/**
 * The function `RootLayout` returns a HTML layout with a navbar, sidebar, right sidebar, and children
 * components.
 * @returns a JSX element. It is a layout component that wraps the children components with an HTML
 * structure. The returned JSX element represents an HTML document with a body that includes a Navbar,
 * Sidebar, RightSidebar, and the children components.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        <Sidebar/>
        <RightSidebar/>
        {children}
        </body>
    </html>
  )
}
