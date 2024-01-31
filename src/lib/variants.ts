export const SearchModalVariants = {
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 230,
      damping: 25,
      velocity: 10,
      duration: 0.2,
      opacity: { duration: 0.6 },
    },
  },
  initial: {
    opacity: 0,
    scale: 0.1,
    transition: { duration: 0.6 },
  },
  exit: { opacity: 0, scale: 0.1, transition: { duration: 0.6 } },
};

export const ResponsiveNavbarVariants = {
  animate: {
    opacity: 1,
    height: "100vh",
    transition: {
      type: "spring",
      stiffness: 230,
      damping: 25,
      velocity: 10,
      duration: 0.2,
    },
  },
  initial: {
    opacity: 0,
    transition: { duration: 0.6 },
    height: "0%",
  },
};
