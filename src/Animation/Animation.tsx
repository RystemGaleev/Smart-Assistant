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
const AnimationContainerLong = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};
const AnimationContainerFast = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AnimationRotate = {
  show: { opacity: 1, x: 0, rotate: 0 },
  hidden: { opacity: 0, x: -300, rotate: 140 },
};

const AnimationLeftX = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -300 },
};

const AnimationRightX = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 300 },
};
const AnimationTopY = {
  show: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 300 },
};
const AnimationBottomY = {
  show: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -300 },
};
const AnimationOpacity = {
  show: { opacity: 1 },
  hidden: { opacity: 0 },
};

const AnimationScale = {
  show: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const AnimationScaleLeftX = {
  show: { opacity: 1, scale: 1, x: 0 },
  hidden: { opacity: 0, scale: 0, x: -700 },
};

const AnimationProjectContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AnimationProjectCardLeft = {
  show: { opacity: 1, x: 0, rotate: 0 },
  hidden: { opacity: 0, x: -600, rotate: 70 },
};
const AnimationProjectCardRight = {
  show: { opacity: 1, y: 0, rotate: 0 },
  hidden: { opacity: 0, y: -600, rotate: 70 },
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

export {
  AnimationBottomY,
  AnimationTopY,
  AnimationRightX,
  AnimationLeftX,
  AnimationContainer,
  AnimationOpacity,
  AnimationContainerLong,
  AnimationScale,
  AnimationScaleLeftX,
  AnimationPage,
  PageTranstition,
  AnimationContainerFast,
  AnimationProjectContainer,
  AnimationProjectCardLeft,
  AnimationProjectCardRight,
  AnimationRotate,
};
