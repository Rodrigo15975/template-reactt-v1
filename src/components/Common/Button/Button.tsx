import { FC, ReactNode } from "react";

type PropsButton = {
  label: string;
  type: "button" | "reset" | "submit";
  btnDefault?: boolean;
  onClick?: () => void;
  className: string;
  children?: ReactNode;
};

const Button: FC<PropsButton> = ({
  className,
  label,
  onClick,
  type,
  children,
  btnDefault,
}) => {
  if (btnDefault)
    return (
      <button
        onClick={onClick}
        className={`bg-light border hover:shadow-none transition rounded-full shadow-md ${className}`}
      >
        {children}
        {label}
      </button>
    );

  return (
    <>
      <button onClick={onClick} type={type} className={className}>
        {children}
        {label}
      </button>
    </>
  );
};

export default Button;
