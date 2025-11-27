"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <>
      {/* Transition Overlay */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        style={{ originX: 0 }}
        className="fixed inset-0 z-50 bg-gradient-to-r from-primary to-accent pointer-events-none"
      />

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
