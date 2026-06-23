"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 left-0 w-72 bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">BlueCare Support</p>
                  <p className="text-white/80 text-xs">Typically replies within an hour</p>
                </div>
              </div>
            </div>

            {/* Chat bubble */}
            <div className="p-4 bg-[#F8FAFE]">
              <div className="bg-white rounded-xl rounded-tl-none p-4 shadow-sm">
                <p className="text-[#142A33] text-sm leading-relaxed">
                  👋 Hello! How can we help you with your water treatment needs? Our team is ready to assist.
                </p>
                <p className="text-[#8BA3B0] text-xs mt-2">Just now</p>
              </div>
            </div>

            {/* Action */}
            <div className="px-4 pb-4">
              <a
                href="https://wa.me/919987088708?text=Hi%20BlueCare%2C%20I%20would%20like%20to%20know%20more%20about%20your%20water%20treatment%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-3 rounded-lg font-medium text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Start Conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}
