"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function ProductAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Particles array
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    // Create particles
    const createParticles = () => {
      const particleCount = 50
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1,
          speedX: Math.random() * 3 - 1.5,
          speedY: Math.random() * 3 - 1.5,
          color: `rgba(30, 15, 122, ${Math.random() * 0.5 + 0.1})`,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Move particles
        p.x += p.speedX
        p.y += p.speedY

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        // Draw particle
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(30, 15, 122, ${0.2 - distance / 500})`
            ctx.lineWidth = 1
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      particles.length = 0
      createParticles()
    }

    window.addEventListener("resize", handleResize)
    createParticles()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center gradient-text mb-16"
        >
          تركيبة علمية متطورة
        </motion.h2>

        <div className="relative h-[500px] md:h-[600px]">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative z-10"
            >
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#1e0f7a]/10">
                <div className="flex justify-center mb-6">
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
                      src="/images/prod2.jpg"
                      alt="Apexaid منتج"
                      width={300}
                      height={300}
                      className="rounded-xl"
                    />
                  </motion.div>
                </div>
                <p className="text-lg text-center text-gray-800 mb-6">
                  تركيبة فريدة من الأعشاب الطبيعية المختارة بعناية لتحسين الأداء الجنسي وزيادة الرغبة والقوة
                </p>
                <div className="flex justify-center space-x-4 space-x-reverse">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                    className="bg-[#1e0f7a] text-white py-3 px-6 rounded-lg font-bold"
                  >
                    100% طبيعي وآمن
                  </motion.div>
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="bg-red-600 text-white py-3 px-6 rounded-lg font-bold"
                  >
                    فعالية مضمونة
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
