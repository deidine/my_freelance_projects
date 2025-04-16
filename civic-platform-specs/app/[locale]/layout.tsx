import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProviderClient } from "@/i18n/client"
import { locales } from "@/i18n/config"
import { getI18n } from "@/i18n/server"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getI18n()

  return {
    title: t("common.siteTitle"),
    description: t("common.siteDescription"),
  }
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} suppressHydrationWarning dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
        </ThemeProvider>
      </body>
    </html>
  )
}
