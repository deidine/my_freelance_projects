 
export function SiteFooter() {
  return (
    <footer className="bg-[#2A6E58] text-white">
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt={`Partner logo ${i + 1}`}
                width={120}
                height={60}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/70">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="#" className="hover:text-white">
              Politique de confidentialité
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white">
              Mentions légales
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white">
              Politique de cookies
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white">
              Paramètres de cookies
            </a>
          </div>
          <p>© 2025 - Graine de Citoyenneté - 26 bis rue Marteau - 91100 Montreuil - France</p>
        </div>
      </div>
    </footer>
  )
}
