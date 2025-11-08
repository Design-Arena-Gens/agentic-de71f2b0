'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard, Users, ShoppingCart, DollarSign,
  TrendingUp, Settings, LogOut, Menu, X,
  Eye, Download, Mail, BarChart3
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AdminPanel() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')

  // Mock data
  const stats = {
    totalSales: 127450,
    totalOrders: 256,
    activeUsers: 1423,
    conversionRate: 4.8
  }

  const recentOrders = [
    { id: '#ORD-001', customer: 'Sarah Johnson', email: 'sarah@email.com', amount: 497, date: '2025-11-08', status: 'completed' },
    { id: '#ORD-002', customer: 'Michael Chen', email: 'michael@email.com', amount: 497, date: '2025-11-08', status: 'completed' },
    { id: '#ORD-003', customer: 'Emma Davis', email: 'emma@email.com', amount: 497, date: '2025-11-07', status: 'pending' },
    { id: '#ORD-004', customer: 'James Wilson', email: 'james@email.com', amount: 497, date: '2025-11-07', status: 'completed' },
    { id: '#ORD-005', customer: 'Lisa Anderson', email: 'lisa@email.com', amount: 497, date: '2025-11-06', status: 'completed' },
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple authentication (in production, use proper auth)
    if (credentials.email === 'admin@ecommerce.com' && credentials.password === 'admin123') {
      setIsAuthenticated(true)
      setShowLogin(false)
      localStorage.setItem('adminAuth', 'true')
    } else {
      alert('Invalid credentials. Use admin@ecommerce.com / admin123')
    }
  }

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth === 'true') {
      setIsAuthenticated(true)
      setShowLogin(false)
    }
  }, [])

  const handleLogout = () => {
    setIsAuthenticated(false)
    setShowLogin(true)
    localStorage.removeItem('adminAuth')
  }

  if (showLogin) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-8 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold gradient-text mb-2">Admin Panel</h1>
            <p className="text-gray-400">Sign in to access the dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="admin@ecommerce.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Demo credentials:</p>
            <p>admin@ecommerce.com / admin123</p>
          </div>

          <Link href="/">
            <button className="w-full mt-4 py-2 text-gray-400 hover:text-white transition-all">
              ← Back to Home
            </button>
          </Link>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: sidebarOpen ? 0 : -300 }}
          className="fixed left-0 top-0 h-full w-64 glass-effect border-r border-white/10 p-6 z-50"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold gradient-text">Admin Panel</h2>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'dashboard', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
              { id: 'orders', icon: <ShoppingCart className="w-5 h-5" />, label: 'Orders' },
              { id: 'users', icon: <Users className="w-5 h-5" />, label: 'Users' },
              { id: 'analytics', icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics' },
              { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id
                    ? 'bg-primary/20 text-primary'
                    : 'hover:bg-white/5'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={handleLogout}
            className="absolute bottom-6 left-6 right-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </motion.aside>

        {/* Main Content */}
        <div className={`flex-1 transition-all ${sidebarOpen ? 'md:ml-64' : ''}`}>
          {/* Header */}
          <header className="glass-effect border-b border-white/10 px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-white/5 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm font-semibold">Admin User</div>
                  <div className="text-xs text-gray-400">admin@ecommerce.com</div>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center font-bold">
                  A
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="p-6">
            {activeTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h1 className="text-3xl font-bold">Dashboard Overview</h1>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { label: 'Total Sales', value: `$${stats.totalSales.toLocaleString()}`, icon: <DollarSign />, color: 'from-green-400 to-emerald-500' },
                    { label: 'Total Orders', value: stats.totalOrders, icon: <ShoppingCart />, color: 'from-blue-400 to-cyan-500' },
                    { label: 'Active Users', value: stats.activeUsers, icon: <Users />, color: 'from-purple-400 to-pink-500' },
                    { label: 'Conversion Rate', value: `${stats.conversionRate}%`, icon: <TrendingUp />, color: 'from-orange-400 to-red-500' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-effect rounded-xl p-6"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Orders */}
                <div className="glass-effect rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Recent Orders</h2>
                    <button className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg transition-all flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Export
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Order ID</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Customer</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Email</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Amount</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Date</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.map((order, index) => (
                          <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                            <td className="py-3 px-4 font-mono text-sm">{order.id}</td>
                            <td className="py-3 px-4">{order.customer}</td>
                            <td className="py-3 px-4 text-gray-400 text-sm">{order.email}</td>
                            <td className="py-3 px-4 font-semibold">${order.amount}</td>
                            <td className="py-3 px-4 text-gray-400 text-sm">{order.date}</td>
                            <td className="py-3 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                order.status === 'completed'
                                  ? 'bg-green-500/20 text-green-400'
                                  : 'bg-yellow-500/20 text-yellow-400'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <button className="p-2 hover:bg-white/5 rounded-lg transition-all">
                                <Eye className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'orders' && (
              <div className="text-center py-20">
                <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                <h2 className="text-2xl font-bold mb-2">Orders Management</h2>
                <p className="text-gray-400">Full order management interface coming soon</p>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="text-center py-20">
                <Users className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                <h2 className="text-2xl font-bold mb-2">User Management</h2>
                <p className="text-gray-400">User management interface coming soon</p>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="text-center py-20">
                <BarChart3 className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                <h2 className="text-2xl font-bold mb-2">Analytics Dashboard</h2>
                <p className="text-gray-400">Detailed analytics coming soon</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="text-center py-20">
                <Settings className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                <h2 className="text-2xl font-bold mb-2">Settings</h2>
                <p className="text-gray-400">Configuration options coming soon</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
