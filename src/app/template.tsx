'use client';

import { motion } from "framer-motion";

const Transition = ({ children, className }: {children: React.ReactNode; className?: string}) => (
  <motion.div
    initial={{ y:20, opacity: 0 }}
    animate={{ y:0, opacity: 1 }}
    transition={{ ease: 'easeInOut', duration: 0.75 }}
    className={className}
    >
  {children}
    </motion.div>
);

export default Transition;
