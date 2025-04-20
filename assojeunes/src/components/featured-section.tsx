import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

export function FeaturedSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#C26A2D] pb-1 mb-4 md:mb-0">
            À LA UNE
          </h2>
          <a href="#" className="text-sm text-[#2D7D9C] hover:underline">
            Voir toutes les actualités
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Lancement officiel du Réseau</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <img
                  src="/images/reseau-vet-launch.jpg"
                  alt="Lancement du réseau"
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Le Réseau des Jeunes Vétérinaires Mauritaniens a été lancé à Nouakchott avec la participation d’experts et de jeunes diplômés.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Lire l'article
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Campagne de sensibilisation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <img
                  src="/images/sensibilisation-vet.jpg"
                  alt="Sensibilisation santé animale"
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Des membres du Réseau mènent une campagne pour sensibiliser les éleveurs à la santé animale et à la prévention des zoonoses.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Voir les actions
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Programme de mentorat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <img
                  src="/images/mentorat-vet.jpg"
                  alt="Mentorat vétérinaire"
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Un nouveau programme met en relation les jeunes vétérinaires avec des professionnels chevronnés pour renforcer leurs compétences.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Participer
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
