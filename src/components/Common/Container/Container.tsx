import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="container max-w-[100%] p-[1rem]">{children}</section>
  );
};

export default Container;
