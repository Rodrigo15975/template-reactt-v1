import { ReactNode } from "react";

export type PropsModal = {
  children?: ReactNode;
  className: string;
  onClick?: () => void;
  type: "BOTTOM-RIGHT" | "CENTER";
};
