import { useTranslation } from "react-i18next";

export  function WelcomeBanner() {
  const { t , i18n} = useTranslation();

  return (
    <div className="bg-[#C26A2D]/80 text-white py-4 text-center" dir={i18n.language==='ar' ? "rtl" : "ltr"}>
      <div className="container">
        <p className="text-lg"> 
        Bienvenue sur notre plateforme
        </p>
      </div>
    </div>
  )
}
