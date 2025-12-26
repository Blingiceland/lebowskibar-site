"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/booking-dialog"
import { PartyBookingDialog } from "@/components/party-booking-dialog"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b-4 border-accent">
            <div className="absolute inset-0 rug-pattern opacity-20" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Static & Text for Colors */}
                    <div className="flex items-center gap-2 mr-8">
                        <a href="/" className="flex items-baseline gap-2 hover:scale-105 transition-transform">
                            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-bebas)] tracking-wider">
                                <span className="text-neon-pink drop-shadow-[0_0_10px_rgba(255,20,147,0.8)]">LEBOWSKI</span>
                                <span className="text-neon-green drop-shadow-[0_0_10px_rgba(0,255,0,0.8)] ml-2">BAR</span>
                            </h1>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#drinks" className="text-cream hover:text-accent transition-colors font-medium">
                            Drinks
                        </a>
                        <a href="#food" className="text-cream hover:text-accent transition-colors font-medium">
                            Food
                        </a>
                        <a href="#milkshakes" className="text-cream hover:text-accent transition-colors font-medium">
                            Milkshakes
                        </a>
                        <a href="#events" className="text-cream hover:text-accent transition-colors font-medium">
                            Events
                        </a>
                        <a href="#sports" className="text-cream hover:text-accent transition-colors font-medium">
                            Sports
                        </a>

                        <div className="flex items-center gap-2">
                            <PartyBookingDialog>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-cream font-[family-name:var(--font-bebas)] text-xl tracking-wide bg-transparent"
                                >
                                    Book a Party
                                </Button>
                            </PartyBookingDialog>
                            <BookingDialog>
                                <Button
                                    size="lg"
                                    className="bg-accent hover:bg-accent/90 text-cream font-[family-name:var(--font-bebas)] text-xl tracking-wide"
                                >
                                    Book a Table
                                </Button>
                            </BookingDialog>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <PartyBookingDialog>
                            <Button
                                size="sm"
                                variant="outline"
                                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-cream font-[family-name:var(--font-bebas)] tracking-wide bg-transparent"
                            >
                                Party
                            </Button>
                        </PartyBookingDialog>
                        <BookingDialog>
                            <Button
                                size="sm"
                                className="bg-accent hover:bg-accent/90 text-cream font-[family-name:var(--font-bebas)] tracking-wide"
                            >
                                Book
                            </Button>
                        </BookingDialog>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-cream hover:bg-cream/20"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-cream/20">
                        <div className="flex flex-col gap-3">
                            <a
                                href="#drinks"
                                className="text-cream hover:text-accent transition-colors font-medium py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Drinks
                            </a>
                            <a
                                href="#food"
                                className="text-cream hover:text-accent transition-colors font-medium py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Food
                            </a>
                            <a
                                href="#milkshakes"
                                className="text-cream hover:text-accent transition-colors font-medium py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Milkshakes
                            </a>
                            <a
                                href="#events"
                                className="text-cream hover:text-accent transition-colors font-medium py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Events
                            </a>

                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
