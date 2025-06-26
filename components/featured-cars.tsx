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
    image: "/cars/audi-q2-front.png",
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
    price: 15700,
    image: "/cars/audi-a3-sportback.jpg", // Pendiente de imagen
    km: 172000,
    fuel: "Diésel",
    transmission: "Manual",
    power: 150,
    externalLink:
      "https://wallapop.com/item/audi-a3-sportback-2-0-tdi-1117233223?utm_medium=AppShare&utm_source=ShareItem",
  },
  {
    id: 3,
    brand: "Mercedes-Benz",
    model: "Clase C",
    year: 2023,
    price: 45900,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mercedes-C-Class-2015-C01-OC7w4oOpGQCunWZyFRZK7UV8jDaOD8.webp",
    km: 15000,
    fuel: "Diésel",
    transmission: "Automático",
    power: 194,
    externalLink: "https://wallapop.com/search?keywords=mercedes%20clase%20c",
  },
  {
    id: 4,
    brand: "BMW",
    model: "Serie 5",
    year: 2022,
    price: 42500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14817089135002.jpg-YslLnPQ23dW7K5x57zYzWNp4XpeFuZ.jpeg",
    km: 22000,
    fuel: "Gasolina",
    transmission: "Automático",
    power: 245,
    externalLink: "https://wallapop.com/search?keywords=bmw%20serie%205",
  },
  {
    id: 5,
    brand: "Volkswagen",
    model: "Golf",
    year: 2022,
    price: 28500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Volkswagen-Golf-2017-1.jpg-771zvjQayGqYZNOFzV5toIo6wtKX0W.jpeg",
    km: 25000,
    fuel: "Gasolina",
    transmission: "Manual",
    power: 150,
    externalLink: "https://wallapop.com/search?keywords=volkswagen%20golf",
  },
  {
    id: 6,
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    price: 26900,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toyota-Corolla-2017-1.jpeg-UrLa24BqeMdu2Xp0MJJGpK3LqHkX7K.webp",
    km: 12000,
    fuel: "Híbrido",
    transmission: "Automático",
    power: 122,
    externalLink: "https://wallapop.com/search?keywords=toyota%20corolla",
  },
]

export function FeaturedCars() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
      {featuredCars.map((car) => (
        <Card key={car.id} className="overflow-hidden">
          <div className="relative h-[180px] sm:h-[200px]">
            <Image
              src={car.image || "/placeholder.svg"}
              alt={`${car.brand} ${car.model}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <CardContent className="p-3 sm:p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-base sm:text-xl font-bold">
                  {car.brand} {car.model}
                </h3>
                <p className="text-gray-500 text-sm">{car.year}</p>
              </div>
              <Badge variant="outline" className="bg-red-600 text-white border-none text-xs sm:text-sm">
                {car.price.toLocaleString("es-ES")} €
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-1 sm:gap-2 mt-3 sm:mt-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="font-medium">Kilometraje:</span> {car.km.toLocaleString("es-ES")} km
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="font-medium">Combustible:</span> {car.fuel}
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="font-medium">Transmisión:</span> {car.transmission}
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="font-medium">Potencia:</span> {car.power} CV
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-3 sm:p-4 pt-0 flex flex-col sm:flex-row gap-2 sm:justify-between">
            <Link href={`/inventario/${car.id}`} passHref className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto text-sm">
                Ver detalles
              </Button>
            </Link>
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
