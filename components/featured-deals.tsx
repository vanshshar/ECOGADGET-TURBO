'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
const iphone13 = require("./iphone13.png");
const macbook = require("./macbookm1.png");
const samsungs21 = require("./samsungs21.png");

const deals = [
  {
    id: 1,
    title: "Refurbished iPhone 13",
    price: 599,
    originalPrice: 799,
    image: iphone13,
    condition: "Like New",
    warranty: "1 Year"
  },
  {
    id: 2,
    title: "MacBook Air M1",
    price: 799,
    originalPrice: 999,
    image: macbook,
    condition: "Excellent",
    warranty: "1 Year"
  },
  {
    id: 3,
    title: "Samsung Galaxy S21",
    price: 449,
    originalPrice: 699,
    image: samsungs21,
    condition: "Good",
    warranty: "6 Months"
  }
]

export function FeaturedDeals() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          Featured Deals
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-600">
                    Save ${deal.originalPrice - deal.price}
                  </Badge>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-semibold">{deal.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-2xl font-bold text-green-600">${deal.price}</span>
                    <span className="text-sm text-gray-500 line-through">${deal.originalPrice}</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600">Condition: {deal.condition}</p>
                    <p className="text-sm text-gray-600">Warranty: {deal.warranty}</p>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-gray-50">
                  <div className="flex items-center justify-between w-full">
                    <Badge variant="outline">Free Shipping</Badge>
                    <Badge variant="outline" className="bg-green-50">In Stock</Badge>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

