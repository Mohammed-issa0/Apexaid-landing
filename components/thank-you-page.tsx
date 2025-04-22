"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, X, ShoppingBag, Truck, Phone } from "lucide-react"
import Script from "next/script"
interface ThankYouPageProps {
  isOpen: boolean
  onClose: () => void
}

export function ThankYouPage({ isOpen, onClose }: ThankYouPageProps) {
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

            <div className="text-center py-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="mx-auto mb-6 bg-green-100 p-4 rounded-full inline-flex"
              >
                <CheckCircle className="h-16 w-16 text-green-600" />
              </motion.div>

              <h3 className="text-2xl font-bold text-primary mb-4">شكراً لطلبك منتج Apexaid</h3>
              <p className="text-gray-600 mb-6">
                تم استلام طلبك بنجاح وسيتم التواصل معك قريباً لتأكيد الطلب وتحديد موعد التوصيل.
              </p>

              <div className="space-y-4 text-right mb-6">
                <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                  <ShoppingBag className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-800">تم تسجيل طلبك</h4>
                    <p className="text-sm text-blue-600">سيتم مراجعة طلبك والتواصل معك قريباً</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg">
                  <Truck className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-amber-800">التوصيل خلال 2-3 أيام عمل</h4>
                    <p className="text-sm text-amber-600">سيتم توصيل المنتج إلى العنوان المحدد</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-green-800">خدمة العملاء</h4>
                    <p className="text-sm text-green-600">للاستفسار يرجى التواصل على الرقم: 0501234567</p>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="bg-gradient-to-r from-primary to-primary-light text-white py-3 px-8 rounded-lg hover:from-primary-dark hover:to-primary transition-colors font-bold"
              >
                العودة للصفحة الرئيسية
              </button>
            </div>
            <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID'); 
          fbq('track', 'PageView');
        `}
      </Script>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
