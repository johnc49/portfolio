'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'Africa/Lusaka',
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full  font-NeueMontreal-Medium text-black-600 text-center py-6 relative">
      <p className="mb-1">&copy; {currentYear} John chisowa. All rights reserved.</p>
      <p>{currentTime} | Lusaka</p>
    </footer>
  );
}
