"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Save } from "lucide-react"

export default function AdminPage() {
    const [menuItem, setMenuItem] = useState({ name: "", price: "", description: "", category: "burger" })
    const [event, setEvent] = useState({ date: "", name: "", category: "sport" })

    const handleMenuSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Menu item "${menuItem.name}" would be added to the database`)
        setMenuItem({ name: "", price: "", description: "", category: "burger" })
    }

    const handleEventSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Event "${event.name}" would be added to the schedule`)
        setEvent({ date: "", name: "", category: "sport" })
    }

    return (
        <div className="min-h-screen bg-cream py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-bebas)] text-primary tracking-wider mb-2">
                        Admin Dashboard
                    </h1>
                    <p className="text-muted-foreground">Manage menu items and schedule events</p>
                </div>

                <Tabs defaultValue="menu" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="menu">Update Menu</TabsTrigger>
                        <TabsTrigger value="schedule">Update Schedule</TabsTrigger>
                    </TabsList>

                    <TabsContent value="menu">
                        <Card className="border-4 border-primary">
                            <CardHeader className="bg-primary text-cream">
                                <CardTitle className="text-2xl font-[family-name:var(--font-bebas)] tracking-wide">
                                    Add Menu Item
                                </CardTitle>
                                <CardDescription className="text-cream/80">
                                    Add new items to the menu for customers to see
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6">
                                <form onSubmit={handleMenuSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="category">Category</Label>
                                        <select
                                            id="category"
                                            value={menuItem.category}
                                            onChange={(e) => setMenuItem({ ...menuItem, category: e.target.value })}
                                            className="w-full p-2 border-2 border-border rounded-md bg-background"
                                        >
                                            <option value="burger">Burger</option>
                                            <option value="drink">White Russian</option>
                                            <option value="shake">Shake</option>
                                            <option value="snack">Snack</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="itemName">Item Name</Label>
                                        <Input
                                            id="itemName"
                                            value={menuItem.name}
                                            onChange={(e) => setMenuItem({ ...menuItem, name: e.target.value })}
                                            placeholder="The Dude Burger"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="price">Price (ISK)</Label>
                                        <Input
                                            id="price"
                                            value={menuItem.price}
                                            onChange={(e) => setMenuItem({ ...menuItem, price: e.target.value })}
                                            placeholder="2,200"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            value={menuItem.description}
                                            onChange={(e) => setMenuItem({ ...menuItem, description: e.target.value })}
                                            placeholder="Double beef patty, cheddar, bacon, special sauce"
                                            rows={3}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-cream">
                                        <PlusCircle className="w-5 h-5 mr-2" />
                                        Add Menu Item
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="schedule">
                        <Card className="border-4 border-primary">
                            <CardHeader className="bg-primary text-cream">
                                <CardTitle className="text-2xl font-[family-name:var(--font-bebas)] tracking-wide">Add Event</CardTitle>
                                <CardDescription className="text-cream/80">
                                    Schedule sports games, DJ nights, or special events
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6">
                                <form onSubmit={handleEventSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="eventCategory">Event Category</Label>
                                        <select
                                            id="eventCategory"
                                            value={event.category}
                                            onChange={(e) => setEvent({ ...event, category: e.target.value })}
                                            className="w-full p-2 border-2 border-border rounded-md bg-background"
                                        >
                                            <option value="sport">Sport</option>
                                            <option value="dj">DJ Night</option>
                                            <option value="special">Special Event</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="eventDate">Date & Time</Label>
                                        <Input
                                            id="eventDate"
                                            type="datetime-local"
                                            value={event.date}
                                            onChange={(e) => setEvent({ ...event, date: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="eventName">Event Name</Label>
                                        <Input
                                            id="eventName"
                                            value={event.name}
                                            onChange={(e) => setEvent({ ...event, name: e.target.value })}
                                            placeholder="Premier League: Arsenal vs Chelsea"
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-cream">
                                        <Save className="w-5 h-5 mr-2" />
                                        Add to Schedule
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
