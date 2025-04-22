"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import Image from "next/image"
export function CertificationSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#100a4a] text-white px-6 py-2 rounded-full mb-6">
            <Award className="h-5 w-5" />
            <span>معتمد عالمياً</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#100a4a]">
            Apexaid واحد من أفضل 20 معالج ومقوي جنسي طبيعي بحسب منظمة الصحة العالمية وشهادات المنتج المعتمدة من وزارة
            الصحة في السعودية
          </h2>
          <div className="flex justify-center mt-6">
                            <motion.div
                              animate={{
                                boxShadow: [
                                  "0 0 20px rgba(30, 15, 122, 0.3)",
                                  "0 0 40px rgba(30, 15, 122, 0.5)",
                                  "0 0 20px rgba(30, 15, 122, 0.3)",
                                ],
                              }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                              className="relative rounded-xl overflow-hidden"
                            >
                              <Image
                                src="/images/prod.jpg"
                                alt="Apexaid منتج"
                                width={300}
                                height={300}
                                className="rounded-xl"
                              />
                            </motion.div>
                          </div>
        </motion.div>
      </div>
    </section>
  )
}
