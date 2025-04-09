import { motion } from "framer-motion";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900/20">
      <div className="container px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🔒"
            title="Smart Account"
            description="Securely deposit your stablecoins into your personalized smart account that interfaces with multiple DeFi protocols."
          />
          <FeatureCard
            icon="🤖"
            title="AI Allocation"
            description="Our AI continuously monitors DeFi markets to find the highest APR opportunities and automatically reallocates your funds."
          />
          <FeatureCard
            icon="📈"
            title="Maximized Yields"
            description="Earn passive income with optimized yields while maintaining the stability and security of your stablecoin assets."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl border border-gray-800 hover:border-cyan-900 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}
