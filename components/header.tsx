"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { OrderButton } from "@/components/order-button"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  onOrderClick: () => void
}

export function Header({ onOrderClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative h-10">
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`font-extrabold text-2xl ${scrolled ? "text-primary" : "text-white"}`}
              >
                <span className="bg-gradient-to-r from-primary to-primary-light text-white px-3 py-1 rounded-md shadow-md">
                  Apex
                </span>
                <span className={`${scrolled ? "text-primary-light" : "text-white"} font-light`}>aid</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
          <nav className={`flex items-center space-x-6 space-x-reverse ${scrolled ? "text-primary" : "text-white"}`}>
            <button
              onClick={() => scrollToSection("benefits")}
              className="hover:text-primary-light transition-colors font-medium"
            >
              الفوائد
            </button>
            <button
              onClick={() => scrollToSection("ingredients")}
              className="hover:text-primary-light transition-colors font-medium"
            >
              المكونات
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-primary-light transition-colors font-medium"
            >
              التجارب
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-primary-light transition-colors font-medium"
            >
              الأسئلة الشائعة
            </button>
          </nav>
          <OrderButton onClick={onOrderClick} small />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className={`p-2 rounded-md ${scrolled ? "text-primary" : "text-white"}`}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-primary hover:bg-primary/10 py-2 px-4 rounded-md text-right"
              >
                الفوائد
              </button>
              <button
                onClick={() => scrollToSection("ingredients")}
                className="text-primary hover:bg-primary/10 py-2 px-4 rounded-md text-right"
              >
                المكونات
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-primary hover:bg-primary/10 py-2 px-4 rounded-md text-right"
              >
                التجارب
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-primary hover:bg-primary/10 py-2 px-4 rounded-md text-right"
              >
                الأسئلة الشائعة
              </button>
              <div className="pt-2">
                <OrderButton onClick={onOrderClick} />
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
