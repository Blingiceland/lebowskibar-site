"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function BurgerOfMonth() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-secondary/10 rug-pattern opacity-10" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto bg-secondary border-4 border-accent rounded-xl overflow-hidden shadow-2xl">
                    <div className="grid md:grid-cols-2">
                        <div className="relative h-64 md:h-auto min-h-[300px]">
                            <img
                                src="/Images/2l.jpg"
                                alt="Burger of the Month"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-accent text-cream font-[family-name:var(--font-bebas)] text-xl px-4 py-2 rounded shadow-lg transform -rotate-2">
                                LIMITED TIME ONLY
                            </div>
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center bg-dark-wood text-cream">
                            <div className="flex items-center gap-2 text-accent mb-2">
                                <Star className="w-5 h-5 fill-accent" />
                                <Star className="w-5 h-5 fill-accent" />
                                <Star className="w-5 h-5 fill-accent" />
                                <Star className="w-5 h-5 fill-accent" />
                                <Star className="w-5 h-5 fill-accent" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-bebas)] mb-4 tracking-wide text-teal-lane">
                                The "Donny" Burger
                            </h2>
                            <p className="text-lg text-cream/80 mb-6 leading-relaxed">
                                You're out of your element if you haven't tried this yet. Double smash patty, spicy onion rings, pepper jack cheese, and our secret "Shut the f*** up" sauce.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-[family-name:var(--font-bebas)] text-accent">2,400 ISK</span>
                                <Button
                                    className="bg-accent hover:bg-accent/90 text-cream font-[family-name:var(--font-bebas)] text-xl px-6"
                                    onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                                >
                                    Order Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
