import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UNIHUB INDIA - Your Gateway to College Admissions | 10,343+ Institutions Across 28 States',
  description: 'Browse 10,343+ institutions across 28 states and UTs. Free to search, pay only when you apply. Direct college admissions for Engineering, Medical, Management, Law & more.',
  keywords: 'college admissions, universities, engineering, medical, management, law schools, india',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
