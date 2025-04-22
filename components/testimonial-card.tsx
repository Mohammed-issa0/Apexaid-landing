"use client"

import { motion } from "framer-motion"
import { Star, User, MapPin, Briefcase } from "lucide-react"

interface TestimonialCardProps {
  name: string
  age: number
  text: string
  rating: number
  occupation?: string
  location?: string
}

export function TestimonialCard({ name, age, text, rating, occupation, location }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-md"
    >
      <div className="flex items-start mb-6">
        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold ml-4 shadow-lg">
          <User className="h-8 w-8" />
        </div>
        <div className="text-right">
          <h3 className="font-bold text-2xl text-primary">{name}</h3>
          <p className="text-gray-500 mb-1">{age} سنة</p>

          {(occupation || location) && (
            <div className="flex flex-wrap gap-2 mt-1">
              {occupation && (
                <span className="inline-flex items-center text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  <Briefcase className="h-3 w-3 ml-1" />
                  {occupation}
                </span>
              )}
              {location && (
                <span className="inline-flex items-center text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  <MapPin className="h-3 w-3 ml-1" />
                  {location}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="relative mb-6">
        <div className="absolute -right-2 -top-2 text-primary opacity-20">
          <Quote className="h-8 w-8" />
        </div>
        <p className="text-gray-700 text-lg leading-relaxed text-right relative z-10">{text}</p>
      </div>

      <div className="flex justify-end">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
        ))}
      </div>
    </motion.div>
  )
}

// Add Quote component
function Quote(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  )
}
