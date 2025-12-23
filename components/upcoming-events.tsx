"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Disc3, Mic } from "lucide-react"

const djLineup = [
    { day: "Thursday", dj: "DJ Smokey", time: "22:00 - 02:00", genre: "Hip Hop & R&B" },
    { day: "Friday", dj: "DJ Maude", time: "23:00 - 03:00", genre: "House & Dance" },
    { day: "Saturday", dj: "The Jesus & Liam", time: "23:00 - 04:00", genre: "90s Classics & Retro" },
]

const specialEvents = [
    { date: "Every Thursday", time: "20:00", event: "Movie Pub Quiz", description: "Test your film knowledge!" },
    { date: "First Friday", time: "21:00", event: "Lebowski Night", description: "Special screenings & themed drinks" },
]

export function UpcomingEvents() {
    return (
        <section id="events" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-bebas)] text-secondary tracking-wider mb-4">
                        Upcoming Events
                    </h2>
                    <p className="text-xl text-dark-wood/80 max-w-2xl mx-auto">
                        {"Good tunes, good vibes, and quizzes man."}
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                    {/* DJ Section */}
                    <Card className="bg-secondary border-4 border-teal-lane relative overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <img src="/Images/4l.jpg" className="w-full h-full object-cover opacity-40" alt="DJ night" />
                            <div className="absolute inset-0 bg-dark-wood/60" />
                        </div>
                        <div className="relative z-10">
                            <CardHeader className="bg-dark-wood/50">
                                <div className="flex items-center gap-3">
                                    <Disc3 className="w-8 h-8 text-teal-lane" />
                                    <div>
                                        <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] text-cream tracking-wide">
                                            DJ Lineup
                                        </CardTitle>
                                        <CardDescription className="text-cream/70">Live music Thursday - Saturday</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    {djLineup.map((dj, index) => (
                                        <div
                                            key={index}
                                            className="border-b border-cream/20 pb-3 last:border-0"
                                        >
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <span className="font-[family-name:var(--font-bebas)] text-xl text-cream">{dj.day}</span>
                                                <span className="text-teal-lane">•</span>
                                                <span className="text-cream/70">{dj.time}</span>
                                            </div>
                                            <p className="text-cream font-bold text-lg mb-1">{dj.dj}</p>
                                            <p className="text-teal-lane text-sm">{dj.genre}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </div>
                    </Card>

                    {/* Special Events Section */}
                    <Card className="bg-secondary border-4 border-accent relative overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <img src="/Images/1l.jpg" className="w-full h-full object-cover opacity-40" alt="Special events" />
                            <div className="absolute inset-0 bg-dark-wood/60" />
                        </div>
                        <div className="relative z-10">
                            <CardHeader className="bg-dark-wood/50">
                                <div className="flex items-center gap-3">
                                    <Mic className="w-8 h-8 text-accent" />
                                    <div>
                                        <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] text-cream tracking-wide">
                                            Weekly Happenings
                                        </CardTitle>
                                        <CardDescription className="text-cream/70">Quizzes and Screenings</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    {specialEvents.map((event, index) => (
                                        <div
                                            key={index}
                                            className="border-b border-cream/20 pb-3 last:border-0"
                                        >
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <span className="font-[family-name:var(--font-bebas)] text-lg text-cream">{event.date}</span>
                                                <span className="text-accent">•</span>
                                                <span className="text-cream/70">{event.time}</span>
                                            </div>
                                            <p className="text-cream font-bold text-lg mb-1">{event.event}</p>
                                            <p className="text-cream/70 text-sm">{event.description}</p>
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
