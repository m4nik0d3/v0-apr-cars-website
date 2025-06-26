"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const carouselItems = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mercedes-C-Class-2015-C01-OC7w4oOpGQCunWZyFRZK7UV8jDaOD8.webp",
    alt: "Mercedes-Benz Clase C",
    title: "Mercedes-Benz Clase C",
    description: "Elegancia y rendimiento en un solo vehículo",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14817089135002.jpg-YslLnPQ23dW7K5x57zYzWNp4XpeFuZ.jpeg",
    alt: "BMW Serie 5",
    title: "BMW Serie 5",
    description: "La combinación perfecta de deportividad y confort",
  },
  {
    image: "/cars/audi-a4-new.jpg",
    alt: "Audi A4",
    title: "Audi A4",
    description: "Tecnología avanzada y diseño sofisticado",
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
