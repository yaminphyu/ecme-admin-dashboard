import React from 'react'
import { motion } from "framer-motion"

export default function Spinner() {
  return (
    <motion.div
      className="w-5 h-5 border-dotted border-4 border-gray-300 border-t-gray-400 rounded-full"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 1,
      }}
    />
  );
}
