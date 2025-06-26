"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacta con nosotros</h1>
            <p className="text-xl text-gray-600">Estamos aquí para ayudarte con todas tus necesidades automotrices</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Información de contacto */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Ubicación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Calle Principal 123
                    <br />
                    15001 A Coruña
                    <br />
                    Galicia, España
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    Teléfono
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">+34 981 123 456</p>
                  <Button
                    className="mt-2 bg-green-600 hover:bg-green-700"
                    onClick={() => window.open("https://wa.me/34981123456", "_blank")}
                  >
                    WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-600 break-words break-all">andresvazquezdelrio@gmail.com</p>
                  </div>
                  <Button
                    size="sm"
                    className="flex-shrink-0"
                    onClick={() =>
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=andresvazquezdelrio@gmail.com",
                        "_blank",
                      )
                    }
                  >
                    Gmail
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Horarios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>Lunes - Viernes:</strong> 9:00 - 19:00
                    </p>
                    <p>
                      <strong>Sábados:</strong> 9:00 - 14:00
                    </p>
                    <p>
                      <strong>Domingos:</strong> Cerrado
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mapa */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Encuéntranos</CardTitle>
                  <CardDescription>Visítanos en nuestras instalaciones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Mapa de ubicación</p>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full">Ver en Google Maps</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
