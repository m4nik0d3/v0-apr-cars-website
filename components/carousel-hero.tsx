"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const carouselItems = [
  {
    image: "/cars/hero-gti.jpg",
    alt: "Volkswagen Golf GTI",
    title: "Volkswagen Golf GTI",
    description: "Deportividad pura con el icónico GTI",
  },
  {
    image: "/cars/hero-bmw-serie3.jpg",
    alt: "BMW Serie 3",
    title: "BMW Serie 3",
    description: "El placer de conducir hecho realidad",
  },
  {
    image: "/cars/hero-troc.jpg",
    alt: "Volkswagen T-Roc",
    title: "Volkswagen T-Roc",
    description: "SUV compacto con estilo urbano",
  },
  {
    image: "/cars/hero-a3-white.jpg",
    alt: "Audi A3",
    title: "Audi A3",
    description: "Elegancia y tecnología en cada detalle",
  },
  {
    image: "/cars/gallery/audi-a3-grey.jpeg",
    alt: "Audi A3 Sportback",
    title: "Audi A3 Sportback",
    description: "Diseño dinámico y prestaciones excepcionales",
  },
  {
    image: "/cars/gallery/audi-a5-grey.jpeg",
    alt: "Audi A5 Coupé",
    title: "Audi A5 Coupé",
    description: "Elegancia deportiva en cada línea",
  },
  {
    image: "/cars/gallery/vw-golf-gti-white.jpeg",
    alt: "Volkswagen Golf GTI",
    title: "Volkswagen Golf GTI",
    description: "La leyenda deportiva continúa",
  },
  {
    image: "/cars/gallery/vw-golf-rline-grey.jpeg",
    alt: "Volkswagen Golf R-Line",
    title: "Volkswagen Golf R-Line",
    description: "Deportividad y sofisticación",
  },
  {
    image: "/cars/gallery/vw-golf-gtd-white.jpeg",
    alt: "Volkswagen Golf GTD",
    title: "Volkswagen Golf GTD",
    description: "Potencia diésel con carácter deportivo",
  },
  {
    image: "/cars/gallery/audi-a1-white.jpeg",
    alt: "Audi A1",
    title: "Audi A1",
    description: "Compacto premium con personalidad",
  },
  {
    image: "/cars/gallery/vw-caddy-white.jpeg",
    alt: "Volkswagen Caddy",
    title: "Volkswagen Caddy",
    description: "Versatilidad y funcionalidad",
  },
  {
    image: "/cars/gallery/vw-caddy-red.jpeg",
    alt: "Volkswagen Caddy",
    title: "Volkswagen Caddy",
    description: "El compañero perfecto para el trabajo",
  },
]

export function CarouselHero() {
  const [current, setCurrent] = useState(0)
  const isMobile = useMobile()

  const prev = () => setCurrent((current) => (current === 0 ? carouselItems.length - 1 : current - 1))
  const next = () => setCurrent((current) => (current === carouselItems.length - 1 ? 0 : current + 1))

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [])

  // Habilitar gestos táctiles para dispositivos móviles
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Deslizar a la izquierda
      next()
    }

    if (touchStart - touchEnd < -50) {
      // Deslizar a la derecha
      prev()
    }
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="relative h-[250px] md:h-[300px] lg:h-[400px] w-full">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-white/80 text-sm md:text-base">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 text-white hover:bg-white/40 h-8 w-8 md:h-10 md:w-10"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
        <span className="sr-only">Anterior</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 text-white hover:bg-white/40 h-8 w-8 md:h-10 md:w-10"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
        <span className="sr-only">Siguiente</span>
      </Button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${current === index ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Diapositiva {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
