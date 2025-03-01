// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { Heart } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { StarRating } from "@/components/star-rating"

// interface ProductListProps {
//   filters: any
//   sort: string
// }

// export function ProductList({ filters, sort }: ProductListProps) {
//   // This would typically come from an API
//   const products = [
//     {
//       id: '1',
//       title: 'iPhone 15 (Black, 128 GB)',
//       image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-18%20162528-ckddJNhwtkTSiZ52PL6m820zJZjidH.png',
//       price: 58999,
//       originalPrice: 69900,
//       rating: 4.6,
//       reviews: 8632,
//       ratings: 237913,
//       specs: [
//         '128 GB ROM',
//         '15.49 cm (6.1 inch) Super Retina XDR Display',
//         '48MP + 12MP | 12MP Front Camera',
//         'A16 Bionic Chip, 6 Core Processor',
//       ],
//       warranty: '1 year warranty for phone and 1 year warranty for in Box Accessories',
//       assured: true,
//       bestseller: true,
//     },
//     // Add more products...
//   ]

//   return (
//     <div className="space-y-4">
//       {products.map((product) => (
//         <motion.div
//           key={product.id}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-lg shadow p-4"
//         >
//           <div className="flex gap-6">
//             <div className="w-48 h-48 relative flex-shrink-0">
//               <Image
//                 src={product.image || "/placeholder.svg"}
//                 alt={product.title}
//                 fill
//                 className="object-contain"
//               />
//               {product.bestseller && (
//                 <Badge className="absolute top-2 left-2 bg-green-600">
//                   Bestseller
//                 </Badge>
//               )}
//             </div>
            
//             <div className="flex-1">
//               <div className="flex justify-between">
//                 <div>
//                   <h3 className="text-lg font-medium">{product.title}</h3>
//                   <div className="flex items-center gap-4 mt-1">
//                     <StarRating rating={product.rating} />
//                     <span className="text-sm text-gray-600">
//                       {product.ratings.toLocaleString()} Ratings & {product.reviews.toLocaleString()} Reviews
//                     </span>
//                   </div>
//                 </div>
//                 <Button variant="ghost" size="icon">
//                   <Heart className="h-5 w-5" />
//                 </Button>
//               </div>

//               <ul className="mt-4 space-y-1">
//                 {product.specs.map((spec, index) => (
//                   <li key={index} className="text-sm text-gray-600">
//                     • {spec}
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-4">
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-2xl font-bold">₹{product.price.toLocaleString()}</span>
//                   {product.originalPrice > product.price && (
//                     <>
//                       <span className="text-sm text-gray-500 line-through">
//                         ₹{product.originalPrice.toLocaleString()}
//                       </span>
//                       <span className="text-sm text-green-600">
//                         {Math.round((1 - product.price / product.originalPrice) * 100)}% off
//                       </span>
//                     </>
//                   )}
//                 </div>
//                 <p className="text-sm text-gray-600 mt-1">{product.warranty}</p>
//               </div>

//               <div className="mt-4 flex items-center gap-4">
//                 <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
//                   Add to Cart
//                 </Button>
//                 <Button variant="outline">Buy Now</Button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   )
// }

