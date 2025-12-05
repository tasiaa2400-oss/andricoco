"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Target, Award, Users, Clock, CheckCircle, Building, Coffee, Lightbulb, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
                Tentang ANDRICO
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Perusahaan profesional yang berdedikasi untuk memberikan layanan terbaik dalam bidang Food & Beverage serta pengembangan proyek berkualitas tinggi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ANDRICO didirikan dengan visi untuk menjadi perusahaan terdepan yang menggabungkan dua pilar bisnis utama: Food & Beverage premium dan pengembangan proyek berkualitas. Kami memulai perjalanan ini dengan komitmen kuat untuk memberikan pengalaman terbaik bagi setiap pelanggan.
                </p>
                <p>
                  Di bidang Food & Beverage, kami menghadirkan konsep kedai modern yang nyaman dan kekinian, dengan fokus pada kualitas minuman premium yang diracik dari bahan-bahan terbaik. Setiap cangkir kopi, teh, atau minuman signature kami adalah hasil dari passion dan dedikasi tim profesional.
                </p>
                <p>
                  Sementara itu, di sektor pengembangan proyek, kami membawa pengalaman dan keahlian dalam mewujudkan berbagai proyek perumahan dan komersial dengan standar internasional. Dari perencanaan hingga eksekusi, kami memastikan setiap detail diperhatikan dengan seksama.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-yellow-100 rounded-2xl flex items-center justify-center">
                <Building className="w-32 h-32 text-blue-900" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visi & Misi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Panduan kami dalam setiap langkah dan keputusan bisnis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Visi Kami
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Menjadi perusahaan terdepan yang diakui secara internasional dalam memberikan layanan premium Food & Beverage serta solusi pengembangan proyek yang inovatif dan berkelanjutan, dengan fokus pada kepuasan pelanggan dan kontribusi positif bagi masyarakat.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Misi Kami
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Menyediakan produk dan layanan berkualitas tinggi yang melebihi ekspektasi pelanggan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Mengembangkan inovasi berkelanjutan dalam setiap aspek bisnis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Membangun tim profesional yang berdedikasi dan berintegritas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Berkontribusi positif bagi pengembangan ekonomi lokal</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Inti Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip yang memandu setiap tindakan dan keputusan kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Kualitas
              </h3>
              <p className="text-gray-600">
                Standar kualitas tertinggi dalam setiap produk dan layanan yang kami tawarkan
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
                <HandHeart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Integritas
              </h3>
              <p className="text-gray-600">
                Kejujuran dan transparansi dalam setiap interaksi bisnis kami
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
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Inovasi
              </h3>
              <p className="text-gray-600">
                Terus berinovasi untuk memberikan solusi terbaik dan terkini
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Pelanggan
              </h3>
              <p className="text-gray-600">
                Kepuasan pelanggan adalah prioritas utama dalam setiap keputusan kami
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pengalaman & Keahlian
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim profesional dengan pengalaman bertahun-tahun di bidangnya
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <Coffee className="w-12 h-12 text-blue-900 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Food & Beverage Expertise
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Barista Professional</h4>
                      <p className="text-gray-600">Tim barista berpengalaman dengan sertifikasi internasional</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Control</h4>
                      <p className="text-gray-600">Standar kualitas tinggi untuk setiap produk yang disajikan</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Menu Development</h4>
                      <p className="text-gray-600">Inovasi menu yang mengikuti tren terkini dan selera lokal</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Customer Service</h4>
                      <p className="text-gray-600">Layanan pelanggan prima dengan training berkelanjutan</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <Building className="w-12 h-12 text-blue-900 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Project Development
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Project Management</h4>
                      <p className="text-gray-600">Manajemen proyek profesional dengan timeline yang jelas</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Architecture & Design</h4>
                      <p className="text-gray-600">Tim arsitek dan desain berpengalaman dengan portfolio terbaik</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                      <p className="text-gray-600">Kontrol kualitas ketat sesuai standar internasional</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Legal & Permit</h4>
                      <p className="text-gray-600">Pengurusan perizinan dan legalitas yang lengkap</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sertifikasi & Legalitas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepatuhan terhadap standar industri dan regulasi yang berlaku
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Sertifikasi Food Safety
                </h3>
                <p className="text-gray-600 text-sm">
                  Sertifikasi keamanan pangan internasional untuk menjamin kualitas produk
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ISO 9001:2015
                </h3>
                <p className="text-gray-600 text-sm">
                  Sertifikasi manajemen mutu untuk konsistensi layanan terbaik
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Legalitas Lengkap
                </h3>
                <p className="text-gray-600 text-sm">
                  Perizinan usaha lengkap sesuai regulasi pemerintah Indonesia
                </p>
              </Card>
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
              Bergabunglah dengan Perjalanan Kami
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Mari bersama-sama menciptakan pengalaman terbaik dan membangun masa depan yang lebih baik
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
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
              >
                Hubungi Kami
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