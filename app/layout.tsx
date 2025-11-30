import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "TrueSip - Coming Soon | Verify Your Drink, Protect Your Peace",
  description:
    "TrueSip uses smart technology to detect fake alcohol bottles. One scan could save your night. Join our waitlist for early access.",
  keywords: "alcohol verification, fake alcohol detection, drink safety, TrueSip",
  authors: [{ name: "TrueSip" }],
  generator: "v0.app",
  icons: {
    icon: "/images/image-removebg-preview-20-2817-29.png",
    apple: "/images/image-removebg-preview-20-2817-29.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        
      </body>
    </html>
  )
}
