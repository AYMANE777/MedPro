"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Home, Apple, Shirt, Truck, ArrowRight, Award, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"

export default function GMBInvestPage() {
  const { t, lang } = useI18n()

  const sectors = [
    { icon: Building2, name: t.gmb.building, color: "#5bbad5" },
    { icon: Home, name: t.gmb.realEstate, color: "#3d5a80" },
    { icon: Apple, name: t.gmb.foodIndustry, color: "#10b981" },
    { icon: Shirt, name: t.gmb.textile, color: "#f59e0b" },
    { icon: Truck, name: t.gmb.logistics, color: "#5bbad5" },
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d5a80]/20 to-transparent" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#5bbad5]/10 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5bbad5]/10 border border-[#5bbad5]/20 text-[#5bbad5] text-sm font-medium mb-4">
              {lang === "fr" ? "Notre Groupe" : "Our Group"}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">G.M.B Invest</span> Holding
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.gmb.intro}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#5bbad5] to-[#3d5a80] flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-[#5bbad5] font-medium">{t.gmb.since}</p>
                  <p className="text-4xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>1962</p>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {lang === "fr" ? "Un groupe" : "A"} <span className="text-[#5bbad5]">{lang === "fr" ? "diversifié" : "diversified"}</span> {lang === "fr" ? "et" : "and"} <span className="text-[#5bbad5]">{lang === "fr" ? "innovant" : "innovative group"}</span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                {t.gmb.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {sectors.map((sector, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-4 bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5 hover:border-[#5bbad5]/30 transition-all text-center group">
                      <div 
                        className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3"
                        style={{ background: `${sector.color}20`, border: `1px solid ${sector.color}40` }}
                      >
                        <sector.icon className="h-6 w-6" style={{ color: sector.color }} />
                      </div>
                      <p className="text-white font-medium text-sm">{sector.name}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-br from-[#5bbad5]/10 to-[#3d5a80]/10 border border-[#5bbad5]/20">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-[#5bbad5]" />
                  <p className="text-white text-lg font-medium">
                    {t.gmb.support}
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#5bbad5]/20 to-[#3d5a80]/20 rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                    alt="G.M.B Invest Holding"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-[#111827]/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                        <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>60+</p>
                        <p className="text-gray-400 text-xs">{t.gmb.experience}</p>
                      </div>
                      <div className="bg-[#111827]/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                        <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>5</p>
                        <p className="text-gray-400 text-xs">{t.gmb.sectors}</p>
                      </div>
                      <div className="bg-[#111827]/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                        <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>100%</p>
                        <p className="text-gray-400 text-xs">{lang === "fr" ? "Marocain" : "Moroccan"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-10 bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] border-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
              
              <div className="relative text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {lang === "fr" ? "Découvrez TLC" : "Discover TLC"}
                </h3>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  {lang === "fr" ? "En savoir plus sur notre plateforme logistique et nos services" : "Learn more about our logistics platform and services"}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/about">
                    <Button className="bg-white text-[#3d5a80] hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
                      {t.nav.about}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                      {t.nav.services}
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
