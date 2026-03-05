import { motion } from "framer-motion"
import { fadeInUp } from "../animations/motion"

function AnimatedSection({ children, className }) {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;