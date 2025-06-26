import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const soldCars = [
  {
    id: 1,
    brand: "Audi",
    model: "A3 Sportback",
    image: "/cars/sold/audi-a3-white.jpeg",
    color: "Blanco",
  },
  {
    id: 2,
    brand: "BMW",
    model: "Serie 3",
    image: "/cars/sold/bmw-serie3-grey.jpeg",
    color: "Gris",
  },
  {
    id: 3,
    brand: "Volkswagen",
    model: "Golf GTI",
    image: "/cars/sold/vw-golf-gti-black.jpeg",
    color: "Negro",
  },
  {
    id: 4,
    brand: "Audi",
    model: "A1",
    image: "/cars/sold/audi-a1-white.jpeg",
    color: "Blanco",
  },
  {
    id: 5,
    brand: "Volkswagen",
    model: "T-Roc",
    image: "/cars/sold/vw-troc-white.jpeg",
    color: "Blanco",
  },
  {
    id: 6,
    brand: "Volkswagen",
    model: "Caddy",
    image: "/cars/sold/vw-caddy-red.jpeg",
    color: "Rojo",
  },
  {
    id: 7,
    brand: "Volkswagen",
    model: "Golf GTD",
    image: "/cars/sold/vw-golf-gtd-white.jpeg",
    color: "Blanco",
  },
  {
    id: 8,
    brand: "Volkswagen",
    model: "Golf R-Line",
    image: "/cars/sold/vw-golf-rline-grey.jpeg",
    color: "Gris",
  },
  {
    id: 9,
    brand: "Volkswagen",
    model: "Caddy Comercial",
    image: "/cars/sold/vw-caddy-commercial.jpeg",
    color: "Blanco",
  },
  {
    id: 10,
    brand: "Audi",
    model: "A5 Coupé",
    image: "/cars/sold/audi-a5-grey.jpeg",
    color: "Gris",
  },
]

export function SoldCars() {
  return (
    <div className="w-full py-8 md:py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Vehículos vendidos</h2>
            <p className="max-w-[900px] text-gray-500 text-sm md:text-base lg:text-lg">
              Algunos de los vehículos que hemos vendido recientemente. ¡Gracias por confiar en APR Cars!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {soldCars.map((car) => (
            <Card key={car.id} className="overflow-hidden relative group">
              <div className="relative h-[120px] sm:h-[140px] md:h-[160px]">
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-2">
                  <Badge variant="outline" className="bg-green-600 text-white border-none text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    VENDIDO
                  </Badge>
                </div>
              </div>
              <CardContent className="p-2 sm:p-3">
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm md:text-base font-bold truncate">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-xs text-gray-500">{car.color}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm md:text-base">
            ¿Buscas algo similar? Contacta con nosotros y te ayudamos a encontrar tu vehículo ideal.
          </p>
        </div>
      </div>
    </div>
  )
}
