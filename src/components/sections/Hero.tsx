import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-sonarex-aqua bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Autonomous Stablecoin Yield Optimization
          </motion.h1>

          <motion.p
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our AI agent continuously monitors DeFi protocols to automatically
            allocate your stablecoins to the highest-yielding opportunities.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button href="#waitlist" variant="gradient" size="lg">
              Join Waitlist
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              How It Works
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
