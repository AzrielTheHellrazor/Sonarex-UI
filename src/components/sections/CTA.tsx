import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const CTASection = () => {
  return (
    <section id="waitlist" className="py-24 bg-sonarex-navy">
      <div className="container">
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
            Join our waitlist to be among the first to access Sonarex&apos;s
            intelligent yield optimization platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sonarex-blue focus:border-transparent"
              required
            />
            <Button variant="gradient" size="lg" className="flex-shrink-0">
              Join Waitlist
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
