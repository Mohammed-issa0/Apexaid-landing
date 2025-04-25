"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { OrderButton } from "@/components/order-button"
import { ChevronDown, Zap, Shield, Clock } from "lucide-react"

interface HeroSectionProps {
  onOrderClick: () => void
}

export function HeroSection({ onOrderClick }: HeroSectionProps) {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  // Particles for background animation
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
            }}
          />
        ))}

        {/* Gradient circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-white opacity-5"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-white opacity-5"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5 text-center lg:text-right"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            >
              استعد قوتك وشبابك <br />
              <span className="text-white/90">مع Apexaid</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 font-light"
            >
              أشعل الرغبة لديك وفاجئ شريكتك بليلة ملتهبة وطويلة مع قوتك ورغبتك الجامحة من اليوم
            </motion.p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <Zap className="h-5 w-5 text-yellow-400 ml-2" />
                <span>تأثير فوري</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <Shield className="h-5 w-5 text-green-400 ml-2" />
                <span>100% طبيعي</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <Clock className="h-5 w-5 text-blue-400 ml-2" />
                <span>يدوم 76 ساعة</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <OrderButton onClick={onOrderClick} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:w-2/5 relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(63, 29, 207, 0.5)",
                    "0 0 40px rgba(63, 29, 207, 0.8)",
                    "0 0 20px rgba(63, 29, 207, 0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="float"
                >
                  <Image
                    src="/images/apexaid-box.jpg"
                    alt="Apexaid منتج"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-2xl mx-auto"
                  />
                </motion.div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="hidden md:absolute -top-10 -right-10 bg-white text-primary font-bold py-2 px-4 rounded-full transform rotate-12 shadow-lg"
              >
                منتج حصري
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer bottom-4  flex justify-center items-center"
          onClick={scrollToNextSection}
        >
          <div className="flex flex-col items-center ">
            <span className="text-sm mb-2">اكتشف المزيد</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ChevronDown className="h-8 w-8" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
