"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

const brands = [
  {
    name: "Mercedes-Benz",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reclamar-a-mercedes-por-el-cartel-de-coches-1024x1024.png-ZjMLKKAfk8HTyFrLOMTc3GrwXZO7oH.webp",
  },
  {
    name: "BMW",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BMW_logo_%28gray%29.svg-fY8lJ5ARHwWnzlAbmxWYsFvpQ2Ex2s.png",
  },
  {
    name: "Audi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/audi-14-logo-png-transparent-daRQEFfUB8Z54kkGAZl7NXfcIP920Z.png",
  },
  {
    name: "Volkswagen",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Volkswagen-rQIdetl3zUnvG4p64TTYuH9RKwwcWd.png",
  },
  {
    name: "Toyota",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/toyota-1-logo-png-transparent-lPgrY60qsvNpbSaua9Y7Iu5LuGLNf1.png",
  },
  {
    name: "Porsche",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porsche-logo-png-HkwNV7enkSx6LSbChTxDhMyJEMeMjc.png",
  },
  {
    name: "SEAT",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SEAT_Logo_from_2017-gterSpPy33w1Tyl8MHnPrr1lACBINz.png",
  },
  {
    name: "Cupra",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cupra_black-8PRItAQjTYuO5y75iO8HbSRmgmR0O2.png",
  },
  {
    name: "Suzuki",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Suzuki_logo_2.svg-nLJJhLLUUg0dc0w8FGK2gId2cnZWrU.png",
  },
  {
    name: "Kia",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kia-logo-D4wvjifarRE9OKJS4CXj32xZ2dDbvx.png",
  },
]

export function BrandLogos() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const marqueeAnimation = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += 1
      }
    }

    const animationInterval = setInterval(marqueeAnimation, 20)

    return () => {
      clearInterval(animationInterval)
    }
  }, [])

  return (
    <div className="w-full py-8 md:py-12 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Nuestras marcas</h2>
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth transition effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Scrolling container */}
          <div ref={containerRef} className="flex overflow-x-hidden" style={{ WebkitOverflowScrolling: "touch" }}>
            {/* First set of logos */}
            <div className="flex space-x-8 md:space-x-16 py-4 md:py-6 px-4 md:px-8">
              {brands.map((brand) => (
                <div key={brand.name} className="flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <div className="h-20 w-28 md:h-28 md:w-40 bg-white p-3 md:p-4 rounded-lg shadow-sm flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={`Logo de ${brand.name}`}
                        width={isMobile ? 80 : 120}
                        height={isMobile ? 50 : 80}
                        className="object-contain h-14 md:h-20"
                      />
                    </div>
                    <span className="mt-2 md:mt-3 text-xs md:text-sm font-medium">{brand.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicate set for continuous scrolling */}
            <div className="flex space-x-8 md:space-x-16 py-4 md:py-6 px-4 md:px-8">
              {brands.map((brand) => (
                <div key={`${brand.name}-duplicate`} className="flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <div className="h-20 w-28 md:h-28 md:w-40 bg-white p-3 md:p-4 rounded-lg shadow-sm flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={`Logo de ${brand.name}`}
                        width={isMobile ? 80 : 120}
                        height={isMobile ? 50 : 80}
                        className="object-contain h-14 md:h-20"
                      />
                    </div>
                    <span className="mt-2 md:mt-3 text-xs md:text-sm font-medium">{brand.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
