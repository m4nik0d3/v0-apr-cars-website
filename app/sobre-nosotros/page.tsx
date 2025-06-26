import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, Users, Clock, ThumbsUp, Heart } from "lucide-react"

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
            APR Cars nace en 2022 de la mano de Andrés Vázquez, un apasionado del mundo del motor con una sólida
            trayectoria en el sector.
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            Lo que empezó como un pequeño proyecto personal ha ido creciendo hasta convertirse en una plataforma
            emergente para quienes buscan su coche ideal, con confianza y a medida.
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            Desde el primer día, hemos mantenido intacta nuestra filosofía: ofrecer vehículos de calidad, con las
            mejores condiciones y un trato cercano y personalizado. Nuestra pasión por los coches y nuestro compromiso
            con la satisfacción del cliente nos han permitido avanzar con paso firme y consolidarnos como una opción de
            confianza.
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            Hoy, APR Cars es sinónimo de calidad, compromiso y cercanía, y seguimos trabajando con ilusión para
            ofrecerte siempre la mejor experiencia en la compra de tu vehículo.
          </p>
        </div>
      </div>

      <Separator className="my-8 md:my-12" />

      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Nuestros valores</h2>
        <p className="max-w-[700px] mx-auto text-gray-500 text-sm md:text-base lg:text-lg">
          En APR Cars nos guiamos por principios que marcan cada paso que damos:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-8 md:mb-12">
        <Card>
          <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-red-100 flex items-center justify-center mb-3 md:mb-4">
              <Users className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Confianza</h3>
            <p className="text-gray-500 text-sm md:text-base">
              Transparencia en cada operación y vehículos revisados y garantizados.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-red-100 flex items-center justify-center mb-3 md:mb-4">
              <ThumbsUp className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Cercanía</h3>
            <p className="text-gray-500 text-sm md:text-base">
              Atención personalizada y adaptada a las necesidades de cada cliente.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-red-100 flex items-center justify-center mb-3 md:mb-4">
              <Award className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Calidad</h3>
            <p className="text-gray-500 text-sm md:text-base">
              Solo ofrecemos vehículos que cumplen nuestros estándares exigentes.
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
              Acompañamos al cliente antes, durante y después de la compra.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-red-100 flex items-center justify-center mb-3 md:mb-4">
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Pasión</h3>
            <p className="text-gray-500 text-sm md:text-base">Porque nos encantan los coches tanto como a ti.</p>
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
