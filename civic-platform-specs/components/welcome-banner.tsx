import { getI18n } from "@/i18n/server"
import { getCurrentLocale } from "@/i18n/server"
import { isRTL } from "@/i18n/config"

export async function WelcomeBanner() {
  const t = await getI18n()
  const locale = getCurrentLocale()
  const rtl = isRTL(locale)

  return (
    <div className="bg-[#C26A2D]/80 text-white py-4 text-center" dir={rtl ? "rtl" : "ltr"}>
      <div className="container">
        <p className="text-lg">{t("welcome.message")}</p>
      </div>
    </div>
  )
}
