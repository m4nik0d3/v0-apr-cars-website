"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const carImages = [
  {
    src: "/cars/audi-q2-main.webp",
    alt: "Audi Q2 Black Line - Vista frontal lateral principal",
  },
  {
    src: "/cars/audi-q2-1.webp",
    alt: "Audi Q2 Black Line - Vista frontal",
  },
  {
    src: "/cars/audi-q2-5.webp",
    alt: "Audi Q2 Black Line - Vista lateral completa",
  },
  {
    src: "/cars/audi-q2-3.webp",
    alt: "Audi Q2 Black Line - Vista trasera",
  },
  {
    src: "/cars/audi-q2-4.webp",
    alt: "Audi Q2 Black Line - Vista trasera lateral",
  },
  {
    src: "/cars/audi-q2-interior.webp",
    alt: "Audi Q2 Black Line - Interior y salpicadero",
  },
  {
    src: "/cars/audi-q2-dashboard.webp",
    alt: "Audi Q2 Black Line - Virtual Cockpit",
  },
  {
    src: "/cars/audi-q2-navigation.webp",
    alt: "Audi Q2 Black Line - Navegador GPS",
  },
  {
    src: "/cars/audi-q2-camera.webp",
    alt: "Audi Q2 Black Line - Cámara trasera y sensores",
  },
  {
    src: "/cars/audi-q2-seats.webp",
    alt: "Audi Q2 Black Line - Asientos delanteros",
  },
]

export function CarGalleryQ2() {
  const [mainImage, setMainImage] = useState(0)
  const [fullscreenImage, setFullscreenImage] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const prevImage = () => {
    setMainImage((prev) => (prev === 0 ? carImages.length - 1 : prev - 1))
  }

  const nextImage = () => {
    setMainImage((prev) => (prev === carImages.length - 1 ? 0 : prev + 1))
  }

  const prevFullscreenImage = () => {
    setFullscreenImage((prev) => (prev === 0 ? carImages.length - 1 : prev - 1))
  }

  const nextFullscreenImage = () => {
    setFullscreenImage((prev) => (prev === carImages.length - 1 ? 0 : prev + 1))
  }

  const openFullscreen = (index: number) => {
    setFullscreenImage(index)
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-4">
      <div className="relative rounded-lg overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={carImages[mainImage].src || "/placeholder.svg"}
            alt={carImages[mainImage].alt}
            fill
            className="object-cover"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-900 hover:bg-white/90"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Imagen anterior</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-900 hover:bg-white/90"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Imagen siguiente</span>
        </Button>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-2 bg-white/80 text-gray-900 hover:bg-white/90"
              onClick={() => openFullscreen(mainImage)}
            >
              <Maximize2 className="h-5 w-5" />
              <span className="sr-only">Ver a pantalla completa</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl">
            <div className="relative aspect-video">
              <Image
                src={carImages[fullscreenImage].src || "/placeholder.svg"}
                alt={carImages[fullscreenImage].alt}
                fill
                className="object-contain"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2"
              onClick={prevFullscreenImage}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Imagen anterior</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={nextFullscreenImage}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Imagen siguiente</span>
            </Button>
            <div className="text-center mt-2">
              {fullscreenImage + 1} / {carImages.length}
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex overflow-x-auto gap-2 pb-2">
        {carImages.map((image, index) => (
          <button
            key={index}
            className={`relative flex-shrink-0 w-24 h-16 rounded-md overflow-hidden ${
              index === mainImage ? "ring-2 ring-red-600" : "opacity-80 hover:opacity-100"
            }`}
            onClick={() => setMainImage(index)}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
