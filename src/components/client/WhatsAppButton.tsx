"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

function ArattaiIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.51 5.07-1.38L22 22l-1.38-5.07C21.49 15.58 22 13.85 22 12c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
    )
}

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2"
    >
        <Link href="https://www.arattai.in/" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white rounded-full p-4 shadow-lg flex items-center gap-2 hover:bg-blue-600 transition-colors w-full justify-center">
                <ArattaiIcon />
                <span className="font-semibold">Arattai</span>
            </button>
        </Link>
        <Link href="https://wa.me/917019661105" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white rounded-full p-4 shadow-lg flex items-center gap-2 hover:bg-green-600 transition-colors w-full justify-center">
                <MessageCircle className="h-6 w-6" />
                <span className="font-semibold">WhatsApp</span>
            </button>
        </Link>
    </motion.div>
  );
}
