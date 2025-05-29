import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const similarCars = [
  {
    id: 2,
    brand: "BMW",
    model: "Serie 5",
    year: 2022,
    price: 42500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14817089135002.jpg-YslLnPQ23dW7K5x57zYzWNp4XpeFuZ.jpeg",
    km: 22000,
    fuel: "Gasolina",
    transmission: "Automático",
    externalLink: "https://www.coches.net/bmw-serie-5",
  },
  {
    id: 3,
    brand: "Audi",
    model: "A4",
    year: 2023,
    price: 44200,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/audi_a4_2016_berlina_5768_1.jpg-YixbbLzknbGWh4QYIiEGb8TBGO5oVE.jpeg",
    km: 18000,
    fuel: "Híbrido",
    transmission: "Automático",
    externalLink: "https://www.coches.net/audi-a4",
  },
  {
    id: 11,
    brand: "Lexus",
    model: "IS",
    year: 2022,
    price: 43800,
    image: "/cars/lexus-is.jpg",
    km: 20000,
    fuel: "Híbrido",
    transmission: "Automático",
    externalLink: "https://www.coches.net/lexus-is",
  },
]

export function SimilarCars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {similarCars.map((car) => (
        <Card key={car.id} className="overflow-hidden">
          <div className="relative h-[200px]">
            <Image
              src={car.image || "/placeholder.svg"}
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">
                  {car.brand} {car.model}
                </h3>
                <p className="text-gray-500">{car.year}</p>
              </div>
              <Badge variant="outline" className="bg-red-600 text-white border-none">
                {car.price.toLocaleString("es-ES")} €
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium">Kilometraje:</span> {car.km.toLocaleString("es-ES")} km
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Combustible:</span> {car.fuel}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Transmisión:</span> {car.transmission}
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Link href={`/inventario/${car.id}`} passHref>
              <Button variant="outline">Ver detalles</Button>
            </Link>
            <a href={car.externalLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-red-600 hover:bg-red-700">
                coches.net
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
