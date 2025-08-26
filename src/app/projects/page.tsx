'use client';

import Link from 'next/link';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    name: 'ELS-WORTH-R',
    description:
      'An electrical company website created using React.js which offers products and services. A user can login or signup in order to buy a product or request a service such as electrical wiring.',
    tech: ['React'],
    github: 'https://github.com/johnc49/ELS-WORTH-R',
    live: 'https://elsworth-b.netlify.app/',
  },
  {
    name: 'ArtBid',
    description: 'Real-time auctions for original paintings.',
    tech: ['Swift', 'Firebase', 'Cloud Functions'],
    github: 'https://github.com/yourname/artbid',
    live: 'https://artbid.app',
  },
  {
    name: 'Eco Stove',
    description: 'Dashboard for pellet/charcoal usage & climate impact.',
    tech: ['React', 'Vite', 'Zustand', 'Chart.js'],
    github: 'https://github.com/yourname/eco-stove',
  },
];

// Container animation (stagger effect)
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

// Entry directions cycle
const directions = [
  { x: -100, y: 0 }, // left
  { x: 100, y: 0 }, // right
  { x: 0, y: -100 }, // top
  { x: 0, y: 100 }, // bottom
];

// Card variants as a function to accept custom index
const cardVariants = (i: number): Variants => ({
  hidden: { opacity: 0, ...directions[i % directions.length] },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
});

export default function Projects() {
  return (
    <section className="py-10 px-6 max-w-5xl mx-auto">
      {/* Back */}
      <Link
        href="/"
        className="inline-block mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        ← Back
      </Link>

      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FolderGit2 className="w-7 h-7" />
        Projects
      </h2>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            custom={i}
            variants={cardVariants(i)}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{p.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 border border-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {p.github && (
                <Link
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} GitHub`}
                  className="inline-flex items-center gap-1 text-gray-800 hover:text-black"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">GitHub</span>
                </Link>
              )}
              {p.live && (
                <Link
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} Live site`}
                  className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-800"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm font-medium">Live</span>
                </Link>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}



