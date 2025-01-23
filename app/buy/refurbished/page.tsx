'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavBar } from "@/components/nav-bar"
import { ProductsGrid } from "@/components/products-grid"
import { FilterSidebar } from "@/components/filter-sidebar"

export default function RefurbishedGadgetsPage() {
  const [filters, setFilters] = useState({})

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Refurbished Gadgets</h1>
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            <FilterSidebar filters={filters} setFilters={setFilters} />
            <ProductsGrid filters={filters} category="refurbished" />
          </div>
        </motion.div>
      </main>
    </div>
  )
}

