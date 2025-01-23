'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavBar } from "@/components/nav-bar"
import { ProductList } from "@/components/product-list"
import { FilterSidebar } from "@/components/filter-sidebar"
import { Breadcrumb } from "@/components/breadcrumb"
import { SortBar } from "@/components/sort-bar"

export default function BuyPage() {
  const [filters, setFilters] = useState({
    category: [],
    price: [0, 100000],
    brand: [],
    condition: [],
    warranty: []
  })
  const [sort, setSort] = useState('relevance')

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto py-4 px-4">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Buy', href: '/buy' },
          ]} 
        />
        <div className="flex gap-8 mt-4">
          <FilterSidebar filters={filters} setFilters={setFilters} />
          <div className="flex-1">
            <SortBar sort={sort} setSort={setSort} totalResults={569} />
            <ProductList filters={filters} sort={sort} />
          </div>
        </div>
      </main>
    </div>
  )
}

