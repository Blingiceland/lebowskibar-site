"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { IceCream } from "lucide-react"

const shakes = [
    { name: "BANANARAMA", price: "1.650 kr", description: "Banana Shake" },
    { name: "STRAWBERRY FIELDS", price: "1.650 kr", description: "Strawberry shake" },
    { name: "SHAKE FOR SHORTY", price: "1.240 kr", description: "Same size / Better price" },
    { name: "YOU SEXY THING", price: "1.650 kr", description: "Chocolate Shake" },
    { name: "CARAMEL B", price: "1.650 kr", description: "Caramel shake" },
    { name: "GRACELAND", price: "1.650 kr", description: "Peanutbutter / Chocolate shake" },
    { name: "MILLI VANILLI", price: "1.650 kr", description: "Vanilla Shake" },
]

export function MilkshakeManager() {
    return (
        <section id="milkshakes" className="py-20 bg-background relative overflow-hidden">
            {/* Rug Pattern Background opacity variation */}
            <div className="absolute inset-0 z-0 opacity-5 rug-pattern pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-bebas)] text-accent tracking-wider mb-4 neon-glow">
                        The Milkshakes
                    </h2>
                    <p className="text-xl text-cream/80 max-w-2xl mx-auto">
                        "Good things only get better."
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="bg-secondary/80 border-4 border-neon-pink relative overflow-hidden backdrop-blur-md">
                        <div className="absolute inset-0 z-0 bg-dark-wood/60" />

                        <div className="relative z-10">
                            <CardHeader className="bg-black/40 text-cream">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-neon-pink rounded-full text-white">
                                        <IceCream className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] tracking-wide">
                                            Milkshake Menu
                                        </CardTitle>
                                        <CardDescription className="text-cream/80 italic">"FIVE DOLLAR SHAKE?" (Well, almost)</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 grid gap-6 md:grid-cols-2">
                                {shakes.map((shake) => (
                                    <div key={shake.name} className="border-b border-white/10 pb-4 last:border-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-cream text-lg">{shake.name}</h3>
                                            <span className="font-[family-name:var(--font-bebas)] text-neon-pink text-xl">{shake.price}</span>
                                        </div>
                                        <p className="text-sm text-cream/70 mb-2">{shake.description}</p>
                                        {shake.name !== "SHAKE FOR SHORTY" && (
                                            <p className="text-xs font-bold text-neon-green bg-black/30 p-2 rounded inline-block w-fit">
                                                ✨ Boogie your shake (add alcohol) +900ISK
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
