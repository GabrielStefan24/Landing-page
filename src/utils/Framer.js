export const fadeTransition = (dir, animType, customDelay, animDuration) => {
  return {
    hidden: {
      x: dir === "left" ? 100 : dir === "right" ? -100 : 0,
      y: dir === "up" ? 100 : dir === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: animType,
        delay: customDelay,
        duration: animDuration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomTransition = (customDelay, animDuration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: customDelay,
        duration: animDuration,
        ease: "easeOut",
      },
    },
  };
};

export const slideTransition = (dir, animType, customDelay, animDuration) => {
  return {
    hidden: {
      x: dir === "left" ? "-100%" : dir === "right" ? "100%" : 0,
      y: dir === "up" ? "100%" : dir === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: animType,
        delay: customDelay,
        duration: animDuration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerWrapper = (staggerChild, delayChild) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChild,
        delayChildren: delayChild || 0,
      },
    },
  };
};
