'use client'

import { motion } from "framer-motion";
import Link from "next/link";

export const Button = ( { text, bgcolor } : { text: string, bgcolor: string } ) => {
    return (
        <Link href='mailto:kontakt@epilog.dk'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`whitespace-nowrap rounded-xl px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-[#5b824b] bg-[${bgcolor}]`}
          >
            {text}
          </motion.button>
        </Link>
    );
}

