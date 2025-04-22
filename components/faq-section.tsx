"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import Image from "next/image"
export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "كم مدة استخدام Apexaid للحصول على نتائج؟",
      answer:
        "يبدأ معظم المستخدمين بملاحظة تحسن في الأداء الجنسي خلال 30-60 دقيقة من تناول المنتج. للحصول على أفضل النتائج على المدى الطويل، ينصح باستخدام المنتج بانتظام لمدة 1-3 أشهر.",
    },
    {
      question: "هل يمكن استخدام Apexaid مع أدوية أخرى؟",
      answer:
        "Apexaid منتج طبيعي 100% ولا يتعارض عادة مع معظم الأدوية، لكن ينصح دائماً باستشارة الطبيب قبل استخدامه إذا كنت تتناول أدوية أخرى، خاصة أدوية الضغط أو القلب.",
    },
    {
      question: "هل هناك آثار جانبية لاستخدام Apexaid؟",
      answer:
        "Apexaid مصنوع من مكونات طبيعية 100% ولا يسبب آثار جانبية للغالبية العظمى من المستخدمين. في حالات نادرة جداً، قد يحدث حساسية لأحد المكونات الطبيعية.",
    },
    {
      question: "كيف يتم استخدام Apexaid؟",
      answer:
        "ينصح بتناول 15 غرام (ملعقة) من معجون Apexaid يومياً، ويفضل تناوله قبل 30-60 دقيقة من النشاط الجنسي للحصول على أفضل النتائج.",
    },
    {
      question: "هل يمكن لمرضى السكري استخدام Apexaid؟",
      answer:
        "نعم، Apexaid آمن لمرضى السكري حيث أنه مصنوع من مكونات طبيعية 100% ولا يحتوي على مواد كيميائية تؤثر على مستويات السكر في الدم.",
    },
  ]

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-r from-[#f5f5f5] to-[#e0e7ff]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-4">
            الأسئلة الشائعة
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-6">كل ما تريد معرفته عن Apexaid</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            إليك إجابات على الأسئلة الأكثر شيوعاً حول منتج Apexaid
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4 border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-right py-4 flex justify-between items-center group"
              >
                <div className="flex items-center">
                  <HelpCircle
                    className={`h-5 w-5 ml-3 ${activeIndex === index ? "text-primary-light" : "text-gray-400"}`}
                  />
                  <span
                    className={`font-bold text-lg ${activeIndex === index ? "text-primary" : "text-gray-700"} group-hover:text-primary-light transition-colors`}
                  >
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180 text-primary-light" : "text-gray-400"
                  } group-hover:text-primary-light`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pr-11 text-gray-600"
                  >
                    <p className="py-3 text-right">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-6">
                  <motion.div   
                    className="relative rounded-xl overflow-hidden"
                  >
                    <Image
                      src="/images/prod2.jpg"
                      alt="Apexaid منتج"
                      width={400}
                      height={400}
                      className="rounded-xl"
                    />
                  </motion.div>
                </div>
      </div>
    </section>
  )
}
