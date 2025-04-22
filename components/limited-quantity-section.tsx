"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, AlertTriangle } from "lucide-react"

export function LimitedQuantitySection() {
  const [remainingItems, setRemainingItems] = useState(8)
  const [hours, setHours] = useState(23)
  const [minutes, setMinutes] = useState(59)
  const [seconds, setSeconds] = useState(59)

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else if (minutes > 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      } else if (hours > 0) {
        setHours(hours - 1)
        setMinutes(59)
        setSeconds(59)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [hours, minutes, seconds])

  return (
    <section className="py-12 bg-gradient-to-r from-[#f5f5f5] to-[#e0e7ff]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#1e0f7a] relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%231e0f7a' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="h-8 w-8 text-red-500 mr-2" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e0f7a]">عرض محدود الكمية والوقت</h2>
            </div>

            <p className="text-lg md:text-xl text-gray-800 mb-8 text-center max-w-4xl mx-auto">
              يُسمح لنا إستيراد <span className="font-bold text-[#1e0f7a]">150 قطعة فقط</span> من منتج Apexaid كل شهر.
              وهذا لقلة توفر المنتج بسبب ندرة الأعشاب المستخدمة فيه مع الطلب الكبير عليها. لذلك لاتضيع هذا المنتج عليك
              واحجز عبوتك قبل نفاذ الكمية.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#1e0f7a] text-white py-4 px-8 rounded-xl text-xl font-bold flex items-center shadow-lg"
              >
                <span className="text-3xl font-extrabold mr-2">{remainingItems}</span>/150 قطعة متبقية
              </motion.div>

              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="relative">
                  <div className="bg-[#1e0f7a] text-white py-3 px-6 rounded-xl flex flex-col items-center shadow-lg">
                    <span className="text-3xl font-extrabold">{hours.toString().padStart(2, "0")}</span>
                    <span className="text-sm">ساعة</span>
                  </div>
                  <Clock className="absolute -top-3 -right-3 h-6 w-6 text-red-500 bg-white rounded-full p-1" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#1e0f7a] text-white py-3 px-6 rounded-xl flex flex-col items-center shadow-lg"
                >
                  <span className="text-3xl font-extrabold">{minutes.toString().padStart(2, "0")}</span>
                  <span className="text-sm">دقيقة</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#1e0f7a] text-white py-3 px-6 rounded-xl flex flex-col items-center shadow-lg"
                >
                  <span className="text-3xl font-extrabold">{seconds.toString().padStart(2, "0")}</span>
                  <span className="text-sm">ثانية</span>
                </motion.div>
              </div>
            </div>

            <div className="text-center mt-6">
              <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-bold animate-pulse">
                العرض ينتهي قريباً - احجز نسختك الآن
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
