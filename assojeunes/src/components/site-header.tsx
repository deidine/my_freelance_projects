import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "./ui/button";

 
export function SiteHeader() {
    const { t , i18n} = useTranslation();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <img src="https://assojeunes-mauritanie.org/wp-content/uploads/2024/03/gdc_logo-1.png" alt="Logo" width={40} height={40} className="rounded" />
            <span className="text-lg font-bold">{t("common.siteTitle")}</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-primary">
            {t("navigation.projects")}
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            {t("navigation.resources")}
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            {t("navigation.events")}
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            {t("navigation.about")}
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            {t("navigation.contact")}
          </a>
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
