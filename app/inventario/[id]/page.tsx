import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, ExternalLink, Share2, Heart, Check, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CarGallery } from "@/components/car-gallery"
import { SimilarCars } from "@/components/similar-cars"

interface CarPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: CarPageProps): Metadata {
  // En un caso real, obtendríamos los datos del coche desde una API o base de datos
  return {
    title: `Audi Q2 Black Line | APR Cars`,
    description: `Audi Q2 Black Line 2021 con 167.000 km. Vehículo en excelente estado con todas las garantías.`,
  }
}

export default function CarPage({ params }: CarPageProps) {
  const carId = params.id

  // En un caso real, obtendríamos los datos del coche desde una API o base de datos
  const car = {
    id: carId,
    brand: "Audi",
    model: "Q2 Black Line",
    version: "35 TFSI S Tronic",
    year: 2021,
    price: 22900,
    km: 167000,
    fuel: "Gasolina",
    transmission: "Automático",
    power: 150,
    doors: 5,
    seats: 5,
    color: "Gris",
    warranty: "1 año",
    description:
      "Se vende Audi Q2 35 TFSI S Tronic (150 cv) Black line del año 2021, nacional. El vehículo se encuentra en perfecto estado. El precio incluye la transferencia, y se entrega con el mantenimiento recién hecho.",
    features: [
      "Pack Black line",
      'Llantas 19"',
      "Virtual cockpit",
      "Cámara trasera",
      "Faros de LED",
      "Sensores parking delanteros y traseros",
      "Navegador",
      "Control de velocidad",
      "Volante multifunción",
      "Manos libres bluetooth",
      "Modos de conducción",
      "Asientos deportivos",
      "Climatizador bizona",
      "Sistema de sonido premium",
      "Arranque sin llave",
    ],
    externalLink: "https://wallapop.com/item/audi-q2-black-line-1134118822?utm_medium=AppShare&utm_source=ShareItem",
  }

  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <Link
              href="/inventario"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-2"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Volver al inventario
            </Link>
            <h1 className="text-3xl font-bold">
              {car.brand} {car.model} {car.version}
            </h1>
            <p className="text-gray-500">
              {car.year} · {car.km.toLocaleString("es-ES")} km · {car.fuel} · {car.transmission}
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Compartir</span>
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Guardar</span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xl font-bold bg-red-600 text-white border-none px-4 py-2">
                {car.price.toLocaleString("es-ES")} €
              </Badge>
              <a href={car.externalLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-red-600 hover:bg-red-700">
                  Ver en Wallapop
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <CarGallery />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Tabs defaultValue="details">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="details">Detalles</TabsTrigger>
                <TabsTrigger value="features">Equipamiento</TabsTrigger>
                <TabsTrigger value="technical">Ficha técnica</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-4 border rounded-b-lg">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Descripción</h2>
                  <p>{car.description}</p>
                  <Separator />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="font-medium text-gray-500">Marca</h3>
                      <p>{car.brand}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Modelo</h3>
                      <p>{car.model}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Versión</h3>
                      <p>{car.version}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Año</h3>
                      <p>{car.year}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Kilometraje</h3>
                      <p>{car.km.toLocaleString("es-ES")} km</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Combustible</h3>
                      <p>{car.fuel}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Transmisión</h3>
                      <p>{car.transmission}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Potencia</h3>
                      <p>{car.power} CV</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Puertas</h3>
                      <p>{car.doors}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Plazas</h3>
                      <p>{car.seats}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Color</h3>
                      <p>{car.color}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Garantía</h3>
                      <p>{car.warranty}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="features" className="p-4 border rounded-b-lg">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Equipamiento</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="technical" className="p-4 border rounded-b-lg">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Ficha técnica</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-gray-500">Motor</h3>
                      <p>1.5 TFSI</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Potencia</h3>
                      <p>{car.power} CV</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Par motor</h3>
                      <p>250 Nm</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Aceleración 0-100 km/h</h3>
                      <p>8.5 segundos</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Velocidad máxima</h3>
                      <p>205 km/h</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Consumo combinado</h3>
                      <p>6.2 l/100km</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Emisiones CO2</h3>
                      <p>141 g/km</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Clasificación medioambiental</h3>
                      <p>Euro 6d</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Peso</h3>
                      <p>1.395 kg</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Dimensiones (L/A/A)</h3>
                      <p>4.191 / 1.794 / 1.508 mm</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Capacidad maletero</h3>
                      <p>405 litros</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Capacidad depósito</h3>
                      <p>50 litros</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-4 border rounded-lg">
              <h2 className="text-xl font-bold mb-4">Contactar</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span>+34 690 21 82 61</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-red-600" />
                  <span>pablo.sanchez@iesdecurtis.gal</span>
                </div>
                <Link href="/contacto" passHref>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Formulario de contacto</Button>
                </Link>
              </div>
            </div>
            <div className="bg-white p-4 border rounded-lg">
              <h2 className="text-xl font-bold mb-4">Precio</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Precio contado:</span>
                    <span className="text-xl font-bold text-red-600">{car.price.toLocaleString("es-ES")} €</span>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-center">Transferencia incluida</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Vehículos similares</h2>
          <SimilarCars />
        </div>
      </div>
    </div>
  )
}
