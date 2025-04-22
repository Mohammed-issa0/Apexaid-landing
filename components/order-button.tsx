"use client"

import { motion } from "framer-motion"
import { ArrowRight, ShoppingCart } from "lucide-react"

interface OrderButtonProps {
  onClick: () => void
  small?: boolean
}

export function OrderButton({ onClick, small = false }: OrderButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 4px 6px rgba(255, 77, 77, 0.2)",
          "0 10px 15px rgba(255, 77, 77, 0.3)",
          "0 4px 6px rgba(255, 77, 77, 0.2)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
      onClick={onClick}
      className={`bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold rounded-full shadow-lg transition duration-300 flex items-center justify-center ${
        small ? "text-sm py-2 px-4" : "text-xl py-4 px-10"
      }`}
    >
      {small ? (
        <>
          <ShoppingCart className="h-4 w-4 ml-1" />
          إطلبه الآن
        </>
      ) : (
        <>
          إطلبه الآن <ArrowRight className="mr-2 rtl:rotate-180" />
        </>
      )}
    </motion.button>
  )
}
