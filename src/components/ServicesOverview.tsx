"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ship, Plane, Truck, Warehouse, FileCheck, Globe, ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    icon: Ship,
    title: "Sea Freight",
    description: "Full container load (FCL) and less than container load (LCL) shipping solutions worldwide.",
    features: ["FCL & LCL Services", "Port-to-Port", "Door-to-Door"],
    color: "#5bbad5"
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Express air cargo services for time-sensitive shipments across the globe.",
    features: ["Express Delivery", "Charter Services", "AOG Support"],
    color: "#3d5a80"
  },
  {
    icon: Truck,
    title: "Land Transport",
    description: "Comprehensive road and rail transportation solutions for domestic and cross-border logistics.",
    features: ["FTL & LTL", "Cross-Border", "Last Mile"],
    color: "#10b981"
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "State-of-the-art storage facilities with inventory management and distribution services.",
    features: ["Climate Control", "Inventory Mgmt", "Pick & Pack"],
    color: "#293d5a"
  }
]

export default function ServicesOverview() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1421] via-[#0a0f1a] to-[#0d1421]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3d5a80]/20 border border-[#3d5a80]/30 text-[#5bbad5] text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Comprehensive <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">Logistics Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            End-to-end supply chain solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative p-8 h-full bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5 hover:border-[#5bbad5]/30 transition-all group overflow-hidden">
                <div 
                  className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                />
                
                <div className="flex items-start gap-5">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}05)`,
                      border: `1px solid ${service.color}30`
                    }}
                  >
                    <service.icon className="h-7 w-7" style={{ color: service.color }} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10"
                        >
                          <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services">
            <Button className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] hover:from-[#3d5a80] hover:to-[#5bbad5] text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-[#5bbad5]/25 transition-all hover:shadow-[#5bbad5]/40">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}