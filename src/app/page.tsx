// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-3/4 aspect-square rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl" />
      </div>

      {/* Header */}

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Future of On-chain Intelligence
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maximize your stablecoin yields automatically. Our AI agent
            continuously monitors DeFi protocols to allocate your assets to the
            highest-yielding opportunities.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg cursor-not-allowed opacity-80 relative overflow-hidden group"
            >
              <span className="relative z-10">Coming Soon</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ x: "-100%" }}
                animate={{ x: hovered ? "0%" : "-100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-700 bg-black/50 backdrop-blur-sm text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-black/80 transition-colors"
            >
              Join Waitlist
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 px-6 md:px-12 py-24 bg-gradient-to-b from-black to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Effortless Yield Optimization
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sonarex creates a smart account that automatically deploys your
              stablecoins to the highest-yielding opportunities.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl border border-gray-800 hover:border-cyan-900 transition-colors">
              <div className="mb-4 text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Account</h3>
              <p className="text-gray-400">
                Securely deposit your stablecoins into your personalized smart
                account that interfaces with multiple DeFi protocols.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl border border-gray-800 hover:border-cyan-900 transition-colors">
              <div className="mb-4 text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Allocation</h3>
              <p className="text-gray-400">
                Our AI continuously monitors DeFi markets to find the highest
                APR opportunities and automatically reallocates your funds.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl border border-gray-800 hover:border-cyan-900 transition-colors">
              <div className="mb-4 text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Maximized Yields</h3>
              <p className="text-gray-400">
                Earn passive income with optimized yields while maintaining the
                stability and security of your stablecoin assets.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Demo Section */}
      <section className="relative z-10 px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Passive Income, Active Intelligence
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let our AI handle the complexities of DeFi yield farming while you
              enjoy the benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-xl">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 h-full">
                  <div className="border border-gray-800 rounded-lg overflow-hidden">
                    <div className="bg-black px-4 py-2 flex items-center border-b border-gray-800">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="ml-4 font-mono text-xs text-gray-500">
                        sonarex.xyz/dashboard
                      </div>
                    </div>
                    <div className="p-4 font-mono text-xs text-gray-400">
                      <div className="flex justify-between text-cyan-500 mb-2">
                        <span>// Current Allocation</span>
                        <span>Last rebalanced: 2h ago</span>
                      </div>
                      <pre className="overflow-x-auto">
                        {`{
  "totalDeposited": "10,000 USDC",
  "currentAPY": "8.76%",
  "allocations": [
    {
      "protocol": "Aave V3",
      "amount": "4,000 USDC",
      "apy": "5.23%"
    },
    {
      "protocol": "Compound",
      "amount": "3,500 USDC",
      "apy": "4.87%"
    },
    {
      "protocol": "MakerDAO DSR",
      "amount": "2,500 USDC",
      "apy": "19.21%"
    }
  ],
  "nextRebalance": "Estimated in 10h",
  "monthlyYield": "~73 USDC"
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-3">Dynamic Rebalancing</h3>
                <p className="text-gray-400">
                  Our AI agent continuously monitors DeFi protocols and
                  automatically rebalances your portfolio to maximize returns
                  while managing risk.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">Risk Assessment</h3>
                <p className="text-gray-400">
                  Smart risk management algorithms evaluate protocol security,
                  smart contract audits, and market conditions before allocating
                  your funds.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">Gas-Optimized</h3>
                <p className="text-gray-400">
                  Our system batches transactions and optimizes for gas
                  efficiency, ensuring rebalancing operations don't eat into
                  your profits.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-6 md:px-12 py-24 bg-gradient-to-b from-transparent to-cyan-950/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Sonarex?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our platform offers unique advantages for stablecoin holders
              looking to maximize their returns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 p-6 rounded-xl backdrop-blur-sm border border-gray-800"
            >
              <div className="text-cyan-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Higher Returns</h3>
              <p className="text-gray-400">
                Earn up to 40% more yield compared to manually managing your
                stablecoins on single platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 p-6 rounded-xl backdrop-blur-sm border border-gray-800"
            >
              <div className="text-cyan-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Self-Custodial</h3>
              <p className="text-gray-400">
                Maintain complete control of your assets with non-custodial
                smart accounts that only you can access.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 p-6 rounded-xl backdrop-blur-sm border border-gray-800"
            >
              <div className="text-cyan-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparent</h3>
              <p className="text-gray-400">
                Full visibility into all allocation decisions, protocol
                integrations, and yield calculations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 p-6 rounded-xl backdrop-blur-sm border border-gray-800"
            >
              <div className="text-cyan-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customizable</h3>
              <p className="text-gray-400">
                Set your risk preferences and yield targets to personalize the
                AI's allocation strategy to your needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-12 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Optimize Your Stablecoin Yields?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-8"
          >
            Join our waitlist to be among the first to access Sonarex's
            intelligent yield optimization platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-cyan-900/20 transition-all">
              Join Waitlist
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
