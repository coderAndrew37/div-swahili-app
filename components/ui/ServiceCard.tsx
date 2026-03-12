"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="bg-[#0a0a0a] p-8 group hover:bg-[#111] transition-colors duration-300 cursor-default"
    >
      <div className="text-3xl mb-5">{service.icon}</div>
      <h3 className="text-white font-serif text-xl mb-3 group-hover:text-[#c8a96e] transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-white/40 text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}
