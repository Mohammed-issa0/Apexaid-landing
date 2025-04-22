"use client"

import { motion } from "framer-motion"
import { Activity, Heart, Brain, Zap, Baby, Clock } from "lucide-react"

export function UseCasesSection() {
  const useCases = [
    {
      title: "ضعف الانتصاب المستمر",
      description:
        "إذا كان الرجل يعاني من صعوبة في تحقيق أو الحفاظ على الانتصاب بشكل متكرر ومستمر، مما يؤثر على حياته الجنسية والعاطفية.",
      icon: <Activity className="h-6 w-6 text-white" />,
    },
    {
      title: "الضعف الجنسي المرتبط بحالات صحية",
      description:
        "يساعد Apexaid الرجال الذين يعانون من أمراض معينة تؤثر على تدفق الدم إلى القضيب، مثل السكري، ارتفاع ضغط الدم، أو أمراض القلب والأوعية الدموية.",
      icon: <Heart className="h-6 w-6 text-white" />,
    },
    {
      title: "ضعف الانتصاب المرتبط بالتقدم في العمر",
      description:
        "بعض الرجال يواجهون صعوبات في الانتصاب مع التقدم في السن، ويمكن أن يساعد Apexaid في تحسين القدرة الجنسية لديهم.",
      icon: <Clock className="h-6 w-6 text-white" />,
    },
    {
      title: "الحالات النفسية المرتبطة بالضعف الجنسي",
      description: "إذا كان ضعف الانتصاب ناتجًا عن القلق، التوتر، أو الاكتئاب.",
      icon: <Brain className="h-6 w-6 text-white" />,
    },
    {
      title: "انخفاض الرغبة الجنسية",
      description: "قد يرافق ضعف الانتصاب نقص في الرغبة الجنسية.",
      icon: <Zap className="h-6 w-6 text-white" />,
    },
    {
      title: "صعوبة في تحقيق الحمل للزوجة",
      description:
        "غالبا مايرافق ضعف النشاط الجنسي صعوبات في تلقيح بويضة الإمرأة عند الجماع, وهذا بسبب قلة او ضعف الحيوانات المنوية الذي يحققها الرجل الذي يعاني من الضعف الجنسي. مايؤخر أو يمنع الحمل لدى الزوجة.",
      icon: <Baby className="h-6 w-6 text-white" />,
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-4">
            الحالات المناسبة
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-6">
            الحالات التي يُنصح فيها باستخدام Apexaid
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تم تطوير Apexaid خصيصًا لمساعدة الرجال في الحالات التالية
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-100 card-hover"
            >
              <div className="bg-gradient-to-r from-primary to-primary-light p-4 flex items-center">
                <div className="bg-white/20 p-3 rounded-full">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mr-3">{useCase.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-right">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
