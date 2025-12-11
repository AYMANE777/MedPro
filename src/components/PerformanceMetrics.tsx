"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Ship, Container, Users, Globe, Clock, Package, Truck } from "lucide-react"
import { motion } from "framer-motion"

const metrics = [
  {
    icon: Container,
    value: "9.2M+",
    label: "TEUs Handled",
    trend: "+12.5%",
    description: "Annual container throughput"
  },
  {
    icon: Globe,
    value: "77+",
    label: "Countries",
    trend: "+8.3%",
    description: "Global destinations served"
  },
  {
    icon: Ship,
    value: "3,200+",
    label: "Vessel Calls",
    trend: "+15.7%",
    description: "Annual port visits"
  },
  {
    icon: Users,
    value: "850+",
    label: "Partners",
    trend: "+10.2%",
    description: "Business collaborations"
  }
]

export default function PerformanceMetrics() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0f1a]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTNhNWYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#5bbad5]/10 border border-[#5bbad5]/20 text-[#5bbad5] text-sm font-medium mb-4">
            Performance Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Delivering Results That <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">Matter</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Industry-leading metrics that demonstrate our commitment to operational excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative p-6 bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5 hover:border-[#5bbad5]/30 transition-all group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5bbad5]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:from-[#5bbad5]/20 transition-all" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3d5a80] to-[#0d1421] border border-white/10 flex items-center justify-center">
                      <metric.icon className="h-6 w-6 text-[#5bbad5]" />
                    </div>
                    <span className="flex items-center gap-1 text-emerald-400 text-sm font-semibold bg-emerald-400/10 px-2 py-1 rounded-full">
                      <TrendingUp className="h-3 w-3" />
                      {metric.trend}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {metric.value}
                  </h3>
                  <p className="text-[#5bbad5] font-semibold text-sm uppercase tracking-wider mb-2">
                    {metric.label}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {metric.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}