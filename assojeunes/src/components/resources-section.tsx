 import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Download } from "lucide-react"

export function ResourcesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#C26A2D] pb-1 mb-4 md:mb-0">
            LES RESSOURCES CLÉS DU PROGRAMME
          </h2>
          <a href="#" className="text-sm text-[#2D7D9C] hover:underline">
            Voir toutes les ressources
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#E9E2D9]/30">
            <CardHeader>
              <CardTitle className="text-lg">Lexique de « Graines de Citoyenneté »</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Un guide complet des termes et concepts utilisés dans notre programme de citoyenneté active.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Télécharger le document
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#E9E2D9]/30">
            <CardHeader>
              <CardTitle className="text-lg">Fiches acteurs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Profils détaillés des organisations partenaires et des acteurs clés impliqués dans nos initiatives.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Télécharger le document
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
