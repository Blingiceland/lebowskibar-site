"use client"

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
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] border-4 border-accent bg-secondary text-cream">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-[family-name:var(--font-bebas)] tracking-wide flex items-center gap-2">
                        <PartyPopper className="w-6 h-6 text-teal-lane" />
                        Book a Party / Private Venue
                    </DialogTitle>
                    <DialogDescription className="text-cream/80 text-lg">
                        Rent the 2nd floor for your private event. It really ties the party together.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
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
                        <Button className="w-full bg-accent hover:bg-accent/90 text-2xl font-[family-name:var(--font-bebas)]">
                            Send Request
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
