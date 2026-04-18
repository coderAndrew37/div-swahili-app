"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the consent decision has been made (either 'granted' or 'rejected')
    const hasDecision = document.cookie.includes("cookie-consent=");
    if (!hasDecision) setShow(true);
  }, []);

  const handleDecision = (decision: 'granted' | 'rejected') => {
    // Set cookie that expires in 1 year
    document.cookie = `cookie-consent=${decision}; max-age=31536000; path=/; SameSite=Lax`;
    setShow(false);
    
    // Only reload if they accepted, to initialize tracking scripts
    if (decision === 'granted') {
      window.location.reload();
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-[#0e0e0e] border-t border-[#c8a96e]/20"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white/70 text-sm">
              We use cookies to improve your experience and for ad retargeting. 
              By clicking "Accept," you agree to our use of these tools.
            </p>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleDecision('rejected')}
                className="text-white/40 hover:text-white text-sm font-medium transition-colors px-4"
              >
                Reject
              </button>
              <button 
                onClick={() => handleDecision('granted')}
                className="bg-[#c8a96e] text-[#0a0a0a] px-6 py-2 text-sm font-bold whitespace-nowrap hover:bg-white transition-colors"
              >
                Accept Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}