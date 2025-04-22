"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Clock, Truck, CreditCard, Gift, Tag, CheckCircle } from "lucide-react"
import { OrderButton } from "@/components/order-button"
import { Check, Timer } from "lucide-react";
import { CircleAlert } from "lucide-react";

interface OrderSectionProps {
  onOrderClick: () => void
}

export function OrderSection({ onOrderClick }: OrderSectionProps) {
  const remainingItems = 8

  const benefits = [
    { icon: <ShieldCheck className="h-5 w-5 text-green-600" />, text: "منتج طبيعي 100% خالي من أي تركيبات كيميائية" },
    { icon: <ShieldCheck className="h-5 w-5 text-green-600" />, text: "مناسب لمرضى السكري والضغط وأمراض القلب" },
    { icon: <ShieldCheck className="h-5 w-5 text-green-600" />, text: "خالي من أي تأثيرات جانبية" },
    { icon: <ShieldCheck className="h-5 w-5 text-green-600" />, text: "موثق من وزارة الصحة" },
    { icon: <ShieldCheck className="h-5 w-5 text-green-600" />, text: "محقق لضمان الجودة" },
    { icon: <ShieldCheck className="h-5 w-5 text-green-600" />, text: "ضمان الماركة المعتمدة" },
    { icon: <Truck className="h-5 w-5 text-green-600" />, text: "شحن مجاني لكافة أنحاء السعودية" },
    { icon: <Clock className="h-5 w-5 text-green-600" />, text: "توصيل سريع وآمن" },
    { icon: <CheckCircle className="h-5 w-5 text-green-600" />, text: "ضمان الإستبدال أو الإرجاع" },
  ]
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };
  const listAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };
  const containerVariants1 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants1 = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };
  return (
    <>
    {/* first price */}
        <motion.div
      id="price"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="py-16 bg-gradient-to-br from-green-50 to-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 text-center flex flex-col items-center">
            {/* <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mb-4 tracking-wide"
            >
              السعر
            </motion.h2> */}

            <motion.div variants={itemVariants} className="relative mb-8">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 relative z-10 flex gap-2 items-center">
                <span className="text-xl sm:2xl md:text-3xl mr-3">السعر :</span>
                <span className="bg-primary-light text-white px-1 rounded-md py-2">
                  400 <span className="text-2xl">ريال</span>
                </span>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-200 font-extrabold text-8xl opacity-10">
                فرصة
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-2 text-red-600 mb-1"
            >
              <Timer className="h-6 w-6 animate-pulse" />
              <span className="font-semibold text-lg">
                8/150 قطعة متبقية فقط
              </span>
            </motion.div>
            <motion.p
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                ease: "easeInOut",
              }}
              className="text-sm text-black "
            >
              (يوجد لديك خصم خاص في الأسفل)
            </motion.p>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 mt-10 gap-4 text-right items-center justify-center"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 shadow-sm hover:shadow-lg hover:rotate-2 cursor-pointer"
                >
                  <Check className="h-7 w-7 font-bold text-white bg-blue-700 rounded-full flex-shrink-0" />
                  <span className="text-gray-700">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
    {/* urgancy */}
              <div className="bg-blue-100 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ threshold: 0.7 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        <motion.div
          variants={listAnimation}
          className="flex items-center justify-center mb-6"
        >
          <CircleAlert className="h-14 w-14 text-red-600 mr-2" />
        </motion.div>
        <motion.p
          variants={listAnimation}
          className="text-lg text-gray-700 mb-4 font-bold"
        >
          هل ستترك هذه الفرصة وتعود لحياتك العادية بدون متعة وحيوية جنسية مع شريكتك أم أنك ستأخذ خطوتك لتحسين نشاطك الجنسي وتفاجئها بقوتك ورغبتك الجامحة التي اشتاقت إليها لقضاء أجمل أمسية ملتهبة معك من جديد؟
        </motion.p>
        <motion.div variants={listAnimation}>
          <motion.div
          className="font-bold"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            8/150 قطعة متبقية
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
    {/* Second price */}
    <motion.div
      id="price"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants1}
      className="py-16 bg-gradient-to-r from-red-400 to-red-600"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants1}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 text-center flex flex-col items-center">
            <motion.h2
              variants={itemVariants1}
              className="text-4xl font-bold text-gray-900 mb-4 tracking-wide"
            >
              عرض خاص <span className="text-red-600">محدود!</span>
            </motion.h2>

            <motion.div
              variants={itemVariants1}
              className="flex items-center justify-center gap-2 text-red-600 mb-8"
            >
              <Timer className="h-6 w-6 animate-pulse" />
              <span className="font-semibold text-lg">
                8/150 قطعة متبقية فقط
              </span>
            </motion.div>

            <motion.div variants={itemVariants1} className="relative mb-8">
              <div className="text-6xl font-bold text-gray-900 relative z-10">
                <span className="bg-red-600 text-white px-1 py-2 rounded-md ">
                  299 <span className="text-xl sm:text-2xl">ريال</span>
                </span>

                {/* <span className="text-2xl text-gray-600 ml-2">دينار</span> */}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-200 font-extrabold text-8xl opacity-10">
                فرصة
              </div>
              <div className="text-xl text-red-600 line-through mt-[25px]">
                400 ريال
              </div>
              <p className="text-sm text-gray-500 mt-2">
                (وفر 33% لفترة محدودة)
              </p>
            </motion.div>

            <motion.div variants={itemVariants1}>
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                  ease: "easeInOut",
                }}
              >
                <OrderButton
                 onClick={onOrderClick}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
    {/* msg */}
    <motion.div
      className="bg-blue-400 p-4 text-center"
      whileInView={{ opacity: 1, y: 0 }} // تظهر عند دخول العنصر في نطاق العرض
      initial={{ opacity: 0, y: 50 }} // تبدأ غير مرئية وتنزلق للأعلى
      transition={{ duration: 0.8, ease: "easeOut" }} // مدة الحركة وسلاستها
    >
      <div className="flex justify-center">
        <h2 className="text-2xl font-semibold text-white py-4 text-center">
          إذا ظهر لك خصم 33% أعلى هذه الرسالة, فهذا يعني أنه تبقى أقل من  10 قطع
          متوفرة الآن. ويمكنك الحصول على قطعة بثلثي السعر الأصلي في حال طلبت
          المنتج قبل نفاذ القطع المتبقية.
        </h2>
      </div>
    </motion.div>
    </>
    
  )
}
