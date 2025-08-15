'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { X, Linkedin, Mail, Github } from 'lucide-react';

export default function Page() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 120, damping: 12 } 
    },
  };

  return (
    <main className="min-h-screen text-black flex flex-col items-center justify-center px-6 py-12">
      <motion.section
        className="max-w-2xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headshot */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <Image
            src="/headshot.png"
            alt="My Headshot"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
            priority
          />
        </motion.div>

        {/* Paragraph */}
        <motion.p variants={itemVariants} className="text-lg  font-NeueMontreal-Medium mb-6">
          i am a skilled Frontend developer specializing in Angular and JavaScript, with hands-on
          experience deploying and managing applications in Kubernetes environments.
        </motion.p>

        {/* Social Icons */}
        <motion.div 
          variants={itemVariants} 
          className="flex justify-center gap-6 mt-4"
        >
          <a href="https://x.com/jchisowaJohn" target="_blank" rel="noopener noreferrer">
            <X className="w-6 h-6 hover:text-blue-500 transition" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-700 transition" />
          </a>
          <a href="mailto:your@email.com">
            <Mail className="w-6 h-6 hover:text-green-500 transition" />
          </a>
          <a href="https://github.com/johnc49" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-gray-800 transition" />
          </a>
        </motion.div>
      </motion.section>
    </main>
  );
}
