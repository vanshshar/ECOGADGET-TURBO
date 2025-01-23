'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SortBarProps {
  sort: string
  setSort: (sort: string) => void
  totalResults: number
}

export function SortBar({ sort, setSort, totalResults }: SortBarProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <p className="text-sm text-gray-600">
        Showing 1 - 24 of {totalResults} results
      </p>
      <Select value={sort} onValueChange={setSort}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="relevance">Relevance</SelectItem>
          <SelectItem value="price_low">Price: Low to High</SelectItem>
          <SelectItem value="price_high">Price: High to Low</SelectItem>
          <SelectItem value="newest">Newest First</SelectItem>
          <SelectItem value="rating">Rating</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

