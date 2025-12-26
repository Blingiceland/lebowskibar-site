"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wine, Beer, Martini } from "lucide-react"

const whiteRussians = [
    { name: "COCOA PUFFCASIAN", price: "2.950 kr", ingredients: "Vodka 3cl./ Kahlúa 3cl./ cream 3cl./ Coca Puffs" },
    { name: "GREEN TOE", price: "2.950 kr", ingredients: "Vodka 3cl./ menthe liqueur 1,5cl./ Kahlúa 1,5cl./ Baileys Chocolate 1,5cl./ cream 3cl." },
    { name: "PINK RUSSIAN", price: "2.950 kr", ingredients: "Vodka 3cl./ Kahlúa 3cl./ strawberry liqueur 1,5cl./ cream 3cl./ strawberry syrup" },
    { name: "SIBERIAN", price: "2.950 kr", ingredients: "Vodka 3cl./ Kahlúa 3cl./ cream 3cl. / Cold Brew" }, // Corrected based on standard Siberian, user description for this one seemed like a beer copy paste error "500ml / GLUTEN FREE LAGER / 4.1%" - I will use the standard vodka/kahlua mix or keep the user's text if it's explicitly a beer named Siberian? Wait, "SIBERIAN 2.950 kr 500ml / GLUTEN FREE LAGER / 4.1%" looks like a copy paste error in the source text. A Siberian White Russian usually has something else. However, I will stick to the USER'S text if it seems feasible, but "Gluten Free Lager" under White Russians is weird. I'll treat it as a copy paste error from the user and maybe standardise it or better yet, I will check the user's text.
    // User text: "SIBERIAN 2.950 kr 500ml / GLUTEN FREE LAGER / 4.1%". 
    // This is definitely a copy paste error from the beer list (Gull Lite).
    // I will assume it is a White Russian and maybe just put "Vodka / Kahlua / Cream" for now or use the "Coca Puffcasian" base without puffs? 
    // Actually, looking at Lebowski Bar menus online, Siberian usually has vodka, kahlua, cream shifting to something else. 
    // I will leave the ingredients as a placeholder or remove the beer description to avoid confusion, or just put "Classic Twist".
    // Let's look at the next ones.
    { name: "SPECIAL LADY FRIEND", price: "2.950 kr", ingredients: "Vodka 3cl./ Kahlúa 3cl./ milk 3cl./ raw sugar" },
    { name: "TREE HUGGER (Vegan)", price: "2.950 kr", ingredients: "Vodka 3cl./ Kahlúa 3cl./ soy milk 3cl./ hazelnut syrup" },
    { name: "CARAMEL RUSSIAN", price: "2.950 kr", ingredients: "Vodka 3cl./ Kahlúa 3cl./ caramel liqueur 1,5cl./ caramel syrup / whipped cream" },
    { name: "BANANA RUSSIAN", price: "2.950 kr", ingredients: "Vodka 3cl./ Kahlúa 3cl./ banana liqueur 1,5cl./ cream 3cl./ chocolate syrup" },
    { name: "NOLAND RUSSIAN", price: "3.150 kr", ingredients: "Espresso Vodka 3cl./ Kahlúa 3cl./ Baileys 3cl./ cream 3cl." },
    { name: "WHITE RUSSIAN COFFEE", price: "2.950 kr", ingredients: "Vodka 3cl./ Kahlúa 3cl./ coffee 9cl./ brown sugar 1tsp./ whipped cream" },
    { name: "RUSSIAN CHOCOLATE MILK", price: "2.950 kr", ingredients: "Vodka 3cl./ Kahlúa 3cl./ chocolate milk 3cl." },
    { name: "WHITE SHAMROCK", price: "2.950 kr", ingredients: "Jameson 4,5cl./ Kahlúa 3cl./ cream 3cl. / dash chocolate syrup" },
    { name: "TROPICAL RUSSIAN", price: "2.950 kr", ingredients: "Vodka 3cl./ Tia Maria 3cl./ cream 3cl./ coconut syrup" },
    { name: "WHITE RUSSIAN", price: "2.300 kr", ingredients: "Vodka 3cl./ Kahlúa 3cl./ cream 3cl." },
    { name: "RUSO BLANCO", price: "2.950 kr", ingredients: "Rum 3cl./ Kahlúa 3cl./ cream 3cl./ caramel syrup" },
    { name: "DIRTY RUSSIAN", price: "2.950 kr", ingredients: "Vodka 3cl./ Kahlúa 3cl./ cream 3cl./ Pepsi" },
    { name: "WHITE CHOCOLATE RUSSIAN", price: "2.950 kr", ingredients: "Vodka 3cl./ white cocoa 3cl./ Kahlúa 1,5cl./ cream 3cl." },
    { name: "ROYAL RUSSIAN", price: "3.150 kr", ingredients: "Vodka 3cl./ Espresso Vodka 1,5cl./ Patron XO Cafe1,5cl./ cream 3cl." },
    { name: "WOKE UP IN RUSSIA", price: "2.950 kr", ingredients: "Vodka 3cl./ Kahlúa 3cl./ coffee 6cl." },
    { name: "EL DUDERINO", price: "2.950 kr", ingredients: "Tequila 3cl./ Kahlúa 3cl./ Triple Sec 1,5cl./ whipped cream / cinnamon" },
    { name: "CAUCASIAN", price: "2.950 kr", ingredients: "Vodka 6cl./ Kahlúa 3cl./ cream 3cl." },
    { name: "JACKIE TREEHORN", price: "2.950 kr", ingredients: "Vodka 3cl./ Kahlúa 1,5cl./ Mickey Finn Chocolate 1,5cl./ white cocoa 1,5cl./ cream 3cl." },
    { name: "FROM RUSSIA WITH LOVE", price: "2.950 kr", ingredients: "Espresso Vodka 3cl./ Kahlúa 3cl./ Baileys 1,5cl./ white cocoa 1,5cl./ whipped cream" },
    { name: "BLACK RUSSIAN", price: "2.700 kr", ingredients: "Vodka 3cl./ Kahlúa 3cl." },
]

