"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-shadow duration-200 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center overflow-hidden">
          <div className="relative h-[60px] md:h-[76px] w-auto overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apr_cars.jpg-3GK8jp1dIYG94ESWEUPCRX1DcCMSLl.jpeg"
              alt="APR Cars Logo"
              width={304}
              height={76}
              className="h-[60px] md:h-[76px] w-auto transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:drop-shadow-lg"
              priority
            />
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Inicio
          </Link>
          <Link href="/sobre-nosotros" className="text-sm font-medium hover:underline underline-offset-4">
            Sobre Nosotros
          </Link>
          <Link href="/contacto" className="text-sm font-medium hover:underline underline-offset-4">
            Contacto
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="/contacto" passHref>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold shadow-md border-2 border-red-700 px-6 animate-pulse"
            >
              Contactar
            </Button>
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] sm:w-[300px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/sobre-nosotros"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/contacto"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Link href="/contacto" passHref onClick={() => setIsOpen(false)}>
                <Button className="mt-4 w-full bg-red-600 hover:bg-red-700">Contactar</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
