'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function ShortTermRentalForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    deviceType: '',
    rentalPeriod: '',
    startDate: '',
    endDate: '',
    purpose: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Implement the API call to submit the short-term rental request
  }

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="deviceType">Device Type</Label>
        <Select
          id="deviceType"
          name="deviceType"
          value={formData.deviceType}
          onValueChange={(value) => setFormData(prevState => ({ ...prevState, deviceType: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select device type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="smartphone">Smartphone</SelectItem>
            <SelectItem value="laptop">Laptop</SelectItem>
            <SelectItem value="tablet">Tablet</SelectItem>
            <SelectItem value="camera">Camera</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="rentalPeriod">Rental Period</Label>
        <Select
          id="rentalPeriod"
          name="rentalPeriod"
          value={formData.rentalPeriod}
          onValueChange={(value) => setFormData(prevState => ({ ...prevState, rentalPeriod: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select rental period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-week">1 Week</SelectItem>
            <SelectItem value="2-weeks">2 Weeks</SelectItem>
            <SelectItem value="1-month">1 Month</SelectItem>
            <SelectItem value="custom">Custom Period</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="startDate">Start Date</Label>
        <Input
          id="startDate"
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="endDate">End Date</Label>
        <Input
          id="endDate"
          name="endDate"
          type="date"
          value={formData.endDate}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="purpose">Purpose of Rental</Label>
        <Textarea
          id="purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleInputChange}
          placeholder="Please describe why you need to rent this device"
          required
        />
      </div>

      <Button type="submit" className="w-full">Submit Rental Request</Button>
    </motion.form>
  )
}

