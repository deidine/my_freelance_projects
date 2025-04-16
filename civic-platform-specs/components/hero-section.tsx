"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useScopedI18n, useCurrentLocale } from "@/i18n/client"
import { isRTL } from "@/i18n/config"

export function HeroSection() {
  const t = useScopedI18n("hero")
  const locale = useCurrentLocale()
  const rtl = isRTL(locale)
  //@ts-ignore
  const slides = t("slides")

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const totalSlides = slides.length

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (isPaused) return
    const timer = setTimeout(() => {
      nextSlide()
    }, 3000)

    return () => clearTimeout(timer)
  }, [currentSlide, isPaused])

  const { date, title, description, primaryButton, secondaryButton } = slides[currentSlide]

  return (
    <section
      className="relative bg-[#C26A2D] text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      dir={rtl ? "rtl" : "ltr"}
    >
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-white/80">{date}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{title}</h1>
            <p className="text-white/90 text-lg">{description}</p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button className="bg-white text-[#C26A2D] hover:bg-white/90">{primaryButton}</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                {secondaryButton}
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Youth engagement illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1">
      {JSON.stringify(slides)}  
        {
        
        // slides.map((_, i) => (
        //   <button
        //     key={i}
        //     onClick={() => goToSlide(i)}
        //     className={`h-2 w-2 rounded-full transition-colors ${
        //       i === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/60"
        //     }`}
        //     aria-label={t("goToSlide", { number: i + 1 })}
        //     aria-current={i === currentSlide}
        //     role="button"
        //   />
        // ))
        
        }
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
        onClick={prevSlide}
        aria-label={t("previousSlide")}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
        onClick={nextSlide}
        aria-label={t("nextSlide")}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
