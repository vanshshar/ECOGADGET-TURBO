'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NavBar } from "@/components/nav-bar"
import { SellDeviceForm } from "@/components/sell-device-form"
import { useUser } from '@/context/AuthContext'

export default function SellDevicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Sell Your Device</h1>
          <SellDeviceForm />
        </motion.div>
      </main>
    </div>
  )
}

