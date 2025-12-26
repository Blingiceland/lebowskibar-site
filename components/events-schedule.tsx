"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Disc3, Trophy, Mic } from "lucide-react"

const sportsEvents = [
    { date: "Sat, Dec 28", time: "20:00", event: "Premier League: Arsenal vs Ipswich", league: "EPL" },
    { date: "Sun, Dec 29", time: "17:30", event: "Premier League: Leicester vs Man City", league: "EPL" },
    { date: "Sun, Dec 29", time: "21:00", event: "NFL: Dolphins vs Browns", league: "NFL" },
    { date: "Mon, Dec 30", time: "21:00", event: "Premier League: Man United vs Newcastle", league: "EPL" },
]

const djLineup = [
    { day: "Thursday", dj: "DJ Smokey", time: "22:00 - 02:00", genre: "Hip Hop & R&B" },
    { day: "Friday", dj: "DJ Maude", time: "23:00 - 03:00", genre: "House & Dance" },
    { day: "Saturday", dj: "The Jesus & Liam", time: "23:00 - 04:00", genre: "90s Classics & Retro" },
]

const specialEvents = [
    { date: "Every Thursday", time: "20:00", event: "Movie Pub Quiz", description: "Test your film knowledge!" },
    { date: "First Friday", time: "21:00", event: "Lebowski Night", description: "Special screenings & themed drinks" },
]

export function EventsSchedule() {
    const [activeTab, setActiveTab] = useState("sports")

    return (
        <section id="events" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-bebas)] text-secondary tracking-wider mb-4">
                        {"What's"} Happening, Man
                    </h2>
                    <p className="text-xl text-dark-wood/80 max-w-2xl mx-auto">
                        {"Sports, tunes, and good times. This aggression will not stand"}
                    </p>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
                    <TabsList className="grid w-full grid-cols-3 bg-secondary/50 p-2 h-auto">
                        <TabsTrigger
                            value="sports"
                            className="data-[state=active]:bg-accent data-[state=active]:text-cream text-cream/70 font-[family-name:var(--font-bebas)] text-xl py-3"
                        >
                            <Trophy className="w-5 h-5 mr-2" />
                            Sports
                        </TabsTrigger>
                        <TabsTrigger
                            value="djs"
                            className="data-[state=active]:bg-neon-green data-[state=active]:text-cream text-cream/70 font-[family-name:var(--font-bebas)] text-xl py-3"
                        >
                            <Disc3 className="w-5 h-5 mr-2" />
                            DJs
                        </TabsTrigger>
                        <TabsTrigger
                            value="events"
                            className="data-[state=active]:bg-accent data-[state=active]:text-cream text-cream/70 font-[family-name:var(--font-bebas)] text-xl py-3"
                        >
                            <Mic className="w-5 h-5 mr-2" />
                            Events
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="sports" className="mt-8">
                        <Card className="bg-secondary border-4 border-accent relative overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img src="/Images/3l.jpg" className="w-full h-full object-cover opacity-40" alt="Sports bar" />
                                <div className="absolute inset-0 bg-dark-wood/60" />
                            </div>
                            <div className="relative z-10">
                                <CardHeader className="bg-dark-wood/50">
                                    <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] text-cream tracking-wide">
                                        Upcoming Sports
                                    </CardTitle>
                                    <CardDescription className="text-cream/70">Catch all the big games on our big screens</CardDescription>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
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
                    </TabsContent>

                    <TabsContent value="djs" className="mt-8">
                        <Card className="bg-secondary border-4 border-neon-green relative overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img src="/Images/4l.jpg" className="w-full h-full object-cover opacity-40" alt="DJ night" />
                                <div className="absolute inset-0 bg-dark-wood/60" />
                            </div>
                            <div className="relative z-10">
                                <CardHeader className="bg-dark-wood/50">
                                    <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] text-cream tracking-wide">
                                        DJ Lineup
                                    </CardTitle>
                                    <CardDescription className="text-cream/70">Live music Thursday through Saturday</CardDescription>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        {djLineup.map((dj, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-4 p-4 bg-dark-wood/30 rounded-lg border border-cream/20 hover:border-neon-green transition-colors"
                                            >
                                                <Disc3 className="w-6 h-6 text-neon-green flex-shrink-0 mt-1" />
                                                <div className="flex-1">
                                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                                        <span className="font-[family-name:var(--font-bebas)] text-xl text-cream">{dj.day}</span>
                                                        <span className="text-neon-green">•</span>
                                                        <span className="text-cream/70">{dj.time}</span>
                                                    </div>
                                                    <p className="text-cream font-bold text-lg mb-1">{dj.dj}</p>
                                                    <p className="text-neon-green text-sm">{dj.genre}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    </TabsContent>

                    <TabsContent value="events" className="mt-8">
                        <Card className="bg-secondary border-4 border-accent relative overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img src="/Images/1l.jpg" className="w-full h-full object-cover opacity-40" alt="Special events" />
                                <div className="absolute inset-0 bg-dark-wood/60" />
                            </div>
                            <div className="relative z-10">
                                <CardHeader className="bg-dark-wood/50">
                                    <CardTitle className="text-3xl font-[family-name:var(--font-bebas)] text-cream tracking-wide">
                                        Special Events
                                    </CardTitle>
                                    <CardDescription className="text-cream/70">Regular happenings and special nights</CardDescription>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        {specialEvents.map((event, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-4 p-4 bg-dark-wood/30 rounded-lg border border-cream/20 hover:border-accent transition-colors"
                                            >
                                                <Mic className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                                <div className="flex-1">
                                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                                        <span className="font-[family-name:var(--font-bebas)] text-lg text-cream">{event.date}</span>
                                                        <span className="text-accent">•</span>
                                                        <span className="text-cream/70">{event.time}</span>
                                                    </div>
                                                    <p className="text-cream font-bold text-lg mb-1">{event.event}</p>
                                                    <p className="text-cream/70 text-sm">{event.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
