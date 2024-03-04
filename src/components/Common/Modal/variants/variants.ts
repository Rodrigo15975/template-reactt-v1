import { Variants } from "framer-motion";

// Modal-variants
export const modalVariants: Variants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: "0", opacity: 1 },
  exit: { translate: "100%", opacity: 0 },
};