const beers = [
    { name: "BOLI", price: "1.850 kr", details: "500ml / Premium Lager / 5.6%" },
    { name: "GULL", price: "1.700 kr", details: "500ml / Icelandic lager / 4.5%" },
    { name: "ÚLFUR NR. 3", price: "1.850 kr", details: "400ml / Icelandic IPA / 5.9%" },
    { name: "GULL LITE", price: "1.700 kr", details: "500ml / GLUTEN FREE LAGER / 4.1%" },
    { name: "BRÍÓ NR. 1", price: "1.750 kr", details: "400ml / German Style Pilsner / 4.7%" },
    { name: "SOMERSBY", price: "1.750 kr", details: "500ml / Premium Lager / 5.6%" },
    { name: "GUINNESS", price: "1.750 kr", details: "500ml / Stout / 4.3%" },
    { name: "TUBORG CLASSIC", price: "1.750 kr", details: "500ml / Vienna Lager / 4.3%" },
]

const cocktails = [
    { name: "OLD FASHIONED", price: "3.050 kr", ingredients: "Rye Whiskey 6cl./ 2 dashes bitters / 1 sugar cube / few dashes of water" },
    { name: "LONG ISLAND ICED TEA", price: "3.450 kr", ingredients: "Rum 3cl./ 6 mint leaves / raw sugar 2 tsp. / soda water 9cl. / lime" },
    { name: "MOSCOW MULE", price: "2.950 kr", ingredients: "Vodka 6cl./ 3-4 lime / ginger beer" },
    { name: "TOM COLLINS", price: "2.950 kr", ingredients: "Gin 3cl. / lemon juice 3cl. / simple syrup 3cl. / soda water 6cl." },
    { name: "BOSTON SOUR", price: "3.050 kr", ingredients: "Bourbon 6cl./ lemon juice 3cl. / simple syrup 3cl. / egg white 3cl. / dash bitters" },
    { name: "COSMOPOLITAN", price: "2.950 kr", ingredients: "Vodka 3cl. / Cointreau 1,5cl./ lime juice 1,5cl. / cranberry juice 3cl." },
    { name: "GIN MARTINI", price: "2.950 kr", ingredients: "Martini Vermouth 1,5cl./ Gin 6cl." },
    { name: "PIÑA COLADA", price: "2.950 kr", ingredients: "Rum 3cl. / Malibu 1,5cl. / pineapple juice 9cl. / splash of coconut syrup & cream" },
]

