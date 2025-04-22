"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <motion.div
                whileHover={{ scale: 1.05 }}
                className={`font-extrabold text-2xl ${"text-white"} mb-3`}
              >
                <span className="bg-white text-primary-light px-3 py-1 rounded-md shadow-md">
                  Apex
                </span>
                <span className={`${ "text-white"} font-light`}>aid</span>
              </motion.div>
            <p className="text-white/80 mb-4 text-right">المنتج الطبيعي الأول لتعزيز القوة الجنسية والانتصاب للرجال</p>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-right"
          >
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="text-white/80 hover:text-white transition-colors">
                  الفوائد
                </a>
              </li>
              <li>
                <a href="#ingredients" className="text-white/80 hover:text-white transition-colors">
                  المكونات
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
                  تجارب العملاء
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-white transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
             
            </ul>
          </motion.div>

          
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60">© {new Date().getFullYear()} جميع الحقوق محفوظة - Apexaid</p>
        </div>
      </div>
    </footer>
  )
}
