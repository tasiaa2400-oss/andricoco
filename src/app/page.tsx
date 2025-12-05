"use client";

import { motion } from "framer-motion";
import { ArrowRight, Coffee, Building, MapPin, Phone, Mail, Clock, Star, Heart, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-900 to-yellow-600 bg-clip-text text-transparent">
                  ANDRICO
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8 font-light">
                Profesional dalam Kedai Minuman Premium & Pengembangan Proyek
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto mb-12"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Bergerak di bidang Food & Beverage, khususnya penyajian minuman premium melalui konsep kedai modern yang nyaman dan kekinian. Kami menghadirkan beragam pilihan minuman seperti kopi, teh, susu signature, serta minuman segar lainnya yang diracik dari bahan berkualitas tinggi dan disajikan dengan standar profesional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-900 to-yellow-600 hover:from-blue-800 hover:to-yellow-500 text-white px-8 py-3 text-lg"
              >
                Hubungi Kami
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-3 text-lg"
              >
                Pelajari Lebih Lanjut
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-900 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-900 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Layanan Unggulan Kami
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Dua pilar bisnis yang saling melengkapi untuk memberikan layanan terbaik bagi pelanggan
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mb-6">
                    <Coffee className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Kedai Minuman Premium
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Konsep kedai modern yang nyaman dan kekinian dengan beragam pilihan minuman premium. Dari kopi specialty, teh berkualitas, hingga minuman signature yang diracik oleh barista profesional.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <Star className="w-5 h-5 text-yellow-500 mr-3" />
                      Kopi Specialty & Teh Premium
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Star className="w-5 h-5 text-yellow-500 mr-3" />
                      Minuman Signature Khas ANDRICO
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Star className="w-5 h-5 text-yellow-500 mr-3" />
                      Suasana Nyaman & Modern
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Pengembangan Proyek
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Layanan pengembangan proyek perumahan dan komersial dengan standar internasional. Dari perencanaan hingga eksekusi, kami memastikan setiap proyek diselesaikan dengan kualitas terbaik.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <Award className="w-5 h-5 text-yellow-500 mr-3" />
                      Housing Project Development
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Award className="w-5 h-5 text-yellow-500 mr-3" />
                      Progressive Advertising
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Award className="w-5 h-5 text-yellow-500 mr-3" />
                      Konsultasi & Perencanaan
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih ANDRICO?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menggabungkan kualitas premium dengan layanan profesional untuk memberikan pengalaman terbaik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Dibuat dengan Passion
              </h3>
              <p className="text-gray-600">
                Setiap produk dan layanan kami dibuat dengan dedikasi dan passion untuk memberikan yang terbaik bagi pelanggan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Inovasi Berkelanjutan
              </h3>
              <p className="text-gray-600">
                Selalu berinovasi dan mengikuti tren terkini untuk memberikan pengalaman yang modern dan relevan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Kualitas Terjamin
              </h3>
              <p className="text-gray-600">
                Standar kualitas tinggi dalam setiap aspek bisnis, dari produk hingga layanan pelanggan.
              </p>
            </motion.div>
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
              Siap Berkolaborasi dengan Kami?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Mari wujudkan proyek impian Anda atau nikmati pengalaman kedai minuman premium di ANDRICO
            </p>
            <Button
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Hubungi Kami Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Kami siap membantu dan menjawab pertanyaan Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Alamat</h3>
                    <p className="text-gray-600">
                      JL JENDR G SUBROTO LK I, Desa/Kelurahan Sentang, Kec. Kota Kisaran Timur, Kab. Asahan, Provinsi Sumatera Utara
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Telepon</h3>
                    <p className="text-gray-600">+6282382466172</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@andrico.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Jam Operasional</h3>
                    <p className="text-gray-600">Senin - Sabtu: 08:00 - 22:00</p>
                    <p className="text-gray-600">Minggu: 09:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-900 to-yellow-600 hover:from-blue-800 hover:to-yellow-500 text-white py-3"
                  >
                    Kirim Pesan
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
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
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
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