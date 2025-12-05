"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Clock, Send, MessageSquare, Building, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      service: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "JL JENDR G SUBROTO LK I, Desa/Kelurahan Sentang, Kec. Kota Kisaran Timur, Kab. Asahan, Provinsi Sumatera Utara",
      color: "from-blue-900 to-yellow-600"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+6282382466172",
      color: "from-blue-900 to-yellow-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@andrico.com",
      color: "from-blue-900 to-yellow-600"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Sabtu: 08:00 - 22:00\nMinggu: 09:00 - 21:00",
      color: "from-blue-900 to-yellow-600"
    }
  ];

  const services = [
    "Konsultasi Kedai Minuman",
    "Pengembangan Proyek Housing",
    "Kerjasama Investasi",
    "Layanan Lainnya"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-900 to-yellow-600 bg-clip-text text-transparent">
                Hubungi Kami
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kami siap membantu dan menjawab pertanyaan Anda. Mari diskusikan bagaimana kami dapat bekerja sama.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 text-sm whitespace-pre-line">
                        {info.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-8 h-8 text-blue-900 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Kirim Pesan
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="+62 xxx-xxxx-xxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Layanan yang Dibutuhkan
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      >
                        <option value="">Pilih Layanan</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Subjek pesan Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-900 to-yellow-600 hover:from-blue-800 hover:to-yellow-500 text-white py-3 text-lg"
                  >
                    Kirim Pesan
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-900 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Lokasi Kami
                    </h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      JL JENDR G SUBROTO LK I, Sentang, Kisaran Timur, Asahan
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => window.open("https://maps.google.com", "_blank")}
                    >
                      Buka di Google Maps
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Butuh Bantuan Cepat?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <Coffee className="w-5 h-5 text-blue-900 mr-3" />
                      <span className="text-gray-700">Info Kedai</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Hubungi
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center">
                      <Building className="w-5 h-5 text-yellow-700 mr-3" />
                      <span className="text-gray-700">Info Proyek</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Hubungi
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ikuti Kami
                </h3>
                <p className="text-gray-600 mb-4">
                  Dapatkan update terbaru tentang proyek dan promosi kami
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm">
                    LinkedIn
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Pertanyaan yang sering diajukan tentang layanan kami
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Jam berapa kedai ANDRICO buka?",
                answer: "Kedai kami buka Senin - Sabtu pukul 08:00 - 22:00 dan Minggu pukul 09:00 - 21:00."
              },
              {
                question: "Apakah ANDRICO menerima kerjasama investasi?",
                answer: "Ya, kami terbuka untuk kerjasama investasi dalam pengembangan proyek perumahan dan komersial. Silakan hubungi kami untuk informasi lebih lanjut."
              },
              {
                question: "Bagaimana cara melakukan pemesanan untuk acara?",
                answer: "Anda dapat menghubungi kami melalui telepon atau email untuk diskusi lebih lanjut tentang kebutuhan acara Anda."
              },
              {
                question: "Apakah tersedia layanan delivery?",
                answer: "Ya, kami menyediakan layanan delivery untuk area tertentu. Silakan hubungi kami untuk informasi area coverage."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Tim profesional kami siap membantu mewujudkan visi dan proyek impian Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => window.location.href = "/"}
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg"
              >
                Kembali ke Beranda
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="tel:+6282382466172"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Telepon Sekarang
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              ANDRICO
            </h3>
            <p className="text-gray-400 mb-6">
              Profesional dalam Kedai Minuman Premium & Pengembangan Proyek
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 ANDRICO. All rights reserved. | 
                <a href="/privacy" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
                <a href="/terms" className="hover:text-white transition-colors ml-1">Terms & Conditions</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}