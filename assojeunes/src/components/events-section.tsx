 
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Calendar, MapPin } from "lucide-react"

export function EventsSection() {
  const events = [
    {
      id: 1,
      title: "Appel d'offre",
      dateRange: "7 Avril - 8 May",
      description:
        "Réalisation de deux formations, en capitalisation et en plaidoyer, pour les organisations de la société civile en Mauritanie.",
      location: "Nouakchott, Nouadhibou",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 2,
      title: "Prix AILEM 2025",
      dateRange: "1 Avril - 15 May",
      description:
        "Prix du jeune entrepreneur local en Méditerranée. Consultez les conditions et postulez avant le 15 mai 2025.",
      location: "Nouakchott, Nouadhibou",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 3,
      title: "Appel à projets AIMF",
      dateRange: "24 March - 11 June",
      description:
        "Une opportunité pour les collectivités locales sahéliennes. L'Association Internationale des Maires Francophones lance un appel à projets.",
      location: "Nouakchott, Nouadhibou",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 4,
      title: "Youth care for change",
      dateRange: "7 Avril - 1 July",
      description:
        "Le Care for Change est un projet cofinancé par le programme UE-Dear, impliquant les jeunes dans 12 pays pour relever les défis mondiaux.",
      location: "Nouakchott, Nouadhibou",
      image: "/placeholder.svg?height=120&width=200",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#C26A2D] pb-1 mb-4 md:mb-0">
            LES ÉVÉNEMENTS CLÉS DE L'AGENDA
          </h2>
          <a href="#" className="text-sm text-[#2D7D9C] hover:underline">
            Voir l'agenda
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="flex overflow-hidden">
              <div className="hidden sm:block w-1/3 relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title}  className="object-cover" />
              </div>
              <div className="w-full sm:w-2/3">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription className="text-xs flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {event.dateRange}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {event.location}
                  </div>
                  <Button variant="link" size="sm" className="text-[#2D7D9C] p-0 h-auto">
                    En savoir plus
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
