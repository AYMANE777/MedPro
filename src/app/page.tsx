"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { ArrowRight, Award, MapPin, Warehouse, Package, Tag, Truck, ClipboardCheck, Phone, Mail, User, Quote, Shield, Clock, Globe, Zap, CheckCircle2, Building2, ShieldCheck, Cog, Box, FileCheck, Linkedin } from "lucide-react"
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useI18n } from "@/lib/i18n"

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setDisplayValue(Math.floor(v)),
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}

export default function Home() {
  const { t, lang } = useI18n()
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const kpis = [
    { value: 20000, suffix: " m²", label: t.home.kpi1Label, prefix: "+" },
    { value: 120, suffix: "", label: t.home.kpi2Label, prefix: "+" },
    { value: 100, suffix: "%", label: t.home.kpi3Label, prefix: "" },
    { value: 24, suffix: "/7", label: t.home.kpi4Label, prefix: "" },
  ]

  const whyChooseUs = [
    { icon: MapPin, title: t.home.strategicPosition, desc: t.home.strategicPositionDesc },
    { icon: Shield, title: t.home.maxSecurity, desc: t.home.maxSecurityDesc },
    { icon: Clock, title: t.home.reactivity, desc: t.home.reactivityDesc },
    { icon: Globe, title: t.home.internationalNetwork, desc: t.home.internationalNetworkDesc },
    { icon: Zap, title: t.home.modernTech, desc: t.home.modernTechDesc },
    { icon: Award, title: t.home.onssaCertified, desc: t.home.onssaCertifiedDesc },
  ]

  const services = [
    { title: t.home.warehousing, desc: t.home.warehousingDesc, icon: Warehouse },
    { title: t.home.handling, desc: t.home.handlingDesc, icon: Box },
    { title: t.home.labeling, desc: t.home.labelingDesc, icon: Tag },
    { title: t.home.customLogistics, desc: t.home.customLogisticsDesc, icon: Cog },
    { title: t.home.contractLogistics, desc: t.home.contractLogisticsDesc, icon: FileCheck },
    { title: t.home.additionalServices, desc: t.home.additionalServicesDesc, icon: Package },
  ]

  const timelineSteps = [
    { step: 1, title: t.home.reception, desc: t.home.receptionDesc, icon: Package },
    { step: 2, title: t.home.control, desc: t.home.controlDesc, icon: CheckCircle2 },
    { step: 3, title: t.home.storage, desc: t.home.storageDesc, icon: Warehouse },
    { step: 4, title: t.home.preparation, desc: t.home.preparationDesc, icon: ClipboardCheck },
    { step: 5, title: t.home.shipping, desc: t.home.shippingDesc, icon: Truck },
  ]

  const warehouseImages = [
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-11-at-17.54.25-1765472121082.jpeg?width=8000&height=8000&resize=contain", alt: lang === "fr" ? "Port Tanger Med" : "Tanger Med Port" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-11-at-17.55.13-1-1765472207431.jpeg?width=8000&height=8000&resize=contain", alt: lang === "fr" ? "Vue aérienne Tanger Med" : "Tanger Med Aerial View" },
    { src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop", alt: t.home.storageZone },
    { src: "https://images.unsplash.com/photo-1565891741441-64926e441838?w=600&h=400&fit=crop", alt: t.home.racking },
    { src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop", alt: t.home.shippingZone },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-11-at-18.07.19-1765473078266.jpeg?width=8000&height=8000&resize=contain", alt: t.home.equipment },
  ]

  const certifications = [
    { name: t.home.onssa, desc: t.home.onssaDesc },
    { name: t.home.iso, desc: t.home.isoDesc },
    { name: t.home.haccp, desc: t.home.haccpDesc },
  ]

  const clientLogos = [
    { name: "Renault", logo: "R" },
    { name: "Decathlon", logo: "D" },
    { name: "Zara", logo: "Z" },
    { name: "H&M", logo: "H&M" },
    { name: "Leroy Merlin", logo: "LM" },
    { name: "Carrefour", logo: "C" },
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navigation />
      
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#1e3a5f]/30 to-[#0a0f1a]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-[#0a0f1a]/80" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1a] to-transparent" />
        </motion.div>

        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#5bbad5]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#3d5a80]/30 rounded-full blur-[150px] animate-pulse" />

        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20"
          style={{ opacity: heroOpacity }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#5bbad5]/10 border border-[#5bbad5]/20 text-[#5bbad5] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Award className="h-4 w-4" />
                {t.home.badge}
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <span className="text-[#5bbad5]">{t.home.title1}</span>
                <br />
                <span className="bg-gradient-to-r from-[#5bbad5] via-[#3d5a80] to-[#293d5a] bg-clip-text text-transparent">{t.home.title2}</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
                {t.home.subtitle} <span className="text-[#5bbad5]">{t.home.simple}</span>, <span className="text-[#5bbad5]">{t.home.fast}</span> {lang === "fr" ? "et" : "and"} <span className="text-[#5bbad5]">{t.home.reliable}</span>.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact">
                  <Button className="group relative bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] hover:from-[#3d5a80] hover:to-[#5bbad5] text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-[#5bbad5]/25 transition-all duration-300 hover:shadow-[#5bbad5]/50 hover:shadow-xl hover:scale-[1.02] overflow-hidden">
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center">
                      {t.home.cta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg hover:border-[#5bbad5]/50 transition-all duration-300">
                    {t.home.ourServices}
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#5bbad5]/20 to-[#3d5a80]/20 rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                    alt="TLC Warehouse"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 bg-[#111827]/90 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5bbad5] to-[#3d5a80] flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{t.home.location}</p>
                        <p className="text-gray-400 text-sm">{t.home.locationDetail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 relative bg-gradient-to-b from-[#0a0f1a] to-[#0d1421]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5bbad5]/20 to-[#3d5a80]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-2xl bg-[#111827]/50 backdrop-blur-sm border border-white/5 hover:border-[#5bbad5]/30 transition-all duration-300">
                    <div className="text-5xl md:text-6xl font-bold text-[#5bbad5] mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <AnimatedCounter value={kpi.value} suffix={kpi.suffix} prefix={kpi.prefix} />
                    </div>
                    <p className="text-gray-400 text-lg">{kpi.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3d5a80]/30 border border-[#3d5a80]/50 text-[#5bbad5] text-sm font-medium mb-4">
              {t.home.whyChooseUs}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {lang === "fr" ? "Votre" : "Your"} <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">{lang === "fr" ? "avantage compétitif" : "competitive advantage"}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#111827]/80 to-[#0d1421]/80 backdrop-blur-sm border border-white/5 hover:border-[#5bbad5]/30 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5bbad5]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5bbad5]/20 to-[#3d5a80]/20 border border-[#5bbad5]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-7 w-7 text-[#5bbad5]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-[#0d1421]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3d5a80]/30 border border-[#3d5a80]/50 text-[#5bbad5] text-sm font-medium mb-4">
              {t.home.ourServicesTitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {lang === "fr" ? "Solutions" : "Logistics"} <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">{t.home.logisticsSolutions}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#111827]/80 to-[#0d1421]/80 backdrop-blur-xl border border-white/10 hover:border-[#5bbad5]/40 transition-all duration-300 h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5bbad5]/10 to-[#3d5a80]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#5bbad5]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5bbad5] to-[#3d5a80] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#5bbad5]/20">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <Button className="group bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] hover:from-[#3d5a80] hover:to-[#5bbad5] text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-[#5bbad5]/25 transition-all duration-300 hover:shadow-[#5bbad5]/40">
                {t.home.viewAllServices}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0d1421] to-[#0a0f1a]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3d5a80]/30 border border-[#3d5a80]/50 text-[#5bbad5] text-sm font-medium mb-4">
              {t.home.ourProcess}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {lang === "fr" ? "Comment" : "How"} <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">{lang === "fr" ? "ça marche" : "it works"}</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5bbad5]/30 to-transparent -translate-y-1/2" />
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {timelineSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  <motion.div 
                    className="relative mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#5bbad5] to-[#3d5a80] flex items-center justify-center mb-4 shadow-lg shadow-[#5bbad5]/30"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0a0f1a] border-2 border-[#5bbad5] flex items-center justify-center text-[#5bbad5] font-bold text-sm">
                      {step.step}
                    </div>
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3d5a80]/30 border border-[#3d5a80]/50 text-[#5bbad5] text-sm font-medium mb-4">
              {t.home.ourFacilities}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {lang === "fr" ? "Notre" : "Our"} <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">{lang === "fr" ? "infrastructure" : "infrastructure"}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warehouseImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative bg-[#0d1421]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3d5a80]/30 border border-[#3d5a80]/50 text-[#5bbad5] text-sm font-medium mb-4">
              {t.home.theyTrustUs}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {lang === "fr" ? "Nos" : "Our"} <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">{lang === "fr" ? "partenaires" : "partners"}</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 rounded-2xl bg-[#111827]/50 border border-white/10 hover:border-[#5bbad5]/30 flex items-center justify-center transition-all duration-300"
              >
                <span className="text-2xl font-bold text-gray-500 group-hover:text-[#5bbad5] transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {client.logo}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3d5a80]/30 border border-[#3d5a80]/50 text-[#5bbad5] text-sm font-medium mb-4">
              {t.home.certifications}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {lang === "fr" ? "Qualité" : "Quality"} <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">{lang === "fr" ? "certifiée" : "certified"}</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-8 py-6 rounded-2xl bg-gradient-to-br from-[#111827]/80 to-[#0d1421]/80 border border-white/10 hover:border-[#5bbad5]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5bbad5] to-[#3d5a80] flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{cert.name}</h3>
                    <p className="text-gray-400 text-sm">{cert.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3d5a80]/30 border border-[#3d5a80]/50 text-[#5bbad5] text-sm font-medium mb-4">
              {t.home.direction}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {t.home.directorWord}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-[#111827]/80 to-[#0d1421]/80 backdrop-blur-xl border border-white/10">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#5bbad5]/30 mb-4">
                    <img 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1602419962200-1765473184885.jpg?width=8000&height=8000&resize=contain"
                      alt="Idriss Boulaich"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Idriss Boulaich
                  </h3>
                  <p className="text-[#5bbad5] text-sm font-medium">{t.home.directorTitle}</p>
                  <p className="text-gray-400 text-sm">{t.home.directorCompany}</p>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <Quote className="h-10 w-10 text-[#5bbad5]/30" />
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t.home.directorWelcome} <span className="text-[#5bbad5] font-semibold">Tangier Logistics Center (TLC)</span> !
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {t.home.directorMessage1}
                  </p>
                  <p className="text-white font-medium">
                    {t.home.directorMessage2}
                  </p>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <a href="tel:+212664646590" className="flex items-center gap-2 text-gray-400 hover:text-[#5bbad5] transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>+212 6 64 64 65 90</span>
                    </a>
                    <a href="mailto:info@tlcmaroc.com" className="flex items-center gap-2 text-gray-400 hover:text-[#5bbad5] transition-colors">
                      <Mail className="h-4 w-4" />
                      <span>info@tlcmaroc.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/idriss-boulaich-mba-32b3491a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#5bbad5] transition-colors">
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5bbad5] to-[#3d5a80]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {t.home.readyToOptimize}
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                {t.home.ctaSubtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button className="group relative bg-white text-[#3d5a80] hover:bg-gray-100 font-semibold px-8 py-6 text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-white/20">
                    <span className="relative flex items-center">
                      {t.home.cta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg transition-all duration-300">
                    {t.home.ourServices}
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