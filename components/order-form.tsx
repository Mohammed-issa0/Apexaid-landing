"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, User, Phone, MapPin } from "lucide-react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
interface OrderFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
}

export function OrderForm({ isOpen, onClose, onSubmit }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    createdAt: new Date(),
    status: "غير معالج",  // إضافة حالة الطلب
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    try {
      await addDoc(collection(db, "formSubmissions"), formData)
      console.log("✔ تم رفع البيانات إلى Firestore:", formData)
  
      // إعادة تعيين الحقول
      setFormData({ name: "", phone: "", address: "" })
  
      // إظهار صفحة الشكر
      onSubmit()
    } catch (error) {
      console.error("❌ حدث خطأ أثناء رفع البيانات:", error)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-2xl font-bold text-primary mb-6 text-center">طلب منتج Apexaid</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <User className="h-4 w-4 ml-2 text-primary" />
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Phone className="h-4 w-4 ml-2 text-primary" />
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <MapPin className="h-4 w-4 ml-2 text-primary" />
                  العنوان
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="أدخل عنوانك بالتفصيل"
                ></textarea>
              </div>

              <div className="flex flex-row-reverse gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-primary to-primary-light text-white py-3 px-4 rounded-lg hover:from-primary-dark hover:to-primary transition-colors font-bold"
                >
                  إرسال الطلب
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors font-bold"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
