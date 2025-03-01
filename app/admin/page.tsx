"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import axios from "axios"
import {
  BarChart3,
  Box,
  CheckCircle,
  ClipboardList,
  Home,
  Package,
  Plus,
  RefreshCw,
  Search,
  Settings,
  ShoppingBag,
  Truck,
  Users,
  Menu,
  Bell,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button2"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card2"
import { Input } from "@/components/ui/input2"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge2"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table2"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select2"
import { Textarea } from "@/components/ui/textarea2"
import { Label } from "@/components/ui/label2"
import type { Product, SellingRequest, LogisticsPartner } from "@/lib/type"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)
  const [isEditProductOpen, setIsEditProductOpen] = useState(false)
  const [isVerifyRequestOpen, setIsVerifyRequestOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedRequest, setSelectedRequest] = useState<SellingRequest | null>(null)

  let [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
   const fetchProducts = async() => {
        const productsList = await axios.get('http://localhost:4000/products');
        setProducts(productsList.data.products);
        setLoading(false);
    }
    fetchProducts();
  }, []);

  // Sample data for demonstration
//   const products: Product[] = [
//     { id: 1, name: "iPhone 13 Pro", category: "Smartphones", price: 899, stock: 15, status: "Active" },
//     { id: 2, name: "Samsung Galaxy S22", category: "Smartphones", price: 799, stock: 8, status: "Active" },
//     { id: 3, name: "MacBook Air M2", category: "Laptops", price: 1199, stock: 5, status: "Active" },
//     { id: 4, name: "Dell XPS 13", category: "Laptops", price: 999, stock: 0, status: "Out of Stock" },
//     { id: 5, name: "iPad Pro 12.9", category: "Tablets", price: 1099, stock: 3, status: "Low Stock" },
//   ]


  const sellingRequests: SellingRequest[] = [
    {
      id: 1,
      user: "John Doe",
      device: "iPhone 12",
      condition: "Good",
      description: "Minor scratches on screen, battery health 85%",
      images: ["/placeholder.svg?height=100&width=100"],
      status: "Pending",
      date: "2023-05-15",
    },
    {
      id: 2,
      user: "Jane Smith",
      device: "Samsung Galaxy S21",
      condition: "Excellent",
      description: "Like new, used for 3 months only",
      images: ["/placeholder.svg?height=100&width=100"],
      status: "Pending",
      date: "2023-05-16",
    },
    {
      id: 3,
      user: "Mike Johnson",
      device: "MacBook Pro 2019",
      condition: "Fair",
      description: "Keyboard issues, dent on the corner",
      images: ["/placeholder.svg?height=100&width=100"],
      status: "Pending",
      date: "2023-05-17",
    },
  ]

  const logisticPartners: LogisticsPartner[] = [
    { id: 1, name: "EcoShip Express", rating: 4.8 },
    { id: 2, name: "GreenDelivery", rating: 4.5 },
    { id: 3, name: "EarthFriendly Logistics", rating: 4.7 },
  ]

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsEditProductOpen(true);
  }

  const handleVerifyRequest = (request: SellingRequest) => {
    setSelectedRequest(request);
    setIsVerifyRequestOpen(true);
  }

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col bg-background border-r md:flex">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/admin" className="flex items-center gap-2 font-semibold">
            <RefreshCw className="h-5 w-5 text-primary" />
            <span>EcoGadget Admin</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 mb-4">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-muted-foreground">Dashboard</h2>
            <div className="space-y-1">
              <Button
                variant={activeTab === "overview" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("overview")}
              >
                <Home className="mr-2 h-4 w-4" />
                Overview
              </Button>
              <Button
                variant={activeTab === "products" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("products")}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Products
              </Button>
              <Button
                variant={activeTab === "requests" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("requests")}
              >
                <ClipboardList className="mr-2 h-4 w-4" />
                Selling Requests
                <Badge className="ml-auto" variant="secondary">
                  {sellingRequests.filter((r) => r.status === "Pending").length}
                </Badge>
              </Button>
              <Button
                variant={activeTab === "logistics" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("logistics")}
              >
                <Truck className="mr-2 h-4 w-4" />
                Logistics
              </Button>
            </div>
          </div>
          <div className="px-4 mb-4">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-muted-foreground">Management</h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Users
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <BarChart3 className="mr-2 h-4 w-4" />
                Analytics
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@ecogadget.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>New selling request from John Doe</DropdownMenuItem>
              <DropdownMenuItem>Low stock alert: iPad Pro 12.9</DropdownMenuItem>
              <DropdownMenuItem>Logistics partner assigned for pickup #1234</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                  <Box className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{products.length}</div>
                  <p className="text-xs text-muted-foreground">+2 added this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                  <ClipboardList className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {sellingRequests.filter((r) => r.status === "Pending").length}
                  </div>
                  <p className="text-xs text-muted-foreground">+5 since last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Refurbished Items</CardTitle>
                  <RefreshCw className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+3 this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Recycled Items</CardTitle>
                  <RefreshCw className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+8 this month</p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New selling request verified</p>
                        <p className="text-xs text-muted-foreground">
                          iPhone 12 from John Doe marked for refurbishment
                        </p>
                      </div>
                      <div className="text-xs text-muted-foreground">2h ago</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Package className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New product added</p>
                        <p className="text-xs text-muted-foreground">Refurbished MacBook Air added to inventory</p>
                      </div>
                      <div className="text-xs text-muted-foreground">5h ago</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Truck className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Logistics partner assigned</p>
                        <p className="text-xs text-muted-foreground">EcoShip Express assigned for pickup #1234</p>
                      </div>
                      <div className="text-xs text-muted-foreground">1d ago</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Low Stock Alert</CardTitle>
                  <CardDescription>Products that need attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead className="text-right">Stock</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products
                        .filter((p) => p.stock <= 5)
                        .map((product) => (
                          <TableRow key={product.id}>
                            <TableCell className="font-medium">{product.productName}</TableCell>
                            <TableCell className="text-right">{product.stock}</TableCell>
                            <TableCell className="text-right">
                              <Badge variant={product.stock === 0 ? "destructive" : "warning"}>
                                {product.stock === 0 ? "Out of Stock" : "Low Stock"}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === "products" && (
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Products</h2>
                <Button onClick={() => setIsAddProductOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" /> Add Product
                </Button>
              </div>
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="text-right">Stock</TableHead>
                       
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="font-medium">{product.productName}</TableCell>
                          <TableCell>{product.productType}</TableCell>
                          <TableCell className="text-right">${product.price}</TableCell>
                          <TableCell className="text-right">{product.stock}</TableCell>
                          
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" onClick={() => handleEditProduct(product)}>
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>{products.length}</strong> of <strong>{products.length}</strong> products
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous page</span>
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next page</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          )}

          {/* Selling Requests Tab */}
          {activeTab === "requests" && (
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Selling Requests</h2>
                <Select defaultValue="pending">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Requests</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Device</TableHead>
                        <TableHead>Condition</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sellingRequests.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell className="font-medium">{request.user}</TableCell>
                          <TableCell>{request.device}</TableCell>
                          <TableCell>{request.condition}</TableCell>
                          <TableCell>{request.date}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                request.status === "Approved"
                                  ? "success"
                                  : request.status === "Rejected"
                                    ? "destructive"
                                    : "secondary"
                              }
                            >
                              {request.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" onClick={() => handleVerifyRequest(request)}>
                              Verify
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>3</strong> of <strong>3</strong> requests
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous page</span>
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next page</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          )}

          {/* Logistics Tab */}
          {activeTab === "logistics" && (
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Logistics Management</h2>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Partner
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Logistics Partners</CardTitle>
                    <CardDescription>Manage your pickup and delivery partners</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Partner Name</TableHead>
                          <TableHead className="text-right">Rating</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {logisticPartners.map((partner) => (
                          <TableRow key={partner.id}>
                            <TableCell className="font-medium">{partner.name}</TableCell>
                            <TableCell className="text-right">{partner.rating}/5.0</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Pickups</CardTitle>
                    <CardDescription>Devices waiting for pickup</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sellingRequests
                        .filter((r) => r.status === "Pending")
                        .map((request) => (
                          <div key={request.id} className="flex items-center justify-between rounded-lg border p-4">
                            <div>
                              <h3 className="font-medium">{request.device}</h3>
                              <p className="text-sm text-muted-foreground">From: {request.user}</p>
                            </div>
                            <Button size="sm">Assign Pickup</Button>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Add Product Dialog */}
      <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogDescription>Add a new product to your inventory. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" placeholder="Enter product name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smartphones">Smartphones</SelectItem>
                    <SelectItem value="laptops">Laptops</SelectItem>
                    <SelectItem value="tablets">Tablets</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input id="price" type="number" placeholder="0.00" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="stock">Stock</Label>
                <Input id="stock" type="number" placeholder="0" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter product description" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Product Image</Label>
              <Input id="image" type="file" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="condition">Condition</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="refurbished">Refurbished</SelectItem>
                    <SelectItem value="used">Used - Like New</SelectItem>
                    <SelectItem value="used-good">Used - Good</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue="active">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="hidden">Hidden</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddProductOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Save Product</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Product Dialog */}
      <Dialog open={isEditProductOpen} onOpenChange={setIsEditProductOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>Update product information. Click save when you're done.</DialogDescription>
          </DialogHeader>
          {selectedProduct && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-name">Product Name</Label>
                  <Input id="edit-name" defaultValue={selectedProduct.productName} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-category">Category</Label>
                  <Select defaultValue={selectedProduct.category}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smartphones">Smartphones</SelectItem>
                      <SelectItem value="laptops">Laptops</SelectItem>
                      <SelectItem value="tablets">Tablets</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-price">Price ($)</Label>
                  <Input id="edit-price" type="number" defaultValue={selectedProduct.price} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-stock">Stock</Label>
                  <Input id="edit-stock" type="number" defaultValue={selectedProduct.stock} />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea id="edit-description" placeholder="Enter product description" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-image">Product Image</Label>
                <Input id="edit-image" type="file" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-condition">Condition</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="refurbished">Refurbished</SelectItem>
                      <SelectItem value="used">Used - Like New</SelectItem>
                      <SelectItem value="used-good">Used - Good</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* <div className="grid gap-2">
                  <Label htmlFor="edit-status">Status</Label>
                  <Select defaultValue={selectedProduct.status}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                      <SelectItem value="Low Stock">Low Stock</SelectItem>
                      <SelectItem value="Hidden">Hidden</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditProductOpen(false)}>
              Cancel
            </Button>
            <form onSubmit={(selectedProduct)=>handleEditProduct(selectedProduct)}>
            <Button type="submit">Save Changes</Button>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Verify Request Dialog */}
      <Dialog open={isVerifyRequestOpen} onOpenChange={setIsVerifyRequestOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Verify Selling Request</DialogTitle>
            <DialogDescription>
              Review device details and decide whether to accept for refurbishment or recycling.
            </DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium">User Information</h3>
                  <p className="text-sm">{selectedRequest.user}</p>
                  <p className="text-sm text-muted-foreground">user@example.com</p>
                  <p className="text-sm text-muted-foreground">+1 234 567 8900</p>
                </div>
                <div>
                  <h3 className="font-medium">Device Information</h3>
                  <p className="text-sm">{selectedRequest.device}</p>
                  <p className="text-sm text-muted-foreground">Condition: {selectedRequest.condition}</p>
                  <p className="text-sm text-muted-foreground">Submitted: {selectedRequest.date}</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Device Description</h3>
                <p className="text-sm border rounded-md p-3 bg-muted/50">{selectedRequest.description}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Device Images</h3>
                <div className="flex gap-2 overflow-auto pb-2">
                  {selectedRequest.images.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`Device image ${index + 1}`}
                      className="h-24 w-24 rounded-md object-cover border"
                    />
                  ))}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="decision">Decision</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select decision" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="refurbish">Accept for Refurbishment</SelectItem>
                    <SelectItem value="recycle">Accept for Recycling</SelectItem>
                    <SelectItem value="reject">Reject Request</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="logistics">Assign Logistics Partner</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select partner" />
                  </SelectTrigger>
                  <SelectContent>
                    {logisticPartners.map((partner) => (
                      <SelectItem key={partner.id} value={partner.id.toString()}>
                        {partner.name} ({partner.rating}/5)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Internal Notes</Label>
                <Textarea id="notes" placeholder="Add notes about this request" />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsVerifyRequestOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Confirm Decision</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

