import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const featuredCars = [
  {
    id: 1,
    brand: "Audi",
    model: "Q2 Black Line",
    year: 2021,
    price: 22900,
    image: "/cars/audi-q2-main.webp",
    km: 167000,
    fuel: "Gasolina",
    transmission: "Automático",
    power: 150,
    externalLink: "https://wallapop.com/item/audi-q2-black-line-1134118822?utm_medium=AppShare&utm_source=ShareItem",
  },
  {
    id: 2,
    brand: "Audi",
    model: "A3 Sportback",
    year: 2017,
    price: 15500,
    image: "/cars/audi-a3-main.webp",
    km: 172000,
    fuel: "Diésel",
    transmission: "Manual",
    power: 150,
    externalLink:
      "https://wallapop.com/item/audi-a3-sportback-2-0-tdi-1117233223?utm_medium=AppShare&utm_source=ShareItem",
  },
  {
    id: 3,
    brand: "Honda",
    model: "CRF 450R",
    year: 2009,
    price: 3500,
    image: "/cars/honda-crf-1.webp",
    km: null,
    fuel: "Gasolina",
    transmission: "Manual",
    power: 450,
    type: "Motocicleta",
    externalLink: "https://es.wallapop.com/item/honda-crf-450r-matriculada-1091233555",
  },
  {
    id: 4,
    brand: "Husqvarna",
    model: "TE 300",
    year: 2016,
    price: 4900,
    image: "/cars/husqvarna-te300-1.webp",
    km: null,
    fuel: "Gasolina",
    transmission: "Manual",
    power: 300,
    type: "Motocicleta",
    hours: 180,
    externalLink: "https://es.wallapop.com/item/husqvarna-te-300-1142400219",
  },
]

export function FeaturedCars() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
      {featuredCars.map((car) => (
        <Card key={car.id} className="overflow-hidden">
          <div className="relative h-[200px] sm:h-[220px] md:h-[240px]">
            <Image
              src={car.image || "/placeholder.svg"}
              alt={`${car.brand} ${car.model}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <CardContent className="p-4 sm:p-5">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold truncate">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-gray-500 text-sm">{car.year}</p>
                  {car.type && <p className="text-red-600 text-xs font-medium mt-1">{car.type}</p>}
                </div>
                <Badge
                  variant="outline"
                  className="bg-red-600 text-white border-none text-sm font-bold px-3 py-1 ml-2 flex-shrink-0"
                >
                  {car.price.toLocaleString("es-ES")} €
                </Badge>
              </div>

              <div className="space-y-2">
                {car.km && (
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-600">Kilometraje:</span>
                    <span>{car.km.toLocaleString("es-ES")} km</span>
                  </div>
                )}
                {car.hours && (
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-600">Horas:</span>
                    <span>{car.hours}h</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-600">Combustible:</span>
                  <span>{car.fuel}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-600">Transmisión:</span>
                  <span>{car.transmission}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-600">
                    {car.type === "Motocicleta" ? "Cilindrada:" : "Potencia:"}
                  </span>
                  <span>{car.type === "Motocicleta" ? `${car.power} cc` : `${car.power} CV`}</span>
                </div>
              </div>

              {car.type === "Motocicleta" && (
                <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  {car.brand === "Honda" && (
                    <div className="space-y-1">
                      <p className="text-xs text-green-700 font-medium">✓ Válida para carnet A2</p>
                      <p className="text-xs text-green-700">✓ ITV pasada hasta 2026</p>
                    </div>
                  )}
                  {car.brand === "Husqvarna" && (
                    <div className="space-y-1">
                      <p className="text-xs text-green-700 font-medium">✓ Solo 180 horas de uso</p>
                      <p className="text-xs text-green-700">✓ ITV hasta 2026</p>
                      <p className="text-xs text-green-700">✓ Faro LED y protectores</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-4 sm:p-5 pt-0 flex flex-col sm:flex-row gap-2 sm:justify-between">
            {car.type !== "Motocicleta" ? (
              <Link href={`/inventario/${car.id}`} passHref className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto text-sm">
                  Ver detalles
                </Button>
              </Link>
            ) : (
              <div className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto text-sm" disabled>
                  Motocicleta
                </Button>
              </div>
            )}
            <a href={car.externalLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto text-sm">
                Wallapop
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
