'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavBar } from "@/components/nav-bar"
import { BulkSaleForm } from "@/components/bulk-sale-form"
import { useUser } from '@/context/AuthContext'

export default function BulkSalePage() {

  const user = useUser();

  if(!user) {
    window.location.href = "http://localhost:3000/auth/login";
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Bulk Sales</h1>
          <BulkSaleForm />
        </motion.div>
      </main>
    </div>
  )
}

