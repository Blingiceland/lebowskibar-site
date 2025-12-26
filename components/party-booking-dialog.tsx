"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PartyPopper } from "lucide-react"

export function PartyBookingDialog({ children }: { children: React.ReactNode }) {
    const [isSubmitted, setIsSubmitted] = useState(false)
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] border-4 border-accent bg-secondary text-cream">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-[family-name:var(--font-bebas)] tracking-wide flex items-center gap-2">
                        <PartyPopper className="w-6 h-6 text-neon-green" />
                        Book a Party / Private Venue
                    </DialogTitle>
                    <DialogDescription className="text-cream/80 text-lg">
                        Rent the 2nd floor for your private event. It really ties the party together.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {isSubmitted ? (
                        <div className="p-6 bg-neon-green/10 border border-neon-green/50 rounded-lg text-center animate-in fade-in zoom-in duration-300">
                            <PartyPopper className="w-12 h-12 text-neon-green mx-auto mb-4" />
                            <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-neon-green mb-2">
                                Request Sent!
                            </h3>
                            <p className="text-cream/90">
                                The Dude abides. We will get back to you shortly.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="p-4 bg-dark-wood/50 rounded-lg border border-cream/20">
                                <p className="text-center italic text-cream/80">
                                    "That is a hell of a venue, man."
                                </p>
                            </div>
                            {/* Placeholder for form fields */}
                            <div className="space-y-4">
                                <div className="h-10 bg-cream/10 rounded animate-pulse" />
                                <div className="h-10 bg-cream/10 rounded animate-pulse" />
                                <div className="h-24 bg-cream/10 rounded animate-pulse" />
                                <Button
                                    onClick={() => setIsSubmitted(true)}
                                    className="w-full bg-accent hover:bg-accent/90 text-2xl font-[family-name:var(--font-bebas)]"
                                >
                                    Send Request
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
