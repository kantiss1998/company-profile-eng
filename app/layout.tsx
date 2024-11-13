import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Kantiss',
    default: 'Kantiss - Leading manufacturer of high quality fabrics',
  }
  }

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-[#eee7f6] text-base antialiased">
      <body className="flex min-h-full flex-col">
        
      <link rel="icon" href="https://kantiss.com/id/themes/kantiss/img/logo.png" sizes="any" />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
