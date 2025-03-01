'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Currency, Heart } from 'lucide-react'
import { useState } from 'react'
import { StarRating } from './star-rating'
// import { CountdownTimer } from './countdown-timer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import axios from "axios";
import { useUser } from '@/context/AuthContext'
import { useEffect } from 'react'

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
  productName,
  image,
  price,
  rating,
  condition,
  warranty
}: ProductCardProps) {
  const [isSaved, setIsSaved] = useState(false)
  // const savings = originalPrice - price

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
          alt='img'
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        {/* {savings > 0 && (
          <Badge className="absolute top-2 right-2 bg-red-600">
            Save ₹{savings.toFixed(2)}
          </Badge> */}
        {/* )} */}
      </div>

      <div className="pt-3 p-4 space-y-3 pb-5">
        <div className="min-h-[2.5rem]">
          <h3 className="font-bold text-lg">{productName}</h3>
        </div>

        <StarRating rating={rating} />

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">₹{price.toFixed(2)}</span>
          {/* {originalPrice > price && (
            <span className="text-sm text-gray-500 line-through">
              Was ₹{originalPrice.toFixed(2)}
            </span>
          )} */}
        </div>
        <p className='text-sm font-normal text-red-500'>Deal ends soon!</p>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Condition: {condition}</p>
          <p>Warranty: {warranty / 12} Years</p>
        </div>

        {/* {freeItems && freeItems.length > 0 && (
          <div className="text-sm text-green-600">
            {freeItems.length} free {freeItems.length === 1 ? 'item' : 'items'} with purchase
          </div> */}
        {/* )} */}

        

        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black"
            onClick={
              async (e) => {
              let amount: number | string = price.toString();
              amount = parseFloat(amount);
              amount = amount.toFixed(2).toString();
              amount = amount.split(".")[0] + amount.split(".")[1];
              amount = Number(amount);
                
              const response1: any = await axios.post("http://localhost:4000/orders/create", {
                amount, currency:"INR"
              });

              const options = {
                "key": response1.data.key,
                "amount": response1.data.amount,
                "currency": "INR",
                "name": "EcoGadget",
                "order_id": response1.data.id,
                // "handler": async function (res: any) {

                //     console.log(res);

                //     const result = await axios({
                //       method: "post",
                //       data: {
                //         orderId: res.razorpay_order_id,
                //         amount: amount,
                //         razorpaySignature: res.razorpay_signature,
                //         paymentId: res.razorpay_payment_id,
                //         receiver: user.id,
                //       },
                //       url: "http://localhost:4000/orders/checkout"
                //     });

                //     const response: any = await result.data;
                    
                //     console.log(response);
                // }
                "callback_url": "http://localhost:3000/orders"
              };

              const rzp1 = new window.Razorpay(options);
              rzp1.open();
              e.preventDefault();
            }}
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

