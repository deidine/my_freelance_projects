"use client"

import { useCurrentLocale, useChangeLocale } from "@/i18n/client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { localeNames } from "@/i18n/config"
import { useI18n } from "@/i18n/client"

export function LanguageSwitcher() {
  const locale = useCurrentLocale()
  const changeLocale = useChangeLocale()
  const t = useI18n()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="flex items-center gap-1">
          <Globe className="h-5 w-5" />
          <span className="sr-only">{t("common.language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(localeNames).map(([localeKey, localeName]) => (
          <DropdownMenuItem
            key={localeKey}
            className={locale === localeKey ? "bg-accent text-accent-foreground" : ""}
            onClick={() => changeLocale(localeKey)}
          >
            {localeName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
