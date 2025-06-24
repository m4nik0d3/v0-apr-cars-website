import Link from "next/link"
import { ChevronRight, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CarouselHero } from "@/components/carousel-hero"
import { FeaturedCars } from "@/components/featured-cars"
import { SoldCars } from "@/components/sold-cars"
import { BrandLogos } from "@/components/brand-logos"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter">
                  Descubre tu próximo vehículo en APR Cars
                </h1>
                <p className="max-w-[600px] text-gray-300 text-sm md:text-base lg:text-xl">
                  Ofrecemos una amplia selección de vehículos de calidad con las mejores condiciones del mercado.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contacto" passHref>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-sm md:text-base">
                    Contactar
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <CarouselHero />
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Vehículos en stock</h2>
              <p className="max-w-[900px] text-gray-500 text-sm md:text-base lg:text-lg">
                Descubre nuestra selección de vehículos premium con las mejores condiciones.
              </p>
            </div>
          </div>
          <FeaturedCars />
        </div>
      </section>

      <SoldCars />

      <BrandLogos />

      <section className="w-full py-8 md:py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">¿Por qué elegirnos?</h2>
              <p className="max-w-[900px] text-gray-500 text-sm md:text-base lg:text-lg">
                En APR Cars nos comprometemos a ofrecerte el mejor servicio y las mejores condiciones.
              </p>
            </div>
            <ul className="grid gap-4 md:gap-6 max-w-2xl">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-sm md:text-base">
                  1
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg md:text-xl font-bold">Amplia selección</h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    Disponemos de una gran variedad de vehículos para todos los gustos y necesidades.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-sm md:text-base">
                  2
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg md:text-xl font-bold">Garantía de calidad</h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    Todos nuestros vehículos pasan por exhaustivos controles de calidad.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-sm md:text-base">
                  3
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg md:text-xl font-bold">Atención personalizada</h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    Te asesoramos de forma individual para encontrar el vehículo perfecto para ti.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col items-center gap-2 text-center">
              <Phone className="h-8 w-8 md:h-10 md:w-10 text-red-500" />
              <h3 className="text-lg md:text-xl font-bold">Llámanos</h3>
              <a
                href="https://wa.me/34690218261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm md:text-base"
              >
                <span>+34 690 21 82 61</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                  className="inline-block ml-1"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Contacta por WhatsApp</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Mail className="h-8 w-8 md:h-10 md:w-10 text-red-500" />
              <h3 className="text-lg md:text-xl font-bold">Escríbenos</h3>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pablo.sanchez@iesdecurtis.gal&su=Contacto%20desde%20APR%20Cars"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center text-sm md:text-base"
              >
                <span className="break-all">pablo.sanchez@iesdecurtis.gal</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#DB4437"
                  className="inline-block ml-2 flex-shrink-0"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </a>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Te responderemos lo antes posible</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
