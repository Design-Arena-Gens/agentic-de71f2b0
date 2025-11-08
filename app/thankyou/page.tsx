'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Download, Mail, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Confetti from 'react-confetti'

export default function ThankYou() {
  const [purchaseInfo, setPurchaseInfo] = useState<any>(null)
  const [showConfetti, setShowConfetti] = useState(true)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const info = localStorage.getItem('purchaseInfo')
    if (info) {
      setPurchaseInfo(JSON.parse(info))
    }

    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white relative overflow-hidden">
      {showConfetti && windowSize.width > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}

      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6 glow-effect">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Welcome Aboard! 🎉
          </h1>
          <p className="text-xl text-gray-300">
            Your journey to e-commerce success starts now
          </p>
        </motion.div>

        {purchaseInfo && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-2xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">Order Confirmation</h2>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>Order Number:</span>
                <span className="font-mono text-primary">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span>Customer Name:</span>
                <span className="font-semibold">{purchaseInfo.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Email:</span>
                <span className="font-semibold">{purchaseInfo.email}</span>
              </div>
              <div className="flex justify-between">
                <span>Amount Paid:</span>
                <span className="font-bold text-green-400">${purchaseInfo.amount}</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span>{new Date(purchaseInfo.date).toLocaleDateString()}</span>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-effect rounded-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Award className="w-7 h-7 text-primary" />
            What Happens Next?
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Check Your Email
                </h3>
                <p className="text-gray-400">
                  We've sent your login credentials and course access link to {purchaseInfo?.email}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <Download className="w-5 h-5 text-primary" />
                  Access Your Course
                </h3>
                <p className="text-gray-400">
                  Log in to your student dashboard and start learning immediately
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Join Our Community</h3>
                <p className="text-gray-400">
                  Connect with other students and get support from our expert team
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          <div className="glass-effect rounded-xl p-6 text-center">
            <Download className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Download Resources</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get your bonus templates and checklists
            </p>
            <button className="px-6 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg transition-all">
              Download Now
            </button>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Need Help?</h3>
            <p className="text-sm text-gray-400 mb-4">
              Our support team is here for you 24/7
            </p>
            <button className="px-6 py-2 bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-all">
              Contact Support
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold glow-effect hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Return to Homepage
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
