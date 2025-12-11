"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/lib/i18n"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const { lang, setLang, t } = useI18n()

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/gmb-invest", label: t.nav.gmbInvest },
    { href: "/services", label: t.nav.services },
    { href: "/certifications", label: t.nav.certifications },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLang = (newLang: "en" | "fr") => {
    setLang(newLang)
    setLangMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#0a0f1a]/95 backdrop-blur-md border-b border-white/10 shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/TLC-1765462368458.png?width=8000&height=8000&resize=contain" 
              alt="Tangier Logistics Center" 
              className="h-14 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform" />
              </Link>
            ))}
            <div className="w-px h-8 bg-white/10 mx-2" />
            
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase">{lang}</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 bg-[#111827] border border-white/10 rounded-lg overflow-hidden shadow-xl"
                  >
                    <button
                      onClick={() => toggleLang("fr")}
                      className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-white/5 transition-colors ${lang === "fr" ? "text-[#5bbad5]" : "text-gray-300"}`}
                    >
                      <span className="text-lg">FR</span> Français
                    </button>
                    <button
                      onClick={() => toggleLang("en")}
                      className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-white/5 transition-colors ${lang === "en" ? "text-[#5bbad5]" : "text-gray-300"}`}
                    >
                      <span className="text-lg">EN</span> English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] hover:from-[#3d5a80] hover:to-[#5bbad5] text-white font-semibold px-6 shadow-lg shadow-[#5bbad5]/25 transition-all hover:shadow-[#5bbad5]/40">
                {t.nav.getQuote}
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-[#0a0f1a]/98 backdrop-blur-md"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="flex items-center gap-2 px-4 py-3"
              >
                <Globe className="h-4 w-4 text-gray-400" />
                <button
                  onClick={() => toggleLang("fr")}
                  className={`px-2 py-1 text-sm rounded ${lang === "fr" ? "bg-[#5bbad5]/20 text-[#5bbad5]" : "text-gray-400"}`}
                >
                  FR
                </button>
                <button
                  onClick={() => toggleLang("en")}
                  className={`px-2 py-1 text-sm rounded ${lang === "en" ? "bg-[#5bbad5]/20 text-[#5bbad5]" : "text-gray-400"}`}
                >
                  EN
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
                className="pt-4"
              >
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] text-white font-semibold">
                    {t.nav.getQuote}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
