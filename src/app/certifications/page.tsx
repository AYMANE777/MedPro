"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, ArrowRight, Award, FileCheck, Leaf, Lock } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"

export default function CertificationsPage() {
  const { t, lang } = useI18n()

  const certificationBenefits = [
    { icon: Shield, text: lang === "fr" ? "Respect des normes de sécurité alimentaire" : "Compliance with food safety standards" },
    { icon: FileCheck, text: lang === "fr" ? "Conformité aux réglementations en vigueur" : "Compliance with current regulations" },
    { icon: Leaf, text: lang === "fr" ? "Gestion responsable des produits sensibles" : "Responsible management of sensitive products" },
    { icon: Lock, text: lang === "fr" ? "Traçabilité garantie à chaque étape" : "Guaranteed traceability at every step" },
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d5a80]/20 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#5bbad5]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#3d5a80]/10 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5bbad5]/10 border border-[#5bbad5]/20 text-[#5bbad5] text-sm font-medium mb-4">
              {t.certifications.title}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">ONSSA</span> {lang === "fr" ? "Certificat" : "Certificate"}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.certifications.subtitle}
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
                <Card className="relative p-8 bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/10">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#5bbad5]/20 to-[#3d5a80]/20 border-4 border-[#5bbad5]/30 flex items-center justify-center">
                      <Award className="h-16 w-16 text-[#5bbad5]" />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white text-center mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {lang === "fr" ? "Office National de Sécurité Sanitaire des Produits Alimentaires" : "National Food Safety Office"}
                  </h2>
                  
                  <p className="text-gray-400 text-center mb-6">
                    {lang === "fr" 
                      ? "Notre certification ONSSA atteste de notre engagement envers les plus hauts standards de sécurité et de qualité dans la gestion des produits alimentaires et sensibles."
                      : "Our ONSSA certification attests to our commitment to the highest standards of safety and quality in the management of food and sensitive products."}
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    <div className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                      <span className="text-emerald-400 font-medium text-sm">{lang === "fr" ? "Certifié" : "Certified"}</span>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-[#5bbad5]/20 border border-[#5bbad5]/30">
                      <span className="text-[#5bbad5] font-medium text-sm">{lang === "fr" ? "Conforme" : "Compliant"}</span>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {lang === "fr" ? "La" : "The"} <span className="text-[#5bbad5]">{lang === "fr" ? "garantie qualité" : "quality guarantee"}</span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                {t.certifications.intro}
              </p>

              <div className="space-y-4">
                {certificationBenefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#5bbad5]/10 border border-[#5bbad5]/20 flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-[#5bbad5]" />
                    </div>
                    <span className="text-gray-300 text-lg">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-br from-[#5bbad5]/10 to-[#3d5a80]/10 border border-[#5bbad5]/20">
                <p className="text-white text-xl font-medium text-center">
                  {t.certifications.trust}
                </p>
              </Card>
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
                  {lang === "fr" ? "Faites confiance à TLC" : "Trust TLC"}
                </h3>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  {lang === "fr" 
                    ? "Découvrez comment nos certifications garantissent la qualité et la sécurité de vos marchandises"
                    : "Discover how our certifications guarantee the quality and safety of your goods"}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <Button className="bg-white text-[#3d5a80] hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
                      {t.nav.contact}
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
