import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Car, CreditCard, Shield, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Servicios | APR Cars",
  description:
    "Descubre los servicios que ofrecemos en APR Cars: venta de vehículos, financiación, garantía y servicio postventa.",
}

export default function ServicesPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col items-center text-center space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros servicios</h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl">
          En APR Cars ofrecemos una amplia gama de servicios para que tu experiencia sea completa y satisfactoria.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card id="venta" className="overflow-hidden">
          <div className="relative h-40">
            <Image src="/placeholder.svg?height=300&width=500" alt="Venta de vehículos" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <Car className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Venta de vehículos</h2>
            <p className="text-gray-500 mb-4">
              Amplia selección de vehículos nuevos y de ocasión de las mejores marcas con todas las garantías.
            </p>
            <Link href="/inventario" passHref>
              <Button variant="link" className="p-0 h-auto text-red-600 hover:text-red-700">
                Ver inventario
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card id="financiacion" className="overflow-hidden">
          <div className="relative h-40">
            <Image src="/placeholder.svg?height=300&width=500" alt="Financiación" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Financiación</h2>
            <p className="text-gray-500 mb-4">
              Opciones de financiación personalizadas para adaptarse a tus necesidades y posibilidades.
            </p>
            <Link href="/contacto" passHref>
              <Button variant="link" className="p-0 h-auto text-red-600 hover:text-red-700">
                Solicitar información
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card id="garantia" className="overflow-hidden">
          <div className="relative h-40">
            <Image src="/placeholder.svg?height=300&width=500" alt="Garantía" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Garantía</h2>
            <p className="text-gray-500 mb-4">
              Todos nuestros vehículos incluyen garantía para que puedas disfrutar de tu compra con total tranquilidad.
            </p>
            <Link href="/contacto" passHref>
              <Button variant="link" className="p-0 h-auto text-red-600 hover:text-red-700">
                Más información
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card id="postventa" className="overflow-hidden">
          <div className="relative h-40">
            <Image src="/placeholder.svg?height=300&width=500" alt="Servicio postventa" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <Wrench className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Servicio postventa</h2>
            <p className="text-gray-500 mb-4">
              Servicio técnico especializado para el mantenimiento y reparación de tu vehículo.
            </p>
            <Link href="/contacto" passHref>
              <Button variant="link" className="p-0 h-auto text-red-600 hover:text-red-700">
                Solicitar cita
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Detalles de nuestros servicios</h2>

        <Tabs defaultValue="venta" className="w-full">
          <TabsList className="w-full grid grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="venta">Venta de vehículos</TabsTrigger>
            <TabsTrigger value="financiacion">Financiación</TabsTrigger>
            <TabsTrigger value="garantia">Garantía</TabsTrigger>
            <TabsTrigger value="postventa">Servicio postventa</TabsTrigger>
          </TabsList>
          <TabsContent value="venta" className="p-6 border rounded-b-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Venta de vehículos</h3>
                <p className="text-gray-500 mb-4">
                  En APR Cars disponemos de una amplia selección de vehículos nuevos y de ocasión de las mejores marcas
                  del mercado. Todos nuestros vehículos pasan por exhaustivos controles de calidad para garantizar su
                  perfecto estado.
                </p>
                <p className="text-gray-500 mb-4">
                  Nuestro equipo de asesores comerciales te ayudará a encontrar el vehículo que mejor se adapte a tus
                  necesidades y presupuesto, ofreciéndote un asesoramiento personalizado y profesional.
                </p>
                <p className="text-gray-500 mb-6">
                  Además, te ofrecemos la posibilidad de realizar una prueba de conducción para que puedas comprobar por
                  ti mismo las prestaciones y características del vehículo antes de tomar tu decisión.
                </p>
                <Link href="/inventario" passHref>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Ver inventario
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Venta de vehículos"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="financiacion" className="p-6 border rounded-b-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Financiación</h3>
                <p className="text-gray-500 mb-4">
                  En APR Cars te ofrecemos diferentes opciones de financiación para que puedas adquirir tu vehículo de
                  la forma que mejor se adapte a tus necesidades y posibilidades.
                </p>
                <p className="text-gray-500 mb-4">
                  Trabajamos con las principales entidades financieras para ofrecerte las mejores condiciones del
                  mercado, con tipos de interés competitivos y plazos de amortización flexibles.
                </p>
                <p className="text-gray-500 mb-4">
                  Nuestros asesores financieros te ayudarán a elegir la opción que mejor se adapte a tu situación,
                  explicándote de forma clara y transparente todas las condiciones de la financiación.
                </p>
                <p className="text-gray-500 mb-6">
                  Además, te ofrecemos la posibilidad de incluir en la financiación servicios adicionales como seguros,
                  mantenimiento o garantías extendidas.
                </p>
                <Link href="/contacto" passHref>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Solicitar información
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Financiación"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="garantia" className="p-6 border rounded-b-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Garantía</h3>
                <p className="text-gray-500 mb-4">
                  En APR Cars todos nuestros vehículos incluyen garantía para que puedas disfrutar de tu compra con
                  total tranquilidad.
                </p>
                <p className="text-gray-500 mb-4">
                  Los vehículos nuevos incluyen la garantía oficial del fabricante, que generalmente cubre cualquier
                  defecto de fabricación durante un periodo de 2 años sin límite de kilometraje.
                </p>
                <p className="text-gray-500 mb-4">
                  Los vehículos de ocasión incluyen una garantía mínima de 1 año o 15.000 km, ampliable según el modelo
                  y antigüedad del vehículo.
                </p>
                <p className="text-gray-500 mb-6">
                  Además, te ofrecemos la posibilidad de contratar garantías extendidas para ampliar la cobertura de tu
                  vehículo y disfrutar de una mayor tranquilidad.
                </p>
                <Link href="/contacto" passHref>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Más información
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Garantía"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="postventa" className="p-6 border rounded-b-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Servicio postventa</h3>
                <p className="text-gray-500 mb-4">
                  En APR Cars disponemos de un servicio técnico especializado para el mantenimiento y reparación de tu
                  vehículo, con profesionales altamente cualificados y las últimas tecnologías.
                </p>
                <p className="text-gray-500 mb-4">
                  Realizamos todo tipo de operaciones de mantenimiento y reparación, utilizando siempre recambios
                  originales o de calidad equivalente para garantizar el perfecto funcionamiento de tu vehículo.
                </p>
                <p className="text-gray-500 mb-4">
                  Además, te ofrecemos servicios adicionales como recogida y entrega a domicilio, vehículo de
                  sustitución, lavado del vehículo, etc.
                </p>
                <p className="text-gray-500 mb-6">
                  Nuestro objetivo es ofrecerte un servicio integral para que puedas disfrutar de tu vehículo con total
                  tranquilidad y sin preocupaciones.
                </p>
                <Link href="/contacto" passHref>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Solicitar cita
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Servicio postventa"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Necesitas más información?</h2>
        <p className="max-w-[700px] mx-auto text-gray-500 md:text-lg mb-6">
          Nuestro equipo está a tu disposición para resolver cualquier duda o consulta sobre nuestros servicios.
        </p>
        <Link href="/contacto" passHref>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Contactar
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
