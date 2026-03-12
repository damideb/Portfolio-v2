import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { PostHogProvider } from "./providers"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Adebowale Damilola | Frontend Developer',
  description: 'Frontend developer specializing in React.js and full-stack applications. Building digital products that are functional and beautiful.',
  icons: {
   
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <PostHogProvider>
        <body className={`font-sans antialiased`}>
          {children}
         
        </body>
      </PostHogProvider>
    </html>
  );
}
