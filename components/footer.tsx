import { Phone, MapPin, Facebook, Instagram, Mail } from "lucide-react"

export function Footer() {
    return (
        <>
            <div className="rug-divider" />

            <footer id="contact" className="relative bg-secondary border-t-4 border-accent overflow-hidden">
                <div className="absolute inset-0 rug-pattern opacity-50" />

                <div className="relative z-10 container mx-auto px-4 py-12">
                    <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-cream tracking-wide mb-4">
                                Give Us A Ring, Dude
                            </h3>
                            <div className="flex items-start gap-3 text-cream/90">
                                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold">Call us</p>
                                    <a href="tel:7908088" className="hover:text-accent transition-colors">
                                        790-8088
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-cream/90">
                                <MapPin className="w-5 h-5 text-neon-green flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold">Visit us</p>
                                    <p>Austurstræti 8</p>
                                    <p>101 Reykjavík, Iceland</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-cream/90">
                                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold">Email us</p>
                                    <a href="mailto:info@lebowskibar.is" className="hover:text-accent transition-colors">
                                        info@lebowskibar.is
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-cream tracking-wide mb-4">
                                {"When We're"} Around
                            </h3>
                            <div className="space-y-2 text-cream/90">
                                <div className="flex justify-between">
                                    <span className="font-bold">Monday - Thursday</span>
                                    <span>16:00 - 01:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Friday</span>
                                    <span>16:00 - 03:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Saturday</span>
                                    <span>14:00 - 04:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Sunday</span>
                                    <span>14:00 - 01:00</span>
                                </div>
                            </div>
                        </div>

                        {/* Social & About */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-cream tracking-wide mb-4">
                                Follow The Dude
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-accent hover:bg-accent/90 rounded-lg flex items-center justify-center transition-colors"
                                >
                                    <Facebook className="w-6 h-6 text-cream" />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-neon-green hover:bg-neon-green/90 rounded-lg flex items-center justify-center transition-colors"
                                >
                                    <Instagram className="w-6 h-6 text-cream" />
                                </a>
                            </div>
                            <p className="text-cream/70 text-sm leading-relaxed">
                                {
                                    "A legendary bar in downtown Reykjavik inspired by the Coen Brothers' classic film. The rug really ties the room together, man."
                                }
                            </p>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-12 pt-8 border-t border-cream/20 text-center">
                        <p className="text-cream/60 text-sm">
                            © {new Date().getFullYear()} Lebowski Bar. The Dude Abides. {"That's just, like, your opinion, man."}
                        </p>
                    </div>
                </div>

                <div className="h-3 bg-gradient-to-r from-accent via-neon-green to-accent" />
            </footer>
        </>
    )
}
