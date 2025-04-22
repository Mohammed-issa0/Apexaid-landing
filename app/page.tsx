"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LimitedQuantitySection } from "@/components/limited-quantity-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { StorySection } from "@/components/story-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CertificationSection } from "@/components/certification-section"
import { IngredientsSection } from "@/components/ingredients-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { OrderSection } from "@/components/order-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { ProductAnimation } from "@/components/product-animation"
import { OrderForm } from "@/components/order-form"
import { ThankYouPage } from "@/components/thank-you-page"
import { Footer } from "@/components/footer"

export default function ApexaidLanding() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const openOrderForm = () => setIsOrderFormOpen(true)
  const closeOrderForm = () => setIsOrderFormOpen(false)

  const handleOrderSubmit = () => {
    setIsOrderFormOpen(false)
    setShowThankYou(true)
  }

  const closeThankYou = () => {
    setShowThankYou(false)
  }

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden font-tajawal">
      <Header onOrderClick={openOrderForm} />
      <main className="pt-16">
        <HeroSection onOrderClick={openOrderForm} />
        <LimitedQuantitySection />
        <ProductAnimation />
        <UseCasesSection />
        <StorySection />
        <BenefitsSection onOrderClick={openOrderForm} />
        <CertificationSection />
        <IngredientsSection />
        <TestimonialsSection />
        <OrderSection onOrderClick={openOrderForm} />
        <FaqSection />
        <FinalCtaSection onOrderClick={openOrderForm} />
      </main>
      <Footer />
      <OrderForm isOpen={isOrderFormOpen} onClose={closeOrderForm} onSubmit={handleOrderSubmit} />
      <ThankYouPage isOpen={showThankYou} onClose={closeThankYou} />
    </div>
  )
}
