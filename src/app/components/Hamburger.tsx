



// 'use client';

// import { motion, Variants } from 'framer-motion';

// type HamburgerProps = {
//   open: boolean;
//   setOpen: (open: boolean) => void;
// };

// const lineVariants: Variants = {
//   closed: {
//     rotate: 0,
//     y: 0,
//     opacity: 1,
//     backgroundColor: '#fff',
//   },
//   openTop: {
//     rotate: 45,
//     y: 6, // offset down to overlap center properly
//     backgroundColor: '#3b82f6',
//   },
//   openMiddle: {
//     opacity: 0,
//   },
//   openBottom: {
//     rotate: -45,
//     y: -6, // offset up to overlap center properly
//     backgroundColor: '#3b82f6',
//   },
// };

// export default function Hamburger({ open, setOpen }: HamburgerProps) {
//   return (
//     <motion.button
//       onClick={() => setOpen(!open)}
//       aria-label="Toggle Menu"
//       aria-expanded={open}
//       className="relative flex flex-col justify-center items-center p-0 md:hidden"
//       style={{ zIndex: 1000, width: '32px', height: '32px', gap: 1 }}
//       initial={false}
//       animate={{
//         scale: open ? 1.05 : 1,
//         x: open ? -5 : 1,
//       }}
//       transition={{
//         scale: { type: 'tween', duration: 0.3 },
//         x: { type: 'tween', duration: 0.3 },
//       }}
//     >
//       {[ 'openTop', 'openMiddle', 'openBottom' ].map((variant, i) => (
//         <motion.span
//           key={variant}
//           className="block rounded"
//           style={{
//             height: '2px',
//             width: '20px',
//             transformOrigin: 'center',
//             marginBottom: i < 4 ? '4px' : 4, // spacing between lines (except last)
//           }}
//           variants={lineVariants}
//           animate={open ? variant : 'closed'}
//           transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//         />
//       ))}
//     </motion.button>
//   );
// }







'use client';

import { motion, Variants } from 'framer-motion';

type HamburgerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const lineVariants: Variants = {
  closed: {
    rotate: 0,
    y: 0,
    opacity: 1,
    backgroundColor: '#fff',
  },
  openTop: {
    rotate: 45,
    y: 6, // offset down
    backgroundColor: '#3b82f6',
  },
  openMiddle: {
    opacity: 0,
  },
  openBottom: {
    rotate: -45,
    y: -6, // offset up (same magnitude as top)
    backgroundColor: '#3b82f6',
  },
};

export default function Hamburger({ open, setOpen }: HamburgerProps) {
  return (
    <motion.button
      onClick={() => setOpen(!open)}
      aria-label="Toggle Menu"
      aria-expanded={open}
      className="relative flex flex-col justify-center items-center p-0 gap-1 md:hidden"
      style={{ zIndex: 1000, width: '32px', height: '32px' }}
      initial={false}
      animate={{
        scale: open ? 1.05 : 1,
        x: open ? -5 : 0,
      }}
      transition={{
        scale: { type: 'tween', duration: 0.3 },
        x: { type: 'tween', duration: 0.3 },
      }}
    >
      {['openTop', 'openMiddle', 'openBottom'].map((variant) => (
        <motion.span
          key={variant}
          className="block rounded"
          style={{
            height: '2px',
            width: '20px',
            transformOrigin: 'center',
          }}
          variants={lineVariants}
          animate={open ? variant : 'closed'}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      ))}
    </motion.button>
  );
}








