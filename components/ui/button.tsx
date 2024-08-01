'use client'

import { motion } from "framer-motion";
import Link from "next/link";

export const Button = ( { text, className, link } : { text: string, className?: string, link: string } ) => {
    return (
        <Link href={link}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`whitespace-nowrap rounded-xl px-4 py-2 font-medium text-white shadow-xl transition-colors ${className}`}
          >
            {text}
          </motion.button>
        </Link>
    );
}

