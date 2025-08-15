'use client';

import Link from 'next/link';
import Image from 'next/image';

type Skill = {
  name: string;
  src: string;
};

const skills: Skill[] = [
  { name: 'Tailwind CSS', src: '/skills/tailwind.png' },
  { name: 'Angular', src: '/skills/angular.jpg' },
  { name: 'Kubernetes', src: '/skills/kubernetes.png' },
  { name: 'JavaScript', src: '/skills/javascript.png' },
  { name: 'CSS', src: '/skills/css.png' },
  { name: 'HTML', src: '/skills/html.png' },
  { name: 'React', src: '/skills/react.png' },
];

export default function Skills() {
  return (
    <section className="py-10 px-6 max-w-5xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        ← Back
      </Link>

      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <Image
              src={skill.src}
              alt={skill.name}
              width={64}
              height={64}
              className="mb-3"
            />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}





