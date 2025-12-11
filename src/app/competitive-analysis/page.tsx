"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Award, Zap, Globe, MapPin, Ship, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const competitorData = [
  {
    port: "Tangier Logistics Center",
    country: "Morocco",
    teus: "9.2M",
    growth: "+12.5%",
    connectivity: "186 ports",
    ranking: 1,
    color: "#5bbad5"
  },
  {
    port: "Port Said",
    country: "Egypt",
    teus: "6.8M",
    growth: "+8.2%",
    connectivity: "145 ports",
    ranking: 2,
    color: "#3d5a80"
  },
  {
    port: "Algeciras",
    country: "Spain",
    teus: "5.4M",
    growth: "+5.1%",
    connectivity: "132 ports",
    ranking: 3,
    color: "#10b981"
  },
  {
    port: "Piraeus",
    country: "Greece",
    teus: "5.6M",
    growth: "+6.8%",
    connectivity: "128 ports",
    ranking: 4,
    color: "#293d5a"
  }
]

const advantages = [
  {
    icon: Globe,
    title: "Strategic Location",
    description: "At the crossroads of major shipping lanes connecting Europe, Africa, and Americas",
    metrics: ["14km from Europe", "3 continents access", "Prime Mediterranean position"]
  },
  {
    icon: Zap,
    title: "Operational Excellence",
    description: "Highest efficiency with state-of-the-art automation and 24/7 operations",
    metrics: ["48h average turnaround", "99.2% reliability", "Advanced cargo handling"]
  },
  {
    icon: TrendingUp,
    title: "Fastest Growth",
    description: "Leading Mediterranean growth rate with continuous expansion and investment",
    metrics: ["+12.5% annual growth", "€4.2B trade value", "Expanding capacity"]
  },
  {
    icon: Award,
    title: "Infrastructure Quality",
    description: "World-class facilities with the most modern equipment and technology",
    metrics: ["9M+ TEU capacity", "Deep water berths", "Free trade zones"]
  }
]

export default function CompetitiveAnalysis() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d5a80]/20 to-transparent" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#5bbad5]/10 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3d5a80]/20 border border-[#3d5a80]/30 text-[#5bbad5] text-sm font-medium mb-4">
              Market Analysis
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Mediterranean <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">Market Leadership</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive competitive analysis demonstrating our dominant position 
              in the Mediterranean and North African logistics markets
            </p>
          </motion.div>

          <Tabs defaultValue="comparison" className="mb-16">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-[#111827] border border-white/10">
              <TabsTrigger value="comparison" className="data-[state=active]:bg-[#5bbad5] data-[state=active]:text-white">
                Port Comparison
              </TabsTrigger>
              <TabsTrigger value="advantages" className="data-[state=active]:bg-[#5bbad5] data-[state=active]:text-white">
                Our Advantages
              </TabsTrigger>
            </TabsList>

            <TabsContent value="comparison">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {competitorData.map((port, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className={`p-6 bg-gradient-to-br from-[#111827] to-[#0d1421] border ${index === 0 ? 'border-[#5bbad5]/50 ring-1 ring-[#5bbad5]/30' : 'border-white/5'} hover:border-[#5bbad5]/30 transition-all`}>
                        <div className="flex items-center justify-between mb-4">
                          <span 
                            className="text-white px-3 py-1 rounded-full text-sm font-bold"
                            style={{ backgroundColor: port.color }}
                          >
                            #{port.ranking}
                          </span>
                          {index === 0 && (
                            <Award className="h-5 w-5 text-[#5bbad5]" />
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{port.port}</h3>
                        <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {port.country}
                        </p>
                        <div className="space-y-3">
                          <div>
                            <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{port.teus}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider">TEUs Handled</div>
                          </div>
                          <div className="flex items-center justify-between text-sm pt-3 border-t border-white/5">
                            <span className="text-gray-500">Growth</span>
                            <span className="text-emerald-400 font-semibold">{port.growth}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Connectivity</span>
                            <span className="text-white font-semibold">{port.connectivity}</span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <Card className="p-8 bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5">
                  <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Performance Comparison
                  </h3>
                  <div className="space-y-6">
                    {competitorData.map((port, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white">{port.port}</span>
                          <span className="text-sm text-gray-400">{port.teus}</span>
                        </div>
                        <div className="w-full bg-[#3d5a80]/30 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(parseFloat(port.teus) / 9.2) * 100}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-3 rounded-full"
                            style={{ backgroundColor: port.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="advantages">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5 hover:border-[#5bbad5]/30 transition-all group">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3d5a80] to-[#0d1421] border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#5bbad5]/50 transition-all">
                        <advantage.icon className="h-7 w-7 text-[#5bbad5]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {advantage.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {advantage.description}
                      </p>
                      <ul className="space-y-2">
                        {advantage.metrics.map((metric, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-10 bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] border-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
              
              <div className="relative text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Why Choose Tangier Logistics Center?
                </h3>
                <p className="text-white/80 text-lg mb-10 max-w-3xl mx-auto">
                  With the highest growth rate, best connectivity, and most modern infrastructure 
                  in the Mediterranean, we are the clear choice for optimizing your supply chain.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: "#1", label: "Mediterranean Ranking" },
                    { value: "35%", label: "Market Share Growth" },
                    { value: "850+", label: "Operating Companies" },
                    { value: "99.2%", label: "Reliability Rate" }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{stat.value}</div>
                      <div className="text-white/70 text-sm">{stat.label}</div>
                    </div>
                  ))}
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