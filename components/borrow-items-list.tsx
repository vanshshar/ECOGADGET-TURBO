'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Calendar, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/star-rating"

export function BorrowItemsList() {
  const [location, setLocation] = useState('')
  const [items, setItems] = useState([
    {
      id: '1',
      title: 'MacBook Pro 16"',
      image: '/placeholder.svg',
      price: 100,
      priceUnit: 'day',
      location: 'San Francisco, CA',
      distance: '0.8',
      rating: 4.8,
      reviews: 12,
      owner: {
        name: 'John D.',
        rating: 4.9,
        verified: true
      },
      availability: {
        from: '2025-01-20',
        to: '2025-02-20'
      }
    },
    // Add more items...
  ])

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Here you would typically reverse geocode the coordinates
        // to get the actual address
        console.log(position.coords)
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Input
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full"
            />
          </div>
          <Button onClick={getUserLocation}>
            <MapPin className="w-4 h-4 mr-2" />
            Use my location
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="relative h-48 mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                <h3 className="font-medium text-lg">{item.title}</h3>
                
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-2xl font-bold">₹{item.price}</span>
                  <span className="text-sm text-gray-600">per {item.priceUnit}</span>
                </div>

                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                  <span>({item.distance} miles away)</span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <StarRating rating={item.rating} />
                  <span className="text-sm text-gray-600">({item.reviews} reviews)</span>
                </div>

                <div className="border-t mt-4 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg"
                        alt={item.owner.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium">{item.owner.name}</p>
                        <StarRating rating={item.owner.rating} size="sm" />
                      </div>
                    </div>
                    {item.owner.verified && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                </div>

                <div className="border-t mt-4 pt-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.availability.from).toLocaleDateString()}</span>
                    </div>
                    <span>to</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{new Date(item.availability.to).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4">Request to Borrow</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