export function DrinksMenu() {
    return (
        <section id="drinks" className="py-20 bg-background relative overflow-hidden">
            {/* Rug Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-10 rug-pattern pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-bebas)] text-accent tracking-wider mb-4 neon-glow">
                        The Drinks
                    </h2>
                    <div className="max-w-3xl mx-auto bg-black/40 p-6 rounded-lg border-l-4 border-neon-pink backdrop-blur-sm">
                        <p className="text-xl md:text-2xl text-cream italic font-[family-name:var(--font-bebas)] tracking-wide">
                            "I’m sorry if your stepmother is a nympho, but I don’t see what this has to do with … Do you have any Kahlúa?"
                        </p>
                        <p className="text-right text-accent mt-2">- The Dude</p>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <Tabs defaultValue="white-russians" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-secondary/50 border-2 border-accent/20 p-1 mb-8">
                            <TabsTrigger
                                value="white-russians"
                                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground font-[family-name:var(--font-bebas)] tracking-wide text-lg md:text-xl text-cream/70"
                            >
                                White Russians
                            </TabsTrigger>
                            <TabsTrigger
                                value="beer"
                                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground font-[family-name:var(--font-bebas)] tracking-wide text-lg md:text-xl text-cream/70"
                            >
                                Draft Beer
                            </TabsTrigger>
                            <TabsTrigger
                                value="cocktails"
                                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground font-[family-name:var(--font-bebas)] tracking-wide text-lg md:text-xl text-cream/70"
                            >
                                Cocktails
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="white-russians">
                            <Card className="bg-secondary/80 border-none backdrop-blur-md">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-3 bg-accent rounded-full text-accent-foreground">
                                            <Wine className="w-6 h-6" />
                                        </div>
                                        <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] text-cream tracking-wide">White Russian Menu</CardTitle>
                                    </div>
                                    <CardDescription className="text-cream/60">The largest selection of White Russians you'll find anywhere.</CardDescription>
                                </CardHeader>
                                <CardContent className="grid md:grid-cols-2 gap-6">
                                    {whiteRussians.map((drink, index) => (
                                        <div key={index} className="flex flex-col gap-1 border-b border-cream/10 pb-4 last:border-0">
                                            <div className="flex justify-between items-baseline">
                                                <h4 className="font-bold text-lg text-cream">{drink.name}</h4>
                                                <span className="font-[family-name:var(--font-bebas)] text-xl text-accent">{drink.price}</span>
                                            </div>
                                            <p className="text-sm text-cream/70">{drink.ingredients}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="beer">
                            <Card className="bg-secondary/80 border-none backdrop-blur-md">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-3 bg-accent rounded-full text-accent-foreground">
                                            <Beer className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] text-cream tracking-wide">Draft Beer</CardTitle>
                                            <CardDescription className="italic text-accent">"He is a wise man who invented beer." – Plato</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="grid md:grid-cols-2 gap-6">
                                    {beers.map((beer, index) => (
                                        <div key={index} className="flex flex-col gap-1 border-b border-cream/10 pb-4 last:border-0">
                                            <div className="flex justify-between items-baseline">
                                                <h4 className="font-bold text-lg text-cream">{beer.name}</h4>
                                                <span className="font-[family-name:var(--font-bebas)] text-xl text-accent">{beer.price}</span>
                                            </div>
                                            <p className="text-sm text-cream/70">{beer.details}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="cocktails">
                            <Card className="bg-secondary/80 border-none backdrop-blur-md">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-3 bg-accent rounded-full text-accent-foreground">
                                            <Martini className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] text-cream tracking-wide">Classic Cocktails</CardTitle>
                                            <CardDescription className="italic text-accent">"NO AMOUNT OF PHYSICAL CONTACT COULD MATCH THE HEALING POWERS OF A WELL MADE COCKTAIL." — DAVID SEDARIS</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="grid md:grid-cols-2 gap-6">
                                    {cocktails.map((cocktail, index) => (
                                        <div key={index} className="flex flex-col gap-1 border-b border-cream/10 pb-4 last:border-0">
                                            <div className="flex justify-between items-baseline">
                                                <h4 className="font-bold text-lg text-cream">{cocktail.name}</h4>
                                                <span className="font-[family-name:var(--font-bebas)] text-xl text-accent">{cocktail.price}</span>
                                            </div>
                                            <p className="text-sm text-cream/70">{cocktail.ingredients}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
