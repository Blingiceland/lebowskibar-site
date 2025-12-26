"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Beef, Utensils } from "lucide-react"

const burgers = [
    {
        name: "THE HONEY BOO",
        price: "2.800 kr",
        description: "150gr / honey glazed bacon / cheese / lettuce / tomato / onion / BBQ / Japanese mayo",
        combo: "with fries and soda: 3.400 ISK"
    },
    {
        name: "THE LEBOWSKI",
        price: "2.650 kr",
        description: "150gr / cheese / lettuce / tomato / onion / mustard mayo",
        combo: "with fries and soda: 3.250 ISK"
    },
    {
        name: "THE WALTER",
        price: "2.600 kr",
        description: "150gr / bacon / cheese / lettuce / tomato / onion / mustard mayo",
        combo: "with fries and soda: 3.400 ISK"
    },
    {
        name: "THE OTHER LEBOWSKI",
        price: "3.000 kr",
        description: "170gr / beef tenderloin / cheese / lettuce / tomato / onion / Japanese mayo",
        combo: "with fries and soda: 3.600 ISK"
    },
    {
        name: "FOR MAUDE´S BABY",
        price: "1.950 kr",
        description: "Cheese / Magic ketchup",
        combo: "with fries and soda: 2.450 ISK"
    },
    {
        name: "THE STRANGER",
        price: "2.650 kr",
        description: "150gr / Veggie / cheese / lettuce / tomato / onion / mustard mayo",
        combo: "with fries and soda: 3.250 ISK"
    },
    {
        name: "BUNNY LEBOWSKI",
        price: "2.800 kr",
        description: "150gr / Chicken / cheese / lettuce / tomato / onion / blue cheese sauce / BBQ",
        combo: "with fries and soda: 3.200 ISK"
    },
    {
        name: "THE BRANDT",
        price: "2.600 kr",
        description: "150gr / chili marinated bacon / cheese / tomato / lettuce / onion / garlic sauce",
        combo: "with fries and soda: 3.400 ISK"
    },
    {
        name: "THE DONNY",
        price: "2.600 kr",
        description: "150gr / cheese / lettuce / tomato / onion / bearnaise",
        combo: "with fries and soda: 3.600 ISK"
    },
    {
        name: "THE SMOKEY",
        price: "3.100 kr",
        description: "Double Smash Beef / cheese / bacon / panfried onion",
        combo: "with fries and soda: 3.700 ISK"
    },
]

const snacks = [
    { name: "JALAPEÑO POPPERS", price: "2.150 kr", description: "with salsa dip" },
    { name: "ONION RINGS", price: "2.150 kr", description: "with mustard mayo" },
    { name: "CAULIFLOWER", price: "2.150 kr", description: "Deepfried Cauliflower / with buffalo sauce, spicy bbq or crispy" },
    { name: "CHEESE STICKS", price: "2.150 kr", description: "with salsa dip" },
    { name: "THE NIHILISTS", price: "2.450 kr", description: "Chicken wings or chicken tenders / plus one sauce on the side\nKrispí: Stökkir vængir eða strimlar / Crispy chicken wings or tenders\nMild Buffalo: Mildir buffalo vængir eða strimlar / Mild buffalo wings or tenders\nSpicy BBQ: Sterkir BBQ vængir eða strimlar / Spicy BBQ wings or tenders" },
]

export function FoodMenu() {
    return (
        <section id="food" className="py-20 bg-background relative overflow-hidden">
            {/* Rug Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-10 rug-pattern pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-bebas)] text-accent tracking-wider mb-4 neon-glow">
                        The Food
                    </h2>
                    <p className="text-xl text-cream/80 max-w-2xl mx-auto">
                        "I'll have the lingonberry pancakes."
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                    {/* Burgers Section */}
                    <Card className="bg-secondary/80 border-4 border-accent relative overflow-hidden backdrop-blur-md">
                        <div className="absolute inset-0 z-0 bg-dark-wood/60" />

                        <div className="relative z-10">
                            <CardHeader className="bg-black/40 text-cream">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-accent rounded-full text-accent-foreground">
                                        <Beef className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] tracking-wide">
                                            Hamburger Menu
                                        </CardTitle>
                                        <CardDescription className="text-cream/80 uppercase tracking-widest text-xs">Signatures Burgers Recommend by Our Chef</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                {burgers.map((burger) => (
                                    <div key={burger.name} className="border-b border-cream/10 pb-4 last:border-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-cream text-lg">{burger.name}</h3>
                                            <span className="font-[family-name:var(--font-bebas)] text-accent text-xl">{burger.price}</span>
                                        </div>
                                        <p className="text-sm text-cream/70 mb-1">{burger.description}</p>
                                        <p className="text-xs text-neon-green font-bold">{burger.combo}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </div>
                    </Card>

                    {/* Snacks Section */}
                    <Card className="bg-secondary/80 border-4 border-accent relative overflow-hidden backdrop-blur-md h-fit">
                        <div className="absolute inset-0 z-0 bg-dark-wood/60" />

                        <div className="relative z-10">
                            <CardHeader className="bg-black/40 text-cream">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-accent rounded-full text-accent-foreground">
                                        <Utensils className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] tracking-wide">
                                            Snack Menu
                                        </CardTitle>
                                        <CardDescription className="text-cream/80 italic">"KEEP YOUR FRIENDS CLOSE AND SNACKS CLOSER."</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                {snacks.map((snack) => (
                                    <div key={snack.name} className="border-b border-cream/10 pb-4 last:border-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-cream text-lg">{snack.name}</h3>
                                            <span className="font-[family-name:var(--font-bebas)] text-accent text-xl">{snack.price}</span>
                                        </div>
                                        <p className="text-sm text-cream/70 whitespace-pre-line">{snack.description}</p>
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
