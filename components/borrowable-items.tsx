'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Shield, Clock, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { StarRating } from "@/components/star-rating"

interface BorrowableItemsProps {
  sort: string
}

export function BorrowableItems({ sort }: BorrowableItemsProps) {
  // This would typically come from an API
  const items = [
    {
      id: '1',
      title: 'MacBook Pro 16" (2023)',
      image: '/placeholder.svg',
      dailyRate: 299,
      weeklyRate: 1499,
      monthlyRate: 4999,
      rating: 4.8,
      reviews: 156,
      condition: 'Excellent',
      location: 'Mumbai, Maharashtra',
      distance: '2.5 km',
      specs: [
        '16-inch Liquid Retina XDR display',
        'M2 Pro chip',
        '32GB unified memory',
        '1TB SSD storage',
      ],
      warranty: 'Device protection plan included',
      verifiedLender: true,
      availability: {
        from: '2025-01-20',
        to: '2025-03-20'
      }
    },
    // Add more items as needed
  ]

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6">
            <div className="flex gap-6">
              <div className="w-[200px] h-[200px] relative flex-shrink-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
                {item.verifiedLender && (
                  <Badge className="absolute top-2 left-2 bg-blue-600">
                    Verified Lender
                  </Badge>
                )}
              </div>

              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-medium">{item.title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <StarRating rating={item.rating} />
                      <span className="text-sm text-gray-600">
                        {item.reviews} reviews
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">Daily Rate</div>
                    <div className="text-2xl font-bold">₹{item.dailyRate}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">Weekly Rate</div>
                    <div className="text-2xl font-bold">₹{item.weeklyRate}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">Monthly Rate</div>
                    <div className="text-2xl font-bold">₹{item.monthlyRate}</div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <ul className="space-y-1">
                    {item.specs.map((spec, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-600 rounded-full" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4" />
                      {item.warranty}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      Available: {new Date(item.availability.from).toLocaleDateString()} - {new Date(item.availability.to).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {item.location} ({item.distance})
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <Button className="w-[200px]">Request to Borrow</Button>
                  <Button variant="outline">Contact Lender</Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

