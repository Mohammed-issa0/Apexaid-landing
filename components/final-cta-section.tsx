"use client"

import { motion } from "framer-motion"
import { OrderButton } from "@/components/order-button"

interface FinalCtaSectionProps {
  onOrderClick: () => void
}

export function FinalCtaSection({ onOrderClick }: FinalCtaSectionProps) {
  const remainingItems = 8

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          استعد قوتك وثقتك من اليوم
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8 max-w-3xl mx-auto"
        >
          لا تدع الفرصة تفوتك. فقط {remainingItems} قطع متبقية من المنتج بالسعر المخفض. اطلب الآن واستمتع بحياة جنسية
          أفضل.
        </motion.p>
        <div className="flex justify-center">
          <OrderButton onClick={onOrderClick} />
        </div>
      </div>
    </section>
  )
}
