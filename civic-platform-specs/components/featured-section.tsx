import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturedSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#C26A2D] pb-1 mb-4 md:mb-0">À LA UNE</h2>
          <Link href="#" className="text-sm text-[#2D7D9C] hover:underline">
            Voir toutes les actualités
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">L'Atlas de la solidarité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Map of solidarity initiatives"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Une cartographie des acteurs de la solidarité entre la Mauritanie et l'Europe, pour mieux se connecter.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Voir l'Atlas de la solidarité
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Formations en plaidoyer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Advocacy training session"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Réalisation de deux formations en capitalisation et en plaidoyer, pour les organisations de la société
                civile en Mauritanie.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                S'inscrire à la formation
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Prix AILEM 2025</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="AILEM Prize announcement"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Prix du jeune entrepreneur local en Méditerranée. Consultez les conditions et postulez avant le 15 mai
                2025.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Candidater au prix
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
