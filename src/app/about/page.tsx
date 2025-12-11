"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Warehouse, Package, Tag, Truck, ClipboardCheck, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"

export default function AboutPage() {
  const { t, lang } = useI18n()

  const activities = [
    { icon: Package, text: t.about.activity1 },
    { icon: Warehouse, text: t.about.activity2 },
    { icon: Truck, text: t.about.activity3 },
    { icon: Tag, text: t.about.activity4 },
    { icon: ClipboardCheck, text: t.about.activity5 },
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d5a80]/20 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#5bbad5]/10 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5bbad5]/10 border border-[#5bbad5]/20 text-[#5bbad5] text-sm font-medium mb-4">
              {t.about.title}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">TLC</span> - Tangier Logistics Center
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#5bbad5]/20 to-[#3d5a80]/20 rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                    alt="TLC Warehouse"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 bg-[#111827]/90 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5bbad5] to-[#3d5a80] flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{lang === "fr" ? "Zone Franche Logistique" : "Logistics Free Zone"}</p>
                        <p className="text-gray-400 text-sm">Ksar el Majaz, Tanger Med</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {lang === "fr" ? "Une plateforme logistique" : "A"} <span className="text-[#5bbad5]">{lang === "fr" ? "moderne" : "modern logistics platform"}</span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                {t.about.intro}
              </p>

              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">{t.about.weEnsure}</h3>
                {activities.map((activity, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#5bbad5]/10 border border-[#5bbad5]/20 flex items-center justify-center">
                      <activity.icon className="h-5 w-5 text-[#5bbad5]" />
                    </div>
                    <span className="text-gray-300">{activity.text}</span>
                  </motion.div>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-br from-[#5bbad5]/10 to-[#3d5a80]/10 border border-[#5bbad5]/20">
                <p className="text-white text-lg font-medium text-center">
                  {t.about.conclusion.split(lang === "fr" ? "simple" : "simple")[0]}
                  <span className="text-[#5bbad5]">{t.home.simple}</span>, <span className="text-[#5bbad5]">{t.home.fast}</span> {lang === "fr" ? "et" : "and"} <span className="text-[#5bbad5]">{t.home.reliable}</span>.
                </p>
              </Card>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/services">
                  <Button className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] hover:from-[#3d5a80] hover:to-[#5bbad5] text-white font-semibold px-8 py-6 text-lg">
                    {t.nav.services}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                    {t.nav.contact}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
