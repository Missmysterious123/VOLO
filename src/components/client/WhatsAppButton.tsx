"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link href="https://wa.me/917019661105" target="_blank" rel="noopener noreferrer">
        <button className="bg-green-500 text-white rounded-full p-4 shadow-lg flex items-center gap-2 hover:bg-green-600 transition-colors">
            <MessageCircle className="h-6 w-6" />
            <span className="font-semibold">WhatsApp Arattai</span>
        </button>
      </Link>
    </motion.div>
  );
}
