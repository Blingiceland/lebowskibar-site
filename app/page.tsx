import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Menu } from "@/components/menu"
import { UpcomingEvents } from "@/components/upcoming-events"
import { SportsSection } from "@/components/sports-section"
import { BurgerOfMonth } from "@/components/burger-of-month"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased text-cream">
      <Header />
      <Hero />
      <UpcomingEvents />
      <SportsSection />
      <BurgerOfMonth />
      <Menu />
      <Footer />
    </main>
  )
}
