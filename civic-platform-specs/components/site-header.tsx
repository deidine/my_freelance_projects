import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getI18n } from "@/i18n/server"

export async function SiteHeader() {
  const t = await getI18n()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="rounded" />
            <span className="text-lg font-bold">{t("common.siteTitle")}</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            {t("navigation.projects")}
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            {t("navigation.resources")}
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            {t("navigation.events")}
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            {t("navigation.about")}
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            {t("navigation.contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            {t("common.newsletter")}
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">{t("common.menu")}</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
