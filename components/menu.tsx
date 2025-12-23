"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wine, Beef, IceCream, Popcorn } from "lucide-react"

const whiteRussians = [
    { name: "The Classic Dude", ingredients: "Vodka, Kahlúa, Heavy Cream", price: "1,500 ISK" },
    { name: "The White Russian Premium", ingredients: "Grey Goose, Kahlúa, Organic Cream", price: "1,800 ISK" },
    { name: "The Big Lebowski", ingredients: "Double shot, Extra Kahlúa, Whipped Cream", price: "2,000 ISK" },
    { name: "The Caucasian", ingredients: "Vanilla Vodka, Coffee Liqueur, Sweet Cream", price: "1,700 ISK" },
    { name: "The Bunny Special", ingredients: "Coconut Vodka, Kahlúa, Coconut Cream", price: "1,900 ISK" },
]

const burgers = [
    { name: "The Dude Burger", description: "Double beef patty, cheddar, bacon, special sauce", price: "2,200 ISK" },
    { name: "The Jesus Burger", description: "Spicy chicken, jalapeños, pepper jack, chipotle mayo", price: "2,000 ISK" },
    { name: "The Walter", description: "Mushroom swiss burger with caramelized onions", price: "2,100 ISK" },
    { name: "The Maude", description: "Veggie patty, avocado, sprouts, tahini sauce", price: "1,900 ISK" },
]

const shakes = [
    { name: "The Jesus", description: "Vanilla, caramel, whipped cream", price: "1,200 ISK" },
    { name: "Chocolate Thunderdome", description: "Triple chocolate with brownie chunks", price: "1,300 ISK" },
    { name: "Strawberry Dream", description: "Fresh strawberries, vanilla ice cream", price: "1,200 ISK" },
]

const snacks = [
    { name: "Buffalo Wings", description: "8 pcs with blue cheese dip", price: "1,500 ISK" },
    { name: "Mozzarella Sticks", description: "6 pcs with marinara sauce", price: "1,200 ISK" },
    { name: "Loaded Nachos", description: "Cheese, jalapeños, sour cream, guacamole", price: "1,800 ISK" },
    { name: "Onion Rings", description: "Crispy beer-battered rings", price: "1,000 ISK" },
]

export function Menu() {
    return (
        <>
            <div className="rug-divider" />

            <section id="menu" className="py-20 bg-background relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 rug-pattern" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-bebas)] text-accent tracking-wider mb-4 neon-glow">
                            {"What'll"} It Be, Dude?
                        </h2>
                        <p className="text-xl text-cream/80 max-w-2xl mx-auto">{"We've got the stuff that really matters"}</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                        {/* White Russians Section */}
                        <Card className="bg-secondary border-4 border-accent relative overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img src="/Images/5.jpg" className="w-full h-full object-cover opacity-40" alt="White Russians" />
                                <div className="absolute inset-0 bg-dark-wood/60" />
                            </div>
                            <div className="relative z-10">
                                <CardHeader className="bg-dark-wood text-cream">
                                    <div className="flex items-center gap-3">
                                        <Wine className="w-8 h-8" />
                                        <div>
                                            <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] tracking-wide">
                                                White Russian Menu
                                            </CardTitle>
                                            <CardDescription className="text-cream/80">{"The Dude's"} beverage of choice</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    {whiteRussians.map((drink) => (
                                        <div key={drink.name} className="border-b border-cream/20 pb-3 last:border-0">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-cream text-lg">{drink.name}</h3>
                                                <span className="font-[family-name:var(--font-bebas)] text-accent text-xl">{drink.price}</span>
                                            </div>
                                            <p className="text-sm text-cream/70">{drink.ingredients}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </div>
                        </Card>

                        {/* Burgers Section */}
                        <Card className="bg-secondary border-4 border-accent relative overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img src="/Images/2l.jpg" className="w-full h-full object-cover opacity-40" alt="Burgers" />
                                <div className="absolute inset-0 bg-dark-wood/60" />
                            </div>
                            <div className="relative z-10">
                                <CardHeader className="bg-dark-wood text-cream">
                                    <div className="flex items-center gap-3">
                                        <Beef className="w-8 h-8" />
                                        <div>
                                            <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] tracking-wide">
                                                The Burger Menu
                                            </CardTitle>
                                            <CardDescription className="text-cream/80">Handcrafted perfection</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    {burgers.map((burger) => (
                                        <div key={burger.name} className="border-b border-cream/20 pb-3 last:border-0">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-cream text-lg">{burger.name}</h3>
                                                <span className="font-[family-name:var(--font-bebas)] text-accent text-xl">{burger.price}</span>
                                            </div>
                                            <p className="text-sm text-cream/70">{burger.description}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </div>
                        </Card>

                        {/* Shakes Section */}
                        <Card className="bg-secondary border-4 border-accent relative overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img src="/Images/3l.jpg" className="w-full h-full object-cover opacity-40" alt="Milkshakes" />
                                <div className="absolute inset-0 bg-dark-wood/60" />
                            </div>
                            <div className="relative z-10">
                                <CardHeader className="bg-dark-wood text-cream">
                                    <div className="flex items-center gap-3">
                                        <IceCream className="w-8 h-8" />
                                        <div>
                                            <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] tracking-wide">
                                                Milkshakes
                                            </CardTitle>
                                            <CardDescription className="text-cream/80">Thick and creamy</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    {shakes.map((shake) => (
                                        <div key={shake.name} className="border-b border-cream/20 pb-3 last:border-0">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-cream text-lg">{shake.name}</h3>
                                                <span className="font-[family-name:var(--font-bebas)] text-accent text-xl">{shake.price}</span>
                                            </div>
                                            <p className="text-sm text-cream/70">{shake.description}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </div>
                        </Card>

                        {/* Snacks Section */}
                        <Card className="bg-secondary border-4 border-accent relative overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img src="/Images/1l.jpg" className="w-full h-full object-cover opacity-40" alt="Snacks" />
                                <div className="absolute inset-0 bg-dark-wood/60" />
                            </div>
                            <div className="relative z-10">
                                <CardHeader className="bg-dark-wood text-cream">
                                    <div className="flex items-center gap-3">
                                        <Popcorn className="w-8 h-8" />
                                        <div>
                                            <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] tracking-wide">
                                                Bowling Snacks
                                            </CardTitle>
                                            <CardDescription className="text-cream/80">Perfect for sharing</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    {snacks.map((snack) => (
                                        <div key={snack.name} className="border-b border-cream/20 pb-3 last:border-0">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-cream text-lg">{snack.name}</h3>
                                                <span className="font-[family-name:var(--font-bebas)] text-accent text-xl">{snack.price}</span>
                                            </div>
                                            <p className="text-sm text-cream/70">{snack.description}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="rug-divider" />
        </>
    )
}
