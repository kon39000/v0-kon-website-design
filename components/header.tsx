"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // Avoid showing header background while still over the hero
      setIsScrolled(window.scrollY > 80)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/business", label: "Business" },
    { href: "/creative", label: "Creative" },
    { href: "/courses", label: "Courses" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-serif font-medium text-foreground">
            KONTOMO
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-sans transition-colors relative pb-1 ${
                    isActive
                      ? "text-foreground border-b-2 border-[#A8E6CF]"
                      : "text-foreground/70 hover:text-foreground border-b border-foreground/20 hover:border-foreground/40"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground hover:bg-foreground/10 focus:outline-hidden focus:ring-2 focus:ring-ring"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <div className="p-6">
                  <div className="text-lg font-serif mb-4">KONTOMO</div>
                  <nav className="flex flex-col gap-3">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href
                      return (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className={`text-base px-2 py-2 rounded transition-colors ${
                              isActive
                                ? "text-foreground bg-muted/50"
                                : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      )
                    })}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
