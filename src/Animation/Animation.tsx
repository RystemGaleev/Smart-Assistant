const AnimationContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const AnimationRotate = {
  show: { opacity: 1, x: 0, rotate: 0 },
  hidden: { opacity: 0, x: -300, rotate: 140 },
};

const AnimationLeftX = {
  show: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -400 },
};

const AnimationPage = {
  show: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};
const PageTranstition = {
  duration: 0.3,
  ease: 'easeInOut',
};

export { AnimationLeftX, AnimationContainer, AnimationPage, PageTranstition, AnimationRotate };
