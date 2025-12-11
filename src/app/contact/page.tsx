"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Linkedin, Send, Clock, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { useI18n } from "@/lib/i18n"

export default function ContactPage() {
  const { t, lang } = useI18n()

  const contactInfo = [
    {
      icon: MapPin,
      title: lang === "fr" ? "Localisation" : "Location",
      details: ["Entrepôt N1-A, Lot N°110", "Zone franche logistique Ksar el Majaz", "Tanger Med"],
      color: "#5bbad5"
    },
    {
      icon: Phone,
      title: lang === "fr" ? "Téléphone" : "Phone",
      details: ["+212 6 64 64 65 90"],
      color: "#3d5a80"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@tlcmaroc.com"],
      color: "#10b981"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      details: ["TLC - Tangier Logistics Center"],
      color: "#0077b5"
    }
  ]

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

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
              {t.contact.title}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {lang === "fr" ? "Entrons en" : "Let's get in"} <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">{lang === "fr" ? "relation" : "touch"}</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.contact.intro}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {lang === "fr" ? "Nos coordonnées" : "Our contact details"}
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-5 bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5 hover:border-[#5bbad5]/30 transition-all h-full">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${info.color}20`, border: `1px solid ${info.color}40` }}
                      >
                        <info.icon className="h-6 w-6" style={{ color: info.color }} />
                      </div>
                      <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-400 text-sm">{detail}</p>
                      ))}
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-br from-[#5bbad5]/10 to-[#3d5a80]/10 border border-[#5bbad5]/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-[#5bbad5]" />
                  <h3 className="text-white font-semibold">{lang === "fr" ? "Horaires d'ouverture" : "Opening hours"}</h3>
                </div>
                <p className="text-gray-400">{lang === "fr" ? "Lundi - Vendredi: 8h00 - 18h00" : "Monday - Friday: 8:00 AM - 6:00 PM"}</p>
                <p className="text-gray-400">{lang === "fr" ? "Samedi: 8h00 - 12h00" : "Saturday: 8:00 AM - 12:00 PM"}</p>
              </Card>

              <div className="relative rounded-2xl overflow-hidden border border-white/10 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.8!2d-5.5!3d35.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDU0JzAwLjAiTiA1wrAzMCcwMC4wIlc!5e0!3m2!1sfr!2sma!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {lang === "fr" ? "Envoyez-nous un message" : "Send us a message"}
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{lang === "fr" ? "Message envoyé !" : "Message sent!"}</h3>
                    <p className="text-gray-400">{lang === "fr" ? "Nous vous répondrons dans les plus brefs délais." : "We will respond as soon as possible."}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nom" className="text-gray-300">{t.contact.form.lastName} *</Label>
                        <Input
                          id="nom"
                          required
                          value={formData.nom}
                          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                          className="bg-[#0a0f1a] border-white/10 text-white focus:border-[#5bbad5]"
                          placeholder={lang === "fr" ? "Votre nom" : "Your last name"}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prenom" className="text-gray-300">{t.contact.form.firstName} *</Label>
                        <Input
                          id="prenom"
                          required
                          value={formData.prenom}
                          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                          className="bg-[#0a0f1a] border-white/10 text-white focus:border-[#5bbad5]"
                          placeholder={lang === "fr" ? "Votre prénom" : "Your first name"}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">{t.contact.form.email} *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-[#0a0f1a] border-white/10 text-white focus:border-[#5bbad5]"
                          placeholder={lang === "fr" ? "votre@email.com" : "your@email.com"}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telephone" className="text-gray-300">{t.contact.form.phone}</Label>
                        <Input
                          id="telephone"
                          type="tel"
                          value={formData.telephone}
                          onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                          className="bg-[#0a0f1a] border-white/10 text-white focus:border-[#5bbad5]"
                          placeholder="+212 ..."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">{t.contact.form.message} *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-[#0a0f1a] border-white/10 text-white focus:border-[#5bbad5] resize-none"
                        placeholder={t.contact.form.messagePlaceholder}
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] hover:from-[#3d5a80] hover:to-[#5bbad5] text-white font-semibold py-6 text-lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {t.contact.form.submit}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
