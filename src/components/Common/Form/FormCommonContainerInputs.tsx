import { FC, PropsWithChildren } from "react";

type PropsFormCommonInputs = {
  classNameContainerInputs: string;
};

const FormCommonContainerInputs: FC<PropsFormCommonInputs & PropsWithChildren> = ({
  classNameContainerInputs,
  children,
}) => {
  return (
    <>
      <div className={classNameContainerInputs}>{children}</div>
    </>
  );
};

export default FormCommonContainerInputs;
