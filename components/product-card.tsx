'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { useState, useEffect } from 'react'
import { StarRating } from './star-rating'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation' // Import useRouter

interface ProductCardProps {
  id: string
  title: string
  image: string
  price: number
  rating: number
  condition: string
  warranty: string
}

export function ProductCard({
  id,
  title,
  image,
  price,
  rating,
  condition,
  warranty
}: ProductCardProps) {
  const [isSaved, setIsSaved] = useState(false)
  const router = useRouter(); // Initialize router

  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative aspect-square">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="pt-3 p-4 space-y-3 pb-5">
        <h3 className="font-bold text-lg">{title}</h3>
        <StarRating rating={rating} />

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">₹{price.toFixed(2)}</span>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <p>Condition: {condition}</p>
          <p>Warranty: {warranty / 12} Years</p>
        </div>

        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black"
            onClick={() => router.push(`/products/${id}`)} 
          >
            Buy Now
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={isSaved ? 'text-red-600' : ''}
            onClick={() => setIsSaved(!isSaved)}
          >
            <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
