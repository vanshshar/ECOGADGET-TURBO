'use client'

import { motion } from 'framer-motion'
import { ProductCard } from './product-card'
const iphone13 = require("./iphone13.png");
const macbook = require("./macbookm1.png");
const samsungs21 = require("./samsungs21.png");


const products = [
  {
    id: '1',
    title: 'Refurbished iPhone 13 Pro - 128GB',
    image: iphone13,
    price: 699.99,
    originalPrice: 999.99,
    rating: 4.5,
    reviewCount: 128,
    endTime: '2025-01-16T19:22:05',
    freeItems: ['Premium Case', 'Screen Protector'],
    condition: 'Excellent',
    warranty: '1 Year'
  },
  {
    id: '2',
    title: 'MacBook Air M1 - Certified Refurbished',
    image: macbook,
    price: 799.99,
    originalPrice: 999.99,
    rating: 4.8,
    reviewCount: 256,
    endTime: '2025-01-16T19:22:05',
    freeItems: ['Laptop Sleeve'],
    condition: 'Like New',
    warranty: '1 Year'
  },
  {
    id: '3',
    title: 'Samsung Galaxy S21 - Renewed',
    image: samsungs21,
    price: 449.99,
    originalPrice: 799.99,
    rating: 4.3,
    reviewCount: 89,
    endTime: '2025-01-16T19:22:05',
    condition: 'Good',
    warranty: '6 Months'
  }
]

export function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProductCard {...product} />
        </motion.div>
      ))}
    </div>
  )
}

