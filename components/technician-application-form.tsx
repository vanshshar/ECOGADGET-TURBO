'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import axios from 'axios'
import Swal from 'sweetalert2'

export function TechnicianApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    specialties: '',
    availability: '',
    resume: null,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    setFormData(prevState => ({
      ...prevState,
      resume: file
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await axios({
      method: 'post',
      url: 'http://localhost:4000/repair/technician',
      data: formData
    });

    const response = result.data;

    await Swal.fire({
      toast: false,
      timer: 2000,
      showConfirmButton: true,
      title: response.msg,
      icon: response.success ? 'success' : 'error'
    });

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      specialties: '',
      availability: '',
      resume: null,
    })

    return;
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
        <Label htmlFor="experience">Years of Experience</Label>
        <Input
          id="experience"
          name="experience"
          type="number"
          value={formData.experience}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="specialties">Specialties</Label>
        <Select
          id="specialties"
          name="specialties"
          value={formData.specialties}
          onValueChange={(value) => setFormData(prevState => ({ ...prevState, specialties: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your specialties" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="smartphones">Smartphones</SelectItem>
            <SelectItem value="laptops">Laptops</SelectItem>
            <SelectItem value="tablets">Tablets</SelectItem>
            <SelectItem value="desktops">Desktops</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="availability">Availability</Label>
        <Select
          id="availability"
          name="availability"
          value={formData.availability}
          onValueChange={(value) => setFormData(prevState => ({ ...prevState, availability: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-time">Full-time</SelectItem>
            <SelectItem value="part-time">Part-time</SelectItem>
            <SelectItem value="weekends">Weekends only</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="resume">Upload Resume (PDF)</Label>
        <Input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          required
        />
      </div>

      <Button type="submit" className="w-full">Submit Application</Button>
    </motion.form>
  )
}

