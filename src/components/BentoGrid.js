// components/BentoGrid.jsx

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils"; // or define a simple `cn` if you're not using a utility lib

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  title,
  description,
  className,
  icon,
  header,
  children,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "p-4 bg-white rounded-2xl shadow-md border border-gray-100 transition-all",
        className
      )}
    >
      {icon && <div className="mb-2">{icon}</div>}
      {header && <div className="mb-2">{header}</div>}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      {children}
    </motion.div>
  );
};
