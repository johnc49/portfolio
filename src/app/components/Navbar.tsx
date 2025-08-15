'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Hamburger from './Hamburger';

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeIn' } },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About Me' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900 bg-opacity-90 backdrop-blur-md">
        <Link href="/" className="text-xl font-bold text-white">
          John Chisowa
        </Link>

        <ul className="hidden md:flex gap-6 text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-blue-400 transition">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger with high z-index so it's always above the menu */}
        <Hamburger open={open} setOpen={setOpen} />
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[900] bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <ul className="flex flex-col gap-8 text-white text-2xl font-semibold">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-blue-400 transition block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so page content isn't hidden behind navbar */}
      <div className="h-16" />
    </>
  );
}
