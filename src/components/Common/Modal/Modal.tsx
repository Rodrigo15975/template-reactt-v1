import { m } from "framer-motion";
import { FC } from "react";
import { PropsModal } from "./Types/modal";
import { modalVariants } from "./variants/variants";

const Modal: FC<PropsModal> = ({ className, children, onClick, type }) => {
  if (type === "BOTTOM-RIGHT")
    return (
      <m.div
        onClick={onClick}
        className={`fixed z-[100] bg-white/50 inset-0 flex items-end justify-end`}
        variants={modalVariants}
        initial={"initial"}
        exit={"exit"}
        animate={"animate"}
      >
        <div className={className} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </m.div>
    );

  return (
    <m.div
      onClick={onClick}
      className={`fixed z-[100] bg-white/50 inset-0 flex justify-center items-center`}
      variants={modalVariants}
      initial={"initial"}
      exit={"exit"}
      animate={"animate"}
    >
      <div className={className} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </m.div>
  );
};

export default Modal;
