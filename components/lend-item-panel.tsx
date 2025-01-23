'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LendItemPanel() {
  const [formData, setFormData] = useState({
    deviceName: '',
    category: '',
    condition: '',
    description: '',
    dailyRate: '',
    weeklyRate: '',
    monthlyRate: '',
    location: '',
    availableFrom: '',
    availableTo: '',
    images: [],
    specifications: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setFormData(prevState => ({
      ...prevState,
      images: files
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>List Your Device for Lending</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="deviceName">Device Name</Label>
                <Input
                  id="deviceName"
                  name="deviceName"
                  value={formData.deviceName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="laptop">Laptop</SelectItem>
                    <SelectItem value="smartphone">Smartphone</SelectItem>
                    <SelectItem value="tablet">Tablet</SelectItem>
                    <SelectItem value="camera">Camera</SelectItem>
                    <SelectItem value="gaming">Gaming Console</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specifications">Specifications</Label>
              <Textarea
                id="specifications"
                name="specifications"
                value={formData.specifications}
                onChange={handleInputChange}
                placeholder="List key specifications (e.g., processor, memory, storage)"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="condition">Condition</Label>
              <Select
                value={formData.condition}
                onValueChange={(value) => setFormData(prev => ({ ...prev, condition: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="like-new">Like New</SelectItem>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Provide detailed description of your device"
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dailyRate">Daily Rate (₹)</Label>
                <Input
                  id="dailyRate"
                  name="dailyRate"
                  type="number"
                  value={formData.dailyRate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weeklyRate">Weekly Rate (₹)</Label>
                <Input
                  id="weeklyRate"
                  name="weeklyRate"
                  type="number"
                  value={formData.weeklyRate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlyRate">Monthly Rate (₹)</Label>
                <Input
                  id="monthlyRate"
                  name="monthlyRate"
                  type="number"
                  value={formData.monthlyRate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availableFrom">Available From</Label>
                <Input
                  id="availableFrom"
                  name="availableFrom"
                  type="date"
                  value={formData.availableFrom}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availableTo">Available To</Label>
                <Input
                  id="availableTo"
                  name="availableTo"
                  type="date"
                  value={formData.availableTo}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Device Images</Label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <Input
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <Label htmlFor="images" className="cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Upload at least 3 clear images of your device
                  </p>
                </Label>
              </div>
            </div>

            <Button type="submit" className="w-full">List Device</Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

