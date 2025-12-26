"use client"

import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/booking-dialog"
import { ArrowDown } from "lucide-react"
import { useState, useEffect } from "react"

const QUOTES = [
  "The Dude abides",
  "Her life is in your hands, Dude",
  "This aggression will not stand, man",
  "That rug really tied the room together",
  "Yeah, well, you know, that’s just, like, your opinion, man",
  "Obviously you’re not a golfer",
  "Careful man, there’s a beverage here!",
  "Fuck it, Dude. Let’s go bowling",
  "Shut the fuck up, Donny!",
  "Smokey, this is not ‘Nam. This is bowling. There are rules",
  "You want a toe? I can get ya a toe",
  "Nihilists! Fuck me… at least it’s an ethos",
  "Saturday, Donny, is Shabbos, the Jewish day of rest",
  "Donny was a good bowler and a good man.\nYou’re entering a world of pain.",
  "Forget it, Donny, you’re out of your element!",
  "Is this your homework, Larry?",
  "Life does not start and stop at your convenience, you miserable piece of shit!",
  "I’m the Dude, so that’s what you call me",
  "Do you have to use so many cuss words?",
  "Sometimes you eat the bear, and sometimes, well, he eats you."
]

export function Hero() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % QUOTES.length)
        setIsAnimating(false)
      }, 500) // Wait for fade out
    }, 6000)

    return () => clearInterval(interval)
  }, [])

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
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="min-h-[200px] flex items-center justify-center">
            <h1
              className={`text-4xl sm:text-5xl md:text-7xl font-[family-name:var(--font-bebas)] text-cream tracking-wider leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-opacity duration-500 transform ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
            >
              <span className="text-neon-pink">"</span>
              {QUOTES[currentQuoteIndex]}
              <span className="text-neon-pink">"</span>
            </h1>
          </div>

          <p className="text-lg md:text-2xl text-cream/80 max-w-xl mx-auto font-light tracking-wide">
            Burgers, Shakes, White Russians &<br />the rug that really ties Reykjavik together
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <BookingDialog>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-cream font-[family-name:var(--font-bebas)] text-2xl tracking-wide px-10 py-8 h-auto w-full sm:w-auto shadow-[0_0_20px_rgba(255,107,107,0.4)] hover:shadow-[0_0_30px_rgba(255,107,107,0.6)] transition-all duration-300"
              >
                Reserve Your Lane
              </Button>
            </BookingDialog>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cream text-cream hover:bg-cream hover:text-secondary font-[family-name:var(--font-bebas)] text-2xl tracking-wide px-10 py-8 h-auto w-full sm:w-auto bg-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              See The Menu
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
