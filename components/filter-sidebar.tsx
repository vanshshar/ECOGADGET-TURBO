'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FilterSidebarProps {
  filters: any
  setFilters: (filters: any) => void
}

export function FilterSidebar({ filters, setFilters }: FilterSidebarProps) {
  const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Sony', 'LG', 'Motorola']
  const conditions = ['Like New', 'Excellent', 'Good', 'Fair']
  const warranties = ['2 Years', '1 Year', '6 Months', '3 Months']

  const handlePriceChange = (value: number[]) => {
    setFilters({ ...filters, price: value.length === 2 ? value : [0, 100000] })
  }

  const handleBrandChange = (brand: string) => {
    const newBrands = filters.brand?.includes(brand)
      ? filters.brand.filter((b: string) => b !== brand)
      : [...(filters.brand ?? []), brand]
    setFilters({ ...filters, brand: newBrands })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-64 flex-shrink-0"
    >
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-semibold text-lg mb-4">Filters</h2>
        
        <Accordion type="single" collapsible defaultValue="price">
          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Slider
                  defaultValue={filters.price ?? [0, 100000]}
                  max={100000}
                  step={1000}
                  value={filters.price ?? [0, 100000]}
                  onValueChange={handlePriceChange}
                />
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={filters.price?.[0] ?? 0}
                    onChange={(e) => handlePriceChange([+e.target.value, filters.price?.[1] ?? 100000])}
                    className="w-24"
                  />
                  <span>to</span>
                  <Input
                    type="number"
                    value={filters.price?.[1] ?? 100000}
                    onChange={(e) => handlePriceChange([filters.price?.[0] ?? 0, +e.target.value])}
                    className="w-24"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brand">
            <AccordionTrigger>Brand</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={brand}
                      checked={filters.brand?.includes(brand) ?? false}
                      onCheckedChange={() => handleBrandChange(brand)}
                    />
                    <Label htmlFor={brand}>{brand}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="condition">
            <AccordionTrigger>Condition</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {conditions.map((condition) => (
                  <div key={condition} className="flex items-center space-x-2">
                    <Checkbox
                      id={condition}
                      checked={filters.condition?.includes(condition) ?? false}
                      onCheckedChange={() => {
                        const newConditions = filters.condition?.includes(condition)
                          ? filters.condition.filter((c: string) => c !== condition)
                          : [...(filters.condition ?? []), condition]
                        setFilters({ ...filters, condition: newConditions })
                      }}
                    />
                    <Label htmlFor={condition}>{condition}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="warranty">
            <AccordionTrigger>Warranty</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {warranties.map((warranty) => (
                  <div key={warranty} className="flex items-center space-x-2">
                    <Checkbox
                      id={warranty}
                      checked={filters.warranty?.includes(warranty) ?? false}
                      onCheckedChange={() => {
                        const newWarranties = filters.warranty?.includes(warranty)
                          ? filters.warranty.filter((w: string) => w !== warranty)
                          : [...(filters.warranty ?? []), warranty]
                        setFilters({ ...filters, warranty: newWarranties })
                      }}
                    />
                    <Label htmlFor={warranty}>{warranty}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.div>
  )
}

