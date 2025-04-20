import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Calendar, MapPin } from "lucide-react"

export function EventsSection() {
  const events = [
    {
      id: 1,
      title: "Forum des Jeunes Vétérinaires",
      dateRange: "10 - 12 Juin",
      description:
        "Rencontres et ateliers autour des enjeux de la médecine vétérinaire en Mauritanie. Un événement organisé par le RJVM.",
      location: "Nouakchott",
      image: "/images/event-forum.jpg",
    },
    {
      id: 2,
      title: "Campagne de vaccination animale",
      dateRange: "5 - 20 Mai",
      description:
        "Mobilisation des jeunes vétérinaires pour une campagne de vaccination dans les zones rurales du Trarza.",
      location: "Rosso, Boutilimit",
      image: "/images/event-vaccination.jpg",
    },
    {
      id: 3,
      title: "Webinaire : Zoonoses et prévention",
      dateRange: "28 Avril",
      description:
        "Formation en ligne sur les zoonoses, animée par des experts locaux et internationaux en santé publique vétérinaire.",
      location: "En ligne",
      image: "/images/event-webinar.jpg",
    },
    {
      id: 4,
      title: "Atelier sur l'entrepreneuriat vétérinaire",
      dateRange: "22 - 23 Mai",
      description:
        "Un atelier pratique pour accompagner les jeunes vétérinaires dans le développement de leurs projets professionnels.",
      location: "Nouakchott",
      image: "/images/event-atelier.jpg",
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
            Voir l'agenda complet
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="flex overflow-hidden">
              <div className="hidden sm:block w-1/3 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover h-full w-full"
                />
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
