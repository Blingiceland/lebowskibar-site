"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
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
        <section id="milkshakes" className="w-full flex flex-col items-center py-16 bg-background relative z-20 mb-10">
            <div className="text-center mb-10">
                <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-bebas)] text-accent tracking-wider mb-4 neon-glow">
                    The Milkshakes
                </h2>
                <p className="text-xl text-cream/80 max-w-2xl mx-auto">
                    "Good things only get better."
                </p>
            </div>

            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        size="lg"
                        className="group relative overflow-hidden bg-neon-pink hover:bg-neon-pink/90 text-white border-2 border-white/20 shadow-[0_0_20px_rgba(255,20,147,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,20,147,0.8)] px-8 py-8 h-auto"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <IceCream className="w-8 h-8 group-hover:animate-bounce" />
                            <span className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide">MILKSHAKES</span>
                            <span className="text-xs font-bold bg-black/20 px-2 py-1 rounded-full">CLICK FOR MENU</span>
                        </div>
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-secondary border-4 border-neon-pink text-cream max-w-xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader className="text-center">
                        <DialogTitle className="text-5xl font-[family-name:var(--font-bebas)] text-neon-pink tracking-wider mb-2">
                            Milk Shakes
                        </DialogTitle>
                        <DialogDescription className="text-cream/80 text-lg italic">
                            “Good things only get better.” – ME
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 mt-4">
                        {shakes.map((shake) => (
                            <div key={shake.name} className="flex flex-col border-b border-white/10 pb-4 last:border-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-xl text-cream">{shake.name}</h4>
                                    <span className="font-[family-name:var(--font-bebas)] text-2xl text-neon-pink">{shake.price}</span>
                                </div>
                                <p className="text-cream/70 mb-2">{shake.description}</p>
                                {shake.name !== "SHAKE FOR SHORTY" && (
                                    <p className="text-xs font-bold text-neon-green bg-black/30 p-2 rounded inline-block w-fit">
                                        ✨ Boogie your shake (add alcohol) for +900ISK
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    )
}
