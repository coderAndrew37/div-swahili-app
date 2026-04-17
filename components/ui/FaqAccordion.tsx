import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

export function FaqAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal>
      <div 
        className={`border border-white/10 transition-all duration-300 ${
          isOpen ? "bg-white/[0.05] border-[#c8a96e]/30" : "bg-transparent"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
        >
          <span className="text-white font-serif text-lg md:text-xl pr-8 italic">
            {question}
          </span>
          <div className={`text-[#c8a96e] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-8 text-white/50 leading-relaxed border-t border-white/5 pt-4">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}