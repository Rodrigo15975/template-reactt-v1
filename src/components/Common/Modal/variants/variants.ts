import { Variants } from "framer-motion";

// Modal-variants
export const modalVariants: Variants = {
  initial: { translate: "100%", opacity: 0 },
  animate: { translate: "0", opacity: 1 },
  exit: { translate: "-100%", opacity: 0 },
};
