 
 import { Button } from "./ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useTranslation } from "react-i18next";
 

export function LanguageSwitcher() {
  const { t , i18n} = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="flex items-center gap-1">
          <Globe className="h-5 w-5" />
          <span className="sr-only">{t("common.language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(i18n.languages).map(([localeKey, localeName]) => (
          <DropdownMenuItem
            key={localeKey}
            className={i18n.language === localeKey ? "bg-accent text-accent-foreground" : ""}
            onClick={() =>  i18n.changeLanguage(localeKey)}
          >
            {localeName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
