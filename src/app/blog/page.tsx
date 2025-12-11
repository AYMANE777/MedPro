"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"

export default function BlogPage() {
  const { t, lang } = useI18n()

  const blogPosts = [
    {
      title: lang === "fr" ? "Optimisation des flux logistiques : les meilleures pratiques" : "Logistics flow optimization: best practices",
      excerpt: lang === "fr" 
        ? "Découvrez comment optimiser vos opérations logistiques pour gagner en efficacité et réduire vos coûts."
        : "Discover how to optimize your logistics operations to gain efficiency and reduce costs.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      date: "15 Jan 2025",
      readTime: "5 min",
      category: lang === "fr" ? "Logistique" : "Logistics"
    },
    {
      title: lang === "fr" ? "L'importance de la traçabilité dans la chaîne d'approvisionnement" : "The importance of traceability in the supply chain",
      excerpt: lang === "fr"
        ? "La traçabilité est devenue un élément clé pour garantir la qualité et la sécurité des produits."
        : "Traceability has become a key element to ensure product quality and safety.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
      date: "10 Jan 2025",
      readTime: "4 min",
      category: lang === "fr" ? "Traçabilité" : "Traceability"
    },
    {
      title: lang === "fr" ? "Tanger Med : un hub logistique stratégique en Méditerranée" : "Tanger Med: a strategic logistics hub in the Mediterranean",
      excerpt: lang === "fr"
        ? "Analyse de la position stratégique de Tanger Med et son rôle dans le commerce international."
        : "Analysis of Tanger Med's strategic position and its role in international trade.",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop",
      date: "5 Jan 2025",
      readTime: "6 min",
      category: lang === "fr" ? "Actualités" : "News"
    },
    {
      title: lang === "fr" ? "Les innovations technologiques dans l'entreposage moderne" : "Technological innovations in modern warehousing",
      excerpt: lang === "fr"
        ? "Comment la technologie transforme les entrepôts et améliore l'efficacité des opérations."
        : "How technology is transforming warehouses and improving operational efficiency.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop",
      date: "28 Dec 2024",
      readTime: "5 min",
      category: lang === "fr" ? "Innovation" : "Innovation"
    },
    {
      title: lang === "fr" ? "Certification ONSSA : un gage de qualité pour vos produits" : "ONSSA certification: a quality guarantee for your products",
      excerpt: lang === "fr"
        ? "Comprendre l'importance de la certification ONSSA pour les opérations logistiques alimentaires."
        : "Understanding the importance of ONSSA certification for food logistics operations.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      date: "20 Dec 2024",
      readTime: "4 min",
      category: lang === "fr" ? "Certifications" : "Certifications"
    },
    {
      title: lang === "fr" ? "Guide pratique : choisir le bon partenaire logistique" : "Practical guide: choosing the right logistics partner",
      excerpt: lang === "fr"
        ? "Les critères essentiels à considérer pour sélectionner un prestataire logistique fiable."
        : "Essential criteria to consider when selecting a reliable logistics provider.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
      date: "15 Dec 2024",
      readTime: "7 min",
      category: lang === "fr" ? "Conseils" : "Tips"
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
              {t.blog.title}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {lang === "fr" ? "Nos" : "Our"} <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">{lang === "fr" ? "conseils" : "tips"}</span> {lang === "fr" ? "et actualités" : "and news"}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.blog.intro}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5 hover:border-[#5bbad5]/30 transition-all group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#5bbad5]/20 border border-[#5bbad5]/30 text-[#5bbad5] text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#5bbad5] transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm flex-1 mb-4">{post.excerpt}</p>
                    
                    <Button 
                      variant="ghost" 
                      className="text-[#5bbad5] hover:text-white hover:bg-[#5bbad5]/10 p-0 justify-start group/btn"
                    >
                      {t.blog.readMore}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
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
                  {lang === "fr" ? "Le blog TLC" : "The TLC blog"}
                </h3>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  {t.blog.tagline}
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
