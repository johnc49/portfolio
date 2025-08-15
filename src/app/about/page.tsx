'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-10 max-w-5xl mx-auto px-6">
      {/* Back Button */}
      <nav className="mb-6">
        <Link
          href="/"
          className="text-blue-500 underline hover:text-blue-700 transition"
        >
          ← Back to Home
        </Link>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        {/* Full-width image */}
        <div className="mb-6">
          <Image
            src="/about.jpg" // Place your photo in public folder
            alt="About Me"
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

        <p className="text-blue-700 text-lg leading-relaxed">I have been in the industry and gained valuable experience working on diverse projects.
          I am a passionate web developer specializing in building modern, responsive, and
          user-friendly websites and web applications. With a strong foundation in HTML, CSS,
          and JavaScript, I leverage frameworks like React, Angular, and Tailwind CSS to create
          smooth, performant, and visually appealing digital experiences. I enjoy turning ideas
          into reality through clean code and thoughtful design, and I’m always eager to learn
          new technologies and best practices to deliver the best solutions for clients and users alike.
        
        </p>
      </motion.div>
    </section>
  );
}
