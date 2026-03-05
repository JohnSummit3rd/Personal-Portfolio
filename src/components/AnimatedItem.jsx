import { motion } from "framer-motion";
import { fadeInUp } from "../animations/motion";

function AnimatedItem({ children, className }) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}

export default AnimatedItem;