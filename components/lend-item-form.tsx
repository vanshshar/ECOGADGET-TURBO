'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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

export function LendItemForm() {
  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    description: '',
    condition: '',
    dailyRate: '',
    location: '',
    availableFrom: '',
    availableTo: '',
    images: [],
    identityProof: null,
    addressProof: null
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleFileUpload = (e) => {
    const { name, files } = e.target
    if (name === 'images') {
      setFormData(prevState => ({
        ...prevState,
        images: [...prevState.images, ...files]
      }))
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: files[0]
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
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
          <CardTitle>List Your Item for Lending</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="itemName">Item Name</Label>
              <Input
                id="itemName"
                name="itemName"
                value={formData.itemName}
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
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="cameras">Cameras</SelectItem>
                  <SelectItem value="audio">Audio Equipment</SelectItem>
                  <SelectItem value="computers">Computers</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
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
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
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
              <Label htmlFor="images">Item Images</Label>
              <Input
                id="images"
                name="images"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                required
              />
              <p className="text-sm text-gray-600">Upload at least 3 clear images of your item</p>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h3 className="font-medium">Verification Documents</h3>
              
              <div className="space-y-2">
                <Label htmlFor="identityProof">Identity Proof</Label>
                <Input
                  id="identityProof"
                  name="identityProof"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                  required
                />
                <p className="text-sm text-gray-600">Upload a government-issued ID (Aadhar, PAN, etc.)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="addressProof">Address Proof</Label>
                <Input
                  id="addressProof"
                  name="addressProof"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                  required
                />
                <p className="text-sm text-gray-600">Upload a recent utility bill or rental agreement</p>
              </div>
            </div>

            <Button type="submit" className="w-full">List Item</Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

