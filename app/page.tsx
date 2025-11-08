'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Zap, TrendingUp, Award, Lock, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import Scene3D from '@/components/Scene3D'

export default function Home() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Strategies",
      description: "Learn the exact methods used by 7-figure stores"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Implementation",
      description: "Start your store in 24 hours with our templates"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Support",
      description: "Get lifetime access to our community of experts"
    }
  ]

  const modules = [
    "Finding Winning Products",
    "Building Your Store",
    "Marketing & Advertising",
    "Scaling to 6-Figures",
    "Automation & Systems",
    "Advanced Conversion Optimization"
  ]

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <Scene3D />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            E-Commerce Nobel
          </motion.div>
          <Link href="/admin">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="px-4 py-2 glass-effect rounded-lg hover:glow-effect transition-all"
            >
              Admin
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              The Secret of
              <br />
              E-Commerce Nobel
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover the proven blueprint to build, scale, and automate your e-commerce empire from scratch
            </p>

            <div className="flex gap-4 justify-center mb-12">
              <Link href="/purchase">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-lg glow-effect hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Get Started Now
                </motion.button>
              </Link>
            </div>

            <div className="flex gap-8 justify-center items-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Lifetime Access
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                30-Day Money Back
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                500+ Success Stories
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            Why Choose This Course?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            What You'll Master
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 flex items-center gap-4 hover:glow-effect transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <span className="text-lg">{module}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            Success Stories
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", revenue: "$250K in 6 months", quote: "This course transformed my life. I went from zero to profitable store in weeks!" },
              { name: "Michael Chen", revenue: "$500K+ yearly", quote: "The strategies taught here are pure gold. Worth every penny." },
              { name: "Emma Davis", revenue: "$100K in 3 months", quote: "Finally a course that delivers on its promises. Highly recommended!" }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.revenue}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12 glow-effect"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of successful entrepreneurs who transformed their lives with e-commerce
            </p>
            <div className="mb-8">
              <div className="text-5xl font-bold gradient-text mb-2">$497</div>
              <div className="text-gray-400">One-time payment • Lifetime access</div>
            </div>
            <Link href="/purchase">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-xl glow-effect hover:shadow-2xl transition-all inline-flex items-center gap-3"
              >
                <Lock className="w-6 h-6" />
                Secure Checkout
              </motion.button>
            </Link>
            <p className="text-sm text-gray-500 mt-6">
              🔒 Secure payment • 30-day money-back guarantee
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; 2025 E-Commerce Nobel. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
