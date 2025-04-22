"use client"

import type React from "react"

import { motion } from "framer-motion"
import Slider from "react-slick"
import { TestimonialCard } from "@/components/testimonial-card"
import { Quote, ChevronRight, ChevronLeft } from "lucide-react"

// Import CSS for react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function NextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} !flex items-center justify-center !w-10 !h-10 !bg-white rounded-full shadow-lg !text-primary z-10 !right-2`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronRight className="h-6 w-6" />
    </div>
  )
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} !flex items-center justify-center !w-10 !h-10 !bg-white rounded-full shadow-lg !text-primary z-10 !left-2`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLeft className="h-6 w-6" />
    </div>
  )
}

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "محمد",
      age: 45,
      text: "والله ما كنت متوقع النتيجة هذي! بعد أسبوع واحد بس من استخدام Apexaid رجعت لي حيويتي وقوتي زي أيام الشباب. زوجتي مستانسة جداً بالتغيير اللي صار.",
      rating: 5,
      occupation: "مهندس",
      location: "الرياض",
    },
    {
      name: "خالد",
      age: 52,
      text: "كنت أعاني من مشاكل في الانتصاب بسبب مرض السكري، جربت Apexaid وكانت النتيجة مذهلة! الحين أقدر أستمتع بحياتي الزوجية بدون أي مشاكل.",
      rating: 5,
      occupation: "طبيب",
      location: "جدة",
    },
    {
      name: "سعود",
      age: 38,
      text: "المنتج خرافي! ما توقعت أبداً إنه راح يكون فيه فرق كبير، لكن بعد استخدامي له لمدة أسبوعين صرت أحس بطاقة وحيوية ما شعرت فيها من سنين.",
      rating: 5,
      occupation: "رجل أعمال",
      location: "الدمام",
    },
    {
      name: "عبدالله",
      age: 49,
      text: "كنت متردد في البداية، بس الحمدلله إني طلبته. المكونات طبيعية 100% وما فيه أي آثار جانبية. رجعت لي ثقتي بنفسي وزوجتي تلاحظ الفرق الكبير.",
      rating: 5,
      occupation: "مدرس",
      location: "المدينة المنورة",
    },
    {
      name: "فهد",
      age: 41,
      text: "يا رجال المنتج ذا غير حياتي! كنت أتعب بسرعة وما أقدر أستمر وقت طويل، الحين صرت أقدر أستمتع مع زوجتي لفترات أطول وبقوة أكبر. أنصح فيه بشدة!",
      rating: 5,
      occupation: "موظف حكومي",
      location: "أبها",
    },
  ]

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: false,
    prevArrow: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="!bottom-[-40px]"> {dots} </ul>
      </div>
    ),
    customPaging: () => <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white transition-colors mt-8"></div>,
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-blue-50">
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
              <span className="relative">تجارب العملاء</span>
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-6">ماذا يقول عملاؤنا عن Apexaid</h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-6"
          />

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            آلاف الرجال استعادوا ثقتهم وقوتهم مع Apexaid، إليك بعض تجاربهم
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Large quote icon */}
          <div className="absolute -top-10 -right-10 opacity-10 z-0">
            <Quote className="h-32 w-32 text-primary" />
          </div>

          <div className="bg-gradient-to-r from-primary to-primary-light p-1 rounded-2xl shadow-xl relative z-10">
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-4 md:p-8">
              <div className="testimonial-slider-container" dir="rtl">
                <Slider {...sliderSettings}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-2" dir="rtl">
                      <TestimonialCard
                        name={testimonial.name}
                        age={testimonial.age}
                        text={testimonial.text}
                        rating={testimonial.rating}
                        occupation={testimonial.occupation}
                        location={testimonial.location}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute -bottom-10 -left-10 z-0 hidden md:block"
          >
            <div className="bg-primary-light h-20 w-20 rounded-full opacity-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
