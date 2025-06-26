import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export const metadata: Metadata = {
  title: "Inventario | APR Cars",
  description:
    "Explora nuestro inventario de vehículos de alta calidad. Encuentra el coche perfecto para ti entre nuestra amplia selección.",
}

const cars = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    model: "Clase C",
    year: 2023,
    price: 45900,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mercedes-C-Class-2015-C01-OC7w4oOpGQCunWZyFRZK7UV8jDaOD8.webp",
    km: 15000,
    fuel: "Diésel",
    transmission: "Automático",
    externalLink: "https://www.coches.net/mercedes-benz-clase-c",
  },
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
    image: "/cars/audi-a4-new.jpg",
    km: 18000,
    fuel: "Híbrido",
    transmission: "Automático",
    externalLink: "https://www.coches.net/audi-a4",
  },
  {
    id: 4,
    brand: "Volkswagen",
    model: "Golf",
    year: 2022,
    price: 28500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Volkswagen-Golf-2017-1.jpg-771zvjQayGqYZNOFzV5toIo6wtKX0W.jpeg",
    km: 25000,
    fuel: "Gasolina",
    transmission: "Manual",
    externalLink: "https://www.coches.net/volkswagen-golf",
  },
  {
    id: 5,
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    price: 26900,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toyota-Corolla-2017-1.jpeg-UrLa24BqeMdu2Xp0MJJGpK3LqHkX7K.webp",
    km: 12000,
    fuel: "Híbrido",
    transmission: "Automático",
    externalLink: "https://www.coches.net/toyota-corolla",
  },
  {
    id: 6,
    brand: "Audi",
    model: "A6 Avant",
    year: 2022,
    price: 54500,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga-sLbhZN6kQ2C8EcFy3N9gkSfNlhPF3s.jpeg",
    km: 28000,
    fuel: "Diésel",
    transmission: "Automático",
    externalLink: "https://www.coches.net/audi-a6",
  },
  {
    id: 7,
    brand: "Ford",
    model: "Focus",
    year: 2021,
    price: 22800,
    image: "/cars/ford-focus.jpg",
    km: 35000,
    fuel: "Gasolina",
    transmission: "Manual",
    externalLink: "https://www.coches.net/ford-focus",
  },
  {
    id: 8,
    brand: "Renault",
    model: "Megane",
    year: 2022,
    price: 23500,
    image: "/cars/renault-megane.jpg",
    km: 30000,
    fuel: "Diésel",
    transmission: "Manual",
    externalLink: "https://www.coches.net/renault-megane",
  },
  {
    id: 9,
    brand: "Peugeot",
    model: "308",
    year: 2023,
    price: 25900,
    image: "/cars/peugeot-308.jpg",
    km: 18000,
    fuel: "Gasolina",
    transmission: "Automático",
    externalLink: "https://www.coches.net/peugeot-308",
  },
  {
    id: 10,
    brand: "Hyundai",
    model: "Tucson",
    year: 2022,
    price: 29800,
    image: "/cars/hyundai-tucson.jpg",
    km: 22000,
    fuel: "Híbrido",
    transmission: "Automático",
    externalLink: "https://www.coches.net/hyundai-tucson",
  },
  {
    id: 11,
    brand: "Kia",
    model: "Sportage",
    year: 2023,
    price: 31200,
    image: "/cars/kia-sportage.jpg",
    km: 15000,
    fuel: "Híbrido",
    transmission: "Automático",
    externalLink: "https://www.coches.net/kia-sportage",
  },
  {
    id: 12,
    brand: "Mazda",
    model: "CX-5",
    year: 2022,
    price: 32500,
    image: "/cars/mazda-cx5.jpg",
    km: 20000,
    fuel: "Gasolina",
    transmission: "Automático",
    externalLink: "https://www.coches.net/mazda-cx-5",
  },
]

export default function InventoryPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Filtros</h2>
            <Filter className="h-5 w-5" />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="search">Buscar</Label>
              <Input id="search" placeholder="Marca, modelo..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brand">Marca</Label>
              <Select>
                <SelectTrigger id="brand">
                  <SelectValue placeholder="Todas las marcas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las marcas</SelectItem>
                  <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="audi">Audi</SelectItem>
                  <SelectItem value="volkswagen">Volkswagen</SelectItem>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="seat">Seat</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fuel">Combustible</Label>
              <Select>
                <SelectTrigger id="fuel">
                  <SelectValue placeholder="Todos los combustibles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los combustibles</SelectItem>
                  <SelectItem value="gasoline">Gasolina</SelectItem>
                  <SelectItem value="diesel">Diésel</SelectItem>
                  <SelectItem value="hybrid">Híbrido</SelectItem>
                  <SelectItem value="electric">Eléctrico</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="transmission">Transmisión</Label>
              <Select>
                <SelectTrigger id="transmission">
                  <SelectValue placeholder="Todas las transmisiones" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las transmisiones</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                  <SelectItem value="automatic">Automático</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Precio</Label>
                <span className="text-sm text-gray-500">Hasta 50.000€</span>
              </div>
              <Slider defaultValue={[50000]} max={50000} step={1000} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Kilometraje</Label>
                <span className="text-sm text-gray-500">Hasta 100.000 km</span>
              </div>
              <Slider defaultValue={[100000]} max={100000} step={5000} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="year">Año</Label>
              <Select>
                <SelectTrigger id="year">
                  <SelectValue placeholder="Todos los años" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los años</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700">Aplicar filtros</Button>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Nuestro inventario</h1>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Label htmlFor="sort" className="whitespace-nowrap">
                Ordenar por:
              </Label>
              <Select>
                <SelectTrigger id="sort" className="w-[180px]">
                  <SelectValue placeholder="Relevancia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevancia</SelectItem>
                  <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                  <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
                  <SelectItem value="year-desc">Año: más reciente</SelectItem>
                  <SelectItem value="km-asc">Kilometraje: menor a mayor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
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
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" disabled>
                1
              </Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <Button variant="outline" size="icon">
                4
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
