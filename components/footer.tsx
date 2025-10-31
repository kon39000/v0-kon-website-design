import Link from "next/link"
import { Twitter, Youtube, FileText, Mic, BookOpen, Calendar } from "lucide-react"

export function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/business", label: "Business" },
    { href: "/creative", label: "Creative" },
    { href: "/contact", label: "Contact" },
  ]

  const socialLinks = [
    { href: "https://twitter.com", icon: Twitter, label: "X (Twitter)" },
    { href: "https://note.com", icon: FileText, label: "note" },
    { href: "https://voicy.jp", icon: Mic, label: "Voicy" },
    { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
    { href: "https://udemy.com", icon: BookOpen, label: "Udemy" },
    { href: "https://peatix.com", icon: Calendar, label: "Peatix" },
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
