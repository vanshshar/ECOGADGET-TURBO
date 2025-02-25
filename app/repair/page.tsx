'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavBar } from "@/components/nav-bar"
import { RepairForm } from "@/components/repair-form"
import { TechnicianApplicationForm } from "@/components/technician-application-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wrench, UserCircle } from 'lucide-react'
import { useUser } from '@/context/AuthContext'
import ProtectedRoute from '@/context/ProtectedRoute'

export default function RepairPage() {
  const [activeTab, setActiveTab] = useState("user");

  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="user" className="space-y-8">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="user" onClick={() => setActiveTab("user")}>
                <UserCircle className="w-5 h-5 mr-2" />
                Request Repair
              </TabsTrigger>
              <TabsTrigger value="technician" onClick={() => setActiveTab("technician")}>
                <Wrench className="w-5 h-5 mr-2" />
                Join as Technician
              </TabsTrigger>
            </TabsList>

            <TabsContent value="user">
              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Repair</CardTitle>
                </CardHeader>
                <CardContent>
                  <RepairForm />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technician">
              <Card>
                <CardHeader>
                  <CardTitle>Apply as a Technician</CardTitle>
                </CardHeader>
                <CardContent>
                  <TechnicianApplicationForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
    </ProtectedRoute>
  )
}

