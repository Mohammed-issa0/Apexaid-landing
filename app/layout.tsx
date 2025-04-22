import type React from "react"
import "./globals.css"
import { Tajawal } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Html, Head, Main } from "next/document";
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
})

export const metadata = {
  title: "Apexaid - استعد قوتك وشبابك",
  description: "المنتج الطبيعي الأول لتعزيز القوة الجنسية والانتصاب للرجال"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
    <head>
       </head>
      <body className={`${tajawal.variable} font-tajawal`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
