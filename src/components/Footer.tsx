"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function Footer() {
  const { t, lang } = useI18n()

  const footerLinks = {
    services: [
      { label: lang === "fr" ? "Entreposage" : "Warehousing", href: "/services" },
      { label: lang === "fr" ? "Manutention" : "Handling", href: "/services" },
      { label: lang === "fr" ? "Étiquetage & Traçabilité" : "Labeling & Traceability", href: "/services" },
      { label: lang === "fr" ? "Logistique sur mesure" : "Custom Logistics", href: "/services" },
      { label: lang === "fr" ? "Logistique contractuelle" : "Contract Logistics", href: "/services" },
      { label: lang === "fr" ? "Prestations complémentaires" : "Additional Services", href: "/services" },
    ],
    company: [
      { label: t.nav.about, href: "/about" },
      { label: "G.M.B Invest Holding", href: "/gmb-invest" },
      { label: t.nav.certifications, href: "/certifications" },
      { label: t.nav.blog, href: "/blog" },
      { label: t.nav.contact, href: "/contact" },
    ],
  }

  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/tangier-logistics-center/" },
    { Icon: Instagram, href: "#" },
  ]

  return (
    <footer className="relative bg-[#070b14] border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] to-[#070b14]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/TLC-1765462368458.png?width=8000&height=8000&resize=contain" 
                alt="Tangier Logistics Center" 
                className="h-16 w-auto"
              />
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.description}
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#5bbad5]/20 hover:border-[#5bbad5]/50 transition-all"
                >
                  <social.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {t.footer.services}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#5bbad5] text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#5bbad5] text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {t.footer.contact}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-[#3d5a80]/50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-[#5bbad5]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{lang === "fr" ? "Adresse" : "Address"}</p>
                  <p className="text-white text-sm">Entrepôt N1-A, Lot N°110</p>
                  <p className="text-gray-400 text-sm">Zone franche logistique Ksar el Majaz</p>
                  <p className="text-gray-400 text-sm">Tanger Med</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-[#3d5a80]/50 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-[#5bbad5]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{lang === "fr" ? "Téléphone" : "Phone"}</p>
                  <p className="text-white font-medium">+212 6 64 64 65 90</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-[#3d5a80]/50 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-[#5bbad5]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-white font-medium">info@tlcmaroc.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TLC - Tangier Logistics Center. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
              {lang === "fr" ? "Politique de confidentialité" : "Privacy Policy"}
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
              {lang === "fr" ? "Conditions d'utilisation" : "Terms of Use"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}