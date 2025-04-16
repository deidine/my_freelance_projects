export const defaultLocale = "fr"
export const locales = ["fr", "ar"]

export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  ar: "العربية",
}

export const isRTL = (locale: Locale) => {
  return locale === "ar"
}
