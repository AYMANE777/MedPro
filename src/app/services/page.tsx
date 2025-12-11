"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Warehouse, Truck, Tag, Settings, FileText, Wrench, ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { useI18n } from "@/lib/i18n"

function ServiceCard({ service, index }: { service: { icon: any; title: string; summary: string; description: string; color: string; image: string }, index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useI18n()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card 
        className="overflow-hidden bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5 hover:border-[#5bbad5]/20 transition-all cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/50 to-transparent" />
          <div 
            className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `${service.color}20`, border: `1px solid ${service.color}40` }}
          >
            <service.icon className="h-6 w-6" style={{ color: service.color }} />
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.summary}</p>
            </div>
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${service.color}20` }}
            >
              {isOpen ? (
                <ChevronUp className="h-5 w-5" style={{ color: service.color }} />
              ) : (
                <ChevronDown className="h-5 w-5" style={{ color: service.color }} />
              )}
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-white/10">
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  )
}

export default function ServicesPage() {
  const { t, lang } = useI18n()

  const services = [
    {
      icon: Warehouse,
      title: t.services.warehousing,
      summary: t.services.warehousingShort,
      description: t.services.warehousingFull,
      color: "#5bbad5",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
    },
    {
      icon: Truck,
      title: t.services.handling,
      summary: t.services.handlingShort,
      description: t.services.handlingFull,
      color: "#3d5a80",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop"
    },
    {
      icon: Tag,
      title: t.services.labeling,
      summary: t.services.labelingShort,
      description: t.services.labelingFull,
      color: "#10b981",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop"
    },
    {
      icon: Settings,
      title: t.services.customLogistics,
      summary: t.services.customLogisticsShort,
      description: t.services.customLogisticsFull,
      color: "#f59e0b",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop"
    },
    {
      icon: FileText,
      title: t.services.contractLogistics,
      summary: t.services.contractLogisticsShort,
      description: t.services.contractLogisticsFull,
      color: "#5bbad5",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
    },
    {
      icon: Wrench,
      title: t.services.additionalServices,
      summary: t.services.additionalServicesShort,
      description: t.services.additionalServicesFull,
      color: "#3d5a80",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop"
    }
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
              {t.services.title}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {lang === "fr" ? "Solutions" : "Logistics"} <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">{lang === "fr" ? "Logistiques" : "Solutions"}</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
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
                  {lang === "fr" ? "Prêt à commencer ?" : "Ready to start?"}
                </h3>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  {lang === "fr" 
                    ? "Contactez notre équipe pour discuter de vos besoins spécifiques et découvrir comment nous pouvons optimiser vos opérations logistiques"
                    : "Contact our team to discuss your specific needs and discover how we can optimize your logistics operations"}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <Button className="bg-white text-[#3d5a80] hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
                      {t.nav.getQuote}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                      {t.nav.about}
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
