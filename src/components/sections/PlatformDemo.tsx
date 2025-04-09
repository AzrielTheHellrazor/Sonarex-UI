import { motion } from "framer-motion";

export const PlatformDemo = () => {
  return (
    <section className="py-24 bg-sonarex-navy">
      <div className="container">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-xl">
              <div className="bg-gradient-to-br from-sonarex-navy to-black rounded-lg p-6 h-full">
                <div className="border border-gray-800 rounded-lg overflow-hidden">
                  <div className="bg-black px-4 py-2 flex items-center border-b border-gray-800">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-4 font-mono text-xs text-gray-500">
                      app.sonarex.xyz/dashboard
                    </div>
                  </div>
                  <div className="p-4 font-mono text-xs text-gray-400">
                    <div className="flex justify-between text-sonarex-aqua mb-2">
                      <span>{"// Current Allocation"}</span>
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
  "projectedMonthlyYield": "~73 USDC"
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
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">Dynamic Rebalancing</h3>
              <p className="text-gray-400">
                Our AI agent continuously monitors 50+ DeFi protocols and
                automatically rebalances your portfolio to maximize returns
                while managing risk.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Risk Assessment</h3>
              <p className="text-gray-400">
                Smart risk management algorithms evaluate protocol security,
                smart contract audits, and market conditions before allocating
                funds.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Gas Optimization</h3>
              <p className="text-gray-400">
                Our system batches transactions and optimizes for gas
                efficiency, ensuring rebalancing operations don&apos;t eat into
                your profits.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
