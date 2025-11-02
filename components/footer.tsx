import Link from "next/link"
import { Twitter, Youtube, FileText, Mic, BookOpen, Radio } from "lucide-react"

export function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/business", label: "Business" },
    { href: "/creative", label: "Creative" },
    { href: "/courses", label: "Courses" }, // Added Courses link
    { href: "/contact", label: "Contact" },
  ]

  const socialLinks = [
    { href: "https://twitter.com/kon39000", icon: Twitter, label: "X (Twitter)" },
    { href: "https://note.com/kon39000", icon: FileText, label: "note" },
    { href: "https://voicy.jp/channel/821951", icon: Mic, label: "Voicy" },
    { href: "https://www.youtube.com/@nsc-nmo", icon: Youtube, label: "YouTube" },
    { href: "https://www.udemy.com/user/kon-101/", icon: BookOpen, label: "Udemy" },
    { href: "https://stand.fm/channels/5fd9a8143147b7f1382167e2", icon: Radio, label: "stand.fm" },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Logo */}
          <div>
            <Link href="/" className="text-2xl font-serif font-medium inline-block text-secondary-foreground">
              KONTOMO
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 text-sm text-secondary-foreground/60">
            © 2025 NFT Orchestra LLC All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
