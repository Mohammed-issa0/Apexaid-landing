"use client"

import { motion } from "framer-motion"
import { Quote, ArrowRight, Clock, ThumbsUp, Heart } from "lucide-react"
import { UserCircle2 } from "lucide-react";
import Image from "next/image"

export function StorySection() {
  const storySteps = [
    {
      title: "المشكلة",
      description:
        "في زحمة الحياة اليومية، كان عمر يشعر بأن ضغوط العمل وأعباء الحياة قد بدأت تؤثر على طاقته وحيويته. لاحظ تراجعًا في حماسه وسعادته الزوجية، مما أثار قلقه.",
      icon: <Clock className="h-8 w-8 text-white" />,
      color: "from-red-500 to-red-600",
    },
    {
      title: "البحث عن حل",
      description:
        "بدأ البحث عن حلٍ يضمن له الأمان والفعالية، حتى اكتشف Apexaid الحل الطبيعي الذي أعاد له قوته وعزز من نشاطه دون أي آثار جانبية.",
      icon: <ArrowRight className="h-8 w-8 text-white" />,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: "النتائج",
      description: "خلال أيام قليلة، شعر عمر بفرق كبير، وعادت الابتسامة إلى وجهه ورضا شريكته أصبح أكبر من أي وقت مضى.",
      icon: <ThumbsUp className="h-8 w-8 text-white" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "الخلاصة",
      description: "Apexaid ليس مجرد منتج، بل هو بداية جديدة لعلاقة مليئة بالشغف والحميمية.",
      icon: <Heart className="h-8 w-8 text-white" />,
      color: "from-primary to-primary-light",
    },
  ]
  const listAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{
              duration: 60,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] border-[30px] border-white rounded-full opacity-5"
          />
          <motion.div
            animate={{
              rotate: -360,
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{
              duration: 50,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute -bottom-[200px] -left-[200px] w-[400px] h-[400px] border-[20px] border-white rounded-full opacity-5"
          />
        </div>

        <div className="py-16 bg-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ threshold: 0.7 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="bg-white p-8 rounded-xl shadow-sm"
        >
          <motion.div
            variants={listAnimation}
            className="flex items-center mb-6"
          >
            <UserCircle2 className="h-12 w-12 text-primary-light ml-4" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">قصة عمر</h3>
              <p className="text-gray-600">تجربة حقيقية مع apexaid</p>
            </div>
          </motion.div>

          <motion.div
            variants={listAnimation}
            className="space-y-4 text-gray-700"
          >
            <motion.p variants={listAnimation}>
              في زحمة الحياة اليومية، كان عمر يشعر بأن ضغوط العمل وأعباء الحياة
              قد بدأت تؤثر على طاقته وحيويته. لاحظ تراجعًا في حماسه وسعادته
              الزوجية، مما أثار قلقه.
            </motion.p>
            <motion.p variants={listAnimation}>
              لم يكن "عمر" يريد شيئًا أكثر من أن يعيد إشعال شرارة الثقة والحيوية
              التي كانت تميزه.
            </motion.p>
            <motion.p variants={listAnimation}>
              بدأ البحث عن حلٍ يضمن له الأمان والفعالية، حتى اكتشف apexaid، الحل
              الطبيعي الذي أعاد له قوته وعزز من نشاطه دون أي آثار جانبية.
            </motion.p>
            <motion.p
              variants={listAnimation}
              className="font-semibold text-primary-light text-xl"
            >
              خلال أيام قليلة، شعر عمر بفرق كبير، وعادت الابتسامة إلى وجهه ورضا
              شريكته أصبح أكبر من أي وقت مضى.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
      </div>
    </section>
  )
}
