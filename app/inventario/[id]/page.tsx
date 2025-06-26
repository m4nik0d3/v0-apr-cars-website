"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CarGalleryQ2 from "@/components/car-gallery-q2"
import CarGalleryA3 from "@/components/car-gallery-a3"

// Datos de los vehículos
const vehicles = {
  "audi-q2": {
    id: "audi-q2",
    brand: "Audi",
    model: "Q2",
    year: 2019,
    price: 18500,
    mileage: 85000,
    fuel: "Gasolina",
    transmission: "Manual",
    engine: "1.0 TFSI",
    power: "116 CV",
    doors: 5,
    seats: 5,
    color: "Blanco",
    description: "Audi Q2 en excelente estado, con mantenimiento al día y todas las revisiones oficiales.",
    features: [
      "Aire acondicionado",
      "Sistema de navegación",
      "Bluetooth",
      "Cámara trasera",
      "Sensores de aparcamiento",
      "Control de crucero",
      "Faros LED",
      "Llantas de aleación",
    ],
    wallapopUrl: "https://es.wallapop.com/item/audi-q2-2019",
  },
  "audi-a3": {
    id: "audi-a3",
    brand: "Audi",
    model: "A3",
    year: 2018,
    price: 15500,
    mileage: 120000,
    fuel: "Diésel",
    transmission: "Manual",
    engine: "2.0 TDI",
    power: "150 CV",
    doors: 5,
    seats: 5,
    color: "Gris",
    description: "Audi A3 Sportback en perfecto estado, motor diésel muy económico y fiable.",
    features: [
      "Aire acondicionado automático",
      "Sistema multimedia MMI",
      "Bluetooth y USB",
      "Asientos deportivos",
      "Control de crucero",
      "Faros xenón",
      'Llantas de aleación 17"',
      "Volante multifunción",
    ],
    wallapopUrl: "https://es.wallapop.com/item/audi-a3-2018",
  },
}

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const vehicle = vehicles[params.id as keyof typeof vehicles]

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Vehículo no encontrado</h1>
          <p className="text-gray-600 mb-6">El vehículo que buscas no existe o ha sido vendido.</p>
          <Link href="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Navegación */}
          <div className="mb-6">
            <Link href="/">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Inicio
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Galería de imágenes */}
            <div>
              {vehicle.id === "audi-q2" && <CarGalleryQ2 />}
              {vehicle.id === "audi-a3" && <CarGalleryA3 />}
            </div>

            {/* Información del vehículo */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {vehicle.brand} {vehicle.model}
                </h1>
                <p className="text-xl text-gray-600 mb-4">{vehicle.year}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-blue-600">{vehicle.price.toLocaleString()}€</span>
                  <Badge variant="secondary" className="text-sm">
                    {vehicle.mileage.toLocaleString()} km
                  </Badge>
                </div>
              </div>

              {/* Especificaciones técnicas */}
              <Card>
                <CardHeader>
                  <CardTitle>Especificaciones técnicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">Combustible:</span>
                      <p className="text-gray-900">{vehicle.fuel}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Transmisión:</span>
                      <p className="text-gray-900">{vehicle.transmission}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Motor:</span>
                      <p className="text-gray-900">{vehicle.engine}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Potencia:</span>
                      <p className="text-gray-900">{vehicle.power}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Puertas:</span>
                      <p className="text-gray-900">{vehicle.doors}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Plazas:</span>
                      <p className="text-gray-900">{vehicle.seats}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Color:</span>
                      <p className="text-gray-900">{vehicle.color}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Año:</span>
                      <p className="text-gray-900">{vehicle.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Descripción */}
              <Card>
                <CardHeader>
                  <CardTitle>Descripción</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{vehicle.description}</p>
                </CardContent>
              </Card>

              {/* Equipamiento */}
              <Card>
                <CardHeader>
                  <CardTitle>Equipamiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Botón de contacto */}
              <div className="space-y-4">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                  onClick={() => window.open(vehicle.wallapopUrl, "_blank")}
                >
                  Ver en Wallapop
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-lg py-6"
                  onClick={() => window.open("https://wa.me/34981123456", "_blank")}
                >
                  Contactar por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
