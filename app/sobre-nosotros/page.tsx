import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, Users, Clock, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Sobre Nosotros | APR Cars",
  description:
    "Conoce más sobre APR Cars, tu sitio web para encontrar el vehículo que mejor se adapta a tus necesidades.",
}

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col items-center text-center space-y-4 mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter">Sobre APR Cars</h1>
        <p className="max-w-[700px] text-gray-500 text-sm md:text-base lg:text-xl">
          Conoce más sobre nosotros, nuestra historia y nuestro compromiso con la calidad.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[250px] md:max-w-[300px]">
            <Image
              src="/images/apr-cars-logo.png"
              alt="Logo de APR Cars"
              width={600}
              height={400}
              className="rounded-lg"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Nuestra historia</h2>
          <p className="text-gray-500 text-sm md:text-base">
            APR Cars nació en 2025 de la mano de Andrés Vázquez, un apasionado del mundo del automóvil con varios años
            de experiencia en el sector. Lo que comenzó como un pequeño negocio con apenas 5 vehículos, se está
            convirtirndo en un sitio web emergente para obtener tu coche ideal según las premisas que prefieras.
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            A lo largo de estos años, hemos crecido manteniendo siempre nuestra filosofía inicial: ofrecer vehículos de
            calidad con las mejores condiciones y un servicio personalizado a cada cliente. Nuestra pasión por los
            coches y nuestro compromiso con la satisfacción del cliente nos han permitido crecer y consolidarnos en el
            mercado.
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            Hoy, APR Cars es sinónimo de confianza, calidad y servicio. Seguimos trabajando cada día para mejorar y
            ofrecer a nuestros clientes la mejor experiencia posible en la compra de su vehículo.
          </p>
        </div>
      </div>

      <Separator className="my-8 md:my-12" />

      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Nuestros valores</h2>
        <p className="max-w-[700px] mx-auto text-gray-500 text-sm md:text-base lg:text-lg">
          En APR Cars nos guiamos por unos valores fundamentales que definen nuestra forma de trabajar y relacionarnos
          con nuestros clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
        <Card>
          <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-red-100 flex items-center justify-center mb-3 md:mb-4">
              <Award className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Calidad</h3>
            <p className="text-gray-500 text-sm md:text-base">
              Seleccionamos cuidadosamente cada vehículo para garantizar su calidad y buen estado.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-red-100 flex items-center justify-center mb-3 md:mb-4">
              <Users className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Confianza</h3>
            <p className="text-gray-500 text-sm md:text-base">
              Construimos relaciones de confianza con nuestros clientes basadas en la transparencia y la honestidad.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-red-100 flex items-center justify-center mb-3 md:mb-4">
              <Clock className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Compromiso</h3>
            <p className="text-gray-500 text-sm md:text-base">
              Nos comprometemos a ofrecer el mejor servicio y las mejores condiciones a nuestros clientes.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-red-100 flex items-center justify-center mb-3 md:mb-4">
              <ThumbsUp className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Satisfacción</h3>
            <p className="text-gray-500 text-sm md:text-base">
              Trabajamos para que cada cliente quede plenamente satisfecho con su compra y servicio.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">¿Listo para encontrar tu próximo vehículo?</h2>
        <p className="max-w-[700px] mx-auto text-gray-500 text-sm md:text-base lg:text-lg mb-4 md:mb-6">
          Explora nuestro inventario de vehículos de alta calidad o contacta con nosotros para recibir asesoramiento
          personalizado.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          <Link href="/contacto" passHref>
            <Button size="lg" variant="outline" className="text-sm md:text-base">
              Contactar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
