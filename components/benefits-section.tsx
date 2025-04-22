"use client"

import { motion } from "framer-motion"
import { Zap, Heart, Clock, Shield, Users, Sparkles, Battery } from "lucide-react"
import { OrderButton } from "@/components/order-button"

interface BenefitsSectionProps {
  onOrderClick: () => void
}

export function BenefitsSection({ onOrderClick }: BenefitsSectionProps) {
  const benefits = [
    {
      title: "تحسين القدرة على الانتصاب",
      description:
        "يعمل Apexaid على زيادة تدفق الدم إلى القضيب، مما يساعد الرجل في الحصول على انتصاب أقوى وأكثر استمرارية.",
      icon: <Heart className="h-6 w-6 text-white" />,
      color: "from-blue-500 to-red-600",
    },
    {
      title: "قذف أقوى",
      description:
        "مكونات هذا المنتج تعزز قوة الخصيتين وضخهم للسائل المنوي مع الغذاء الذي يحتويه المنتج واللذي يزيد كمية السائل المنوي مع جودة الحيوانات المنوية.",
      icon: <Zap className="h-6 w-6 text-white" />,
      color: "from-amber-500 to-blue-600",
    },
    {
      title: "علاقة أطول",
      description:
        "يحل المنتج مشكلة سرعة القذف حيث أنه يزيد الرغبة والطاقة الجنسية مما يزيد قدرة الرجل على إقامة علاقة لمدة أطول.",
      icon: <Clock className="h-6 w-6 text-white" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "تحسين الأداء الجنسي والثقة بالنفس",
      description:
        "يساعد في تحسين الأداء الجنسي وتعزيز الثقة بالنفس وتقليل التوتر النفسي المرتبط بعدم القدرة على تحقيق الانتصاب.",
      icon: <Shield className="h-6 w-6 text-white" />,
      color: "from-blue-500 to-green-600",
    },
    {
      title: "تعزيز العلاقة الزوجية",
      description:
        "يؤدي تعزيز الأداء الجنسي إلى تحسين العلاقة بين الشريكين، ويقلل من المشكلات المتعلقة بالإحباط الجنسي أو العاطفي.",
      icon: <Users className="h-6 w-6 text-white" />,
      color: "from-purple-500 to-blue-600",
    },
    {
      title: "استجابة أفضل للتحفيز الجنسي",
      description: "يجعل Apexaid الجسم أكثر استجابة للتحفيز الجنسي، مما يزيد من رضا الرجل وشريكته.",
      icon: <Sparkles className="h-6 w-6 text-white" />,
      color: "from-blue-500 to-pink-600",
    },
    {
      title: "آثار طويلة المدى",
      description: "تدوم تأثيرات مكونات Apexaid لفترات أطول حتى 36 ساعة مما يسمح بمرونة أكبر في توقيت العلاقة.",
      icon: <Battery className="h-6 w-6 text-white" />,
      color: "from-teal-500 to-blue-600",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="inline-block bg-primary/10 text-primary font-semibold px-6 py-3 rounded-full mb-4"
          >
            <span className="relative inline-flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-20"></span>
              <span className="relative">فوائد مذهلة</span>
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-6">ماذا سيحقق لك Apexaid ؟</h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-6"
          />

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تركيبة فريدة من الأعشاب الطبيعية المختارة بعناية لتحسين الأداء الجنسي وزيادة الرغبة والقوة
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(30, 15, 122, 0.2)" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-100 h-full"
            >
              <div className={`bg-gradient-to-r ${benefit.color} p-4 flex items-center`}>
                <div className="bg-white/20 p-3 rounded-full">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mr-3">{benefit.title}</h3>
              </div>
              <div className="p-6 flex flex-col h-full">
                <p className="text-gray-600 text-right flex-grow">{benefit.description}</p>

                <motion.div
                  className="mt-4 h-1 w-16 bg-gradient-to-r from-primary/30 to-primary-light/30 self-end"
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-2xl mb-8 max-w-3xl mx-auto shadow-lg border border-red-200">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <p className="text-xl text-red-600 font-bold">
                قد لاتتمكن من الحصول على هذا المنتج في وقت لاحق بسبب إنتهاء الكمية أو فقدان المنتج. لذا إضمن حصولك على
                عبوتك الآن.
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center items-center">

          <OrderButton onClick={onOrderClick}/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
