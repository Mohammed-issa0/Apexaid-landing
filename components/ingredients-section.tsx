"use client"

import { motion } from "framer-motion"
import { Check, Leaf, Sparkles } from "lucide-react"
import Image from "next/image"
import prod from '../public/images/prod.jpg'
export function IngredientsSection() {
  const ingredients = [
    {
      name: "دبس التوت وحبوب اللقاح",
      description: "مصدر طبيعي للطاقة والمغذيات الدقيقة التي تعزز الحيوية العامة.",
      color: "bg-blue-100 text-gray-700 border-blue-200",
    },
    {
      name: "الايبيميديوم والخروب والشوفان",
      description: "لتحفيز الرغبة الجنسية وتحسين الدورة الدموية.",
      color: "bg-blue-100 text-gray-700 border-blue-200",
    },
    {
      name: "الزنجبيل والقرفة والقراص",
      description: "لتعزيز الانتصاب وزيادة تدفق الدم وتحفيز الجهاز العصبي.",
      color: "bg-blue-100 text-gray-700 border-blue-200",
    },
    {
      name: "جينكو بيلوبا واليقطين وعشب الكولا",
      description: "لتحسين التركيز الذهني والأداء الجنسي وزيادة التحمل.",
      color: "bg-blue-100 text-gray-700 border-blue-200",
    },
    {
      name: "غذاء ملكات النحل والجينسنغ الأحمر",
      description: "لرفع مستوى التستوستيرون وزيادة الطاقة الذكورية.",
      color: "bg-blue-100 text-gray-700 border-blue-200",
    },
    {
      name: "الماكا، جذور سندريلا، القرنفل",
      description: "لتقوية الرغبة الجنسية وتحسين الحالة النفسية.",
      color: "bg-blue-100 text-gray-700 border-blue-200",
    },
    {
      name: "معادن وفيتامينات B",
      description: "الكالسيوم، النحاس، الحديد، الفوسفور، وفيتامينات B2، B3، B5، B6، B12.",
      color: "bg-blue-100 text-gray-700 border-blue-200",
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
    <section
      id="ingredients"
      className="py-20 bg-gradient-to-r from-primary to-primary-light text-white overflow-hidden"
    >
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

        <div className="relative z-10">
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
              className="inline-block bg-white/10 text-white font-semibold px-6 py-3 rounded-full mb-4 backdrop-blur-sm"
            >
              <Leaf className="h-4 w-4 inline-block ml-2" />
              <span className="relative inline-flex">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20"></span>
                <span className="relative">مكونات طبيعية 100%</span>
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              مكونات طبيعية فائقة القوة... تركيبة استثنائية فعالة
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-white/30 mx-auto mb-6"
            />

            <p className="text-xl max-w-4xl mx-auto text-white/80">
              يحتوي معجون Apexaid العشبي على مزيج نادر وقوي من الأعشاب الطبيعية والمكونات النباتية المدروسة بعناية،
              ليمنحك دعمًا متكاملا للطاقة الجنسية والبدنية، دون أي آثار جانبية.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-2/5"
            >
              {/* <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="relative h-[400px] rounded-xl ">
                  <Image
                    src={prod}
                    alt="Apexaid منتج"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center p-6">
                    <motion.div
                      className="text-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                        <Sparkles className="h-4 w-4 ml-2" />
                        معتمد من وزارة الصحة
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:w-3/5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ingredients.map((ingredient, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className={`${ingredient.color} p-4 rounded-xl border shadow-sm`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 flex-shrink-0 mt-1">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{ingredient.name}</h4>
                        <p className="text-right">{ingredient.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-right">تركيبة علمية متكاملة</h3>
                    <p className="text-xl text-right">
                      تمنحك كل جرعة يومية (15 غرامًا) من Apexaid ما يصل إلى 60% من احتياجاتك اليومية من فيتامين B لتمنح
                      جسمك ما يحتاجه عندما تشعر بالإرهاق، ضعف الأداء، أو فقدان التركيز.
                    </p>
                    <p className="text-xl font-bold mt-4 text-right">
                      تركيبة معززة مصممة خصيصًا لتحسين الأداء الجنسي وزيادة القدرة على التحمل واستعادة طاقتك في أقوى
                      صورها.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
