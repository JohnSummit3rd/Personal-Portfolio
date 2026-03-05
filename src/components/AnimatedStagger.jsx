import { motion } from "framer-motion"
import { staggerContainer } from "../animations/motion"

function AnimatedStagger({ children, className }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedStagger;