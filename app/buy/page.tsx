'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NavBar } from "@/components/nav-bar"
import { ProductsGrid } from "@/components/products-grid"
import { FilterSidebar } from "@/components/filter-sidebar"
import { useUser } from '@/context/AuthContext'


export default function RefurbishedGadgetsPage() {
  const [filters, setFilters] = useState({})
  const user = useUser();


  useEffect(() => {
    if(!user) {
      window.location.href = "http://localhost:3000/auth/login";
    }
  }, [user]);
  

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Buy Gadgets</h1>
          <div className="ml-32 grid grid-cols-1 lg:grid-cols-[1000px_1fr] gap-8">
            <ProductsGrid key={0} category="refurbished" />
          </div>
        </motion.div>
      </main>
    </div>
  )
}

