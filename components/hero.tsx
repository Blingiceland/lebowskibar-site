"use client"

import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/booking-dialog"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Images/1l.jpg"
          alt="Lebowski Bar Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-dark-wood/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-[family-name:var(--font-bebas)] text-cream tracking-wider leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            THE DUDE ABIDES
            <br />
            <span className="text-neon-blue">IN REYKJAVIK</span>
          </h1>

          <p className="text-xl md:text-3xl text-cream/90 font-medium max-w-2xl mx-auto leading-relaxed">
            {"Sometimes you eat the bar, and sometimes, well..."}
            <br />
            <span className="text-neon-pink italic">{"the bar eats you"}</span>
          </p>

          <p className="text-lg md:text-xl text-cream/80 max-w-xl mx-auto">
            Burgers, Shakes, White Russians & the rug that really ties Reykjavik together
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <BookingDialog>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-cream font-[family-name:var(--font-bebas)] text-2xl tracking-wide px-8 py-6 h-auto"
              >
                Reserve Your Lane
              </Button>
            </BookingDialog>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cream text-cream hover:bg-cream hover:text-secondary font-[family-name:var(--font-bebas)] text-2xl tracking-wide px-8 py-6 h-auto bg-transparent"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              {"What's"} On The Menu
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-cream/60" />
        </div>
      </div>
    </section>
  )
}
