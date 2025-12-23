"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Trophy } from "lucide-react"

const sportsEvents = [
    { date: "Sat, Dec 28", time: "20:00", event: "Premier League: Arsenal vs Ipswich", league: "EPL" },
    { date: "Sun, Dec 29", time: "17:30", event: "Premier League: Leicester vs Man City", league: "EPL" },
    { date: "Sun, Dec 29", time: "21:00", event: "NFL: Dolphins vs Browns", league: "NFL" },
    { date: "Mon, Dec 30", time: "21:00", event: "Premier League: Man United vs Newcastle", league: "EPL" },
]

export function SportsSection() {
    return (
        <section id="sports" className="py-20 bg-cream">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-bebas)] text-secondary tracking-wider mb-4">
                        Live Sports
                    </h2>
                    <p className="text-xl text-dark-wood/80 max-w-2xl mx-auto">
                        {"Catch all the big games on our big screens."}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="bg-secondary border-4 border-accent relative overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <img src="/Images/3l.jpg" className="w-full h-full object-cover opacity-40" alt="Sports bar" />
                            <div className="absolute inset-0 bg-dark-wood/60" />
                        </div>
                        <div className="relative z-10">
                            <CardHeader className="bg-dark-wood/50">
                                <div className="flex items-center gap-3">
                                    <Trophy className="w-8 h-8 text-cream" />
                                    <div>
                                        <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] text-cream tracking-wide">
                                            Match Schedule
                                        </CardTitle>
                                        <CardDescription className="text-cream/70">EPL, NFL, and more</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="grid gap-4 md:grid-cols-2">
                                    {sportsEvents.map((event, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 p-4 bg-dark-wood/30 rounded-lg border border-cream/20 hover:border-accent transition-colors"
                                        >
                                            <CalendarDays className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                                    <span className="font-[family-name:var(--font-bebas)] text-lg text-cream">{event.date}</span>
                                                    <span className="text-accent">•</span>
                                                    <span className="text-cream/70">{event.time}</span>
                                                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-bold rounded">
                                                        {event.league}
                                                    </span>
                                                </div>
                                                <p className="text-cream font-medium">{event.event}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="rug-divider mt-20" />
        </section>
    )
}
