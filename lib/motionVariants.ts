import { Variants } from "framer-motion";

// ✅ function variant (callable)
export const fadeInUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
      ease: [0.25, 0.1, 0.25, 1], // easeOut
    },
  },
});

// ✅ normal static variants (OK to type as Variants)
export const fade: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 1, 1],
    },
  },
};

export const slideRight: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: "0%",
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.35, ease: [0.42, 0, 1, 1] },
  },
};

// fadeInDown for sticky header animation
export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1], // ease-in-out
    },
  },
};