'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { useState } from 'react'
import { StarRating } from './star-rating'
import { CountdownTimer } from './countdown-timer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  id: string
  title: string
  image: string
  price: number
  originalPrice: number
  rating: number
  reviewCount: number
  endTime: string
  freeItems?: string[]
  condition: string
  warranty: string
}

export function ProductCard({
  id,
  title,
  image,
  price,
  originalPrice,
  rating,
  reviewCount,
  endTime,
  freeItems,
  condition,
  warranty
}: ProductCardProps) {
  const [isSaved, setIsSaved] = useState(false)
  const savings = originalPrice - price

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
        {savings > 0 && (
          <Badge className="absolute top-2 right-2 bg-red-600">
            Save ${savings.toFixed(2)}
          </Badge>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="min-h-[2.5rem]">
          <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
        </div>

        <StarRating rating={rating} reviewCount={reviewCount} />

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">${price.toFixed(2)}</span>
          {originalPrice > price && (
            <span className="text-sm text-gray-500 line-through">
              Was ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <p>Condition: {condition}</p>
          <p>Warranty: {warranty}</p>
        </div>

        {freeItems && freeItems.length > 0 && (
          <div className="text-sm text-green-600">
            {freeItems.length} free {freeItems.length === 1 ? 'item' : 'items'} with purchase
          </div>
        )}

        <CountdownTimer endTime={endTime} />

        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black"
            onClick={() => {
              // Add to cart logic here
            }}
          >
            Add to Cart
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

