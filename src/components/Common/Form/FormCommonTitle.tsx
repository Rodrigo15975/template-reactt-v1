import { FC } from "react";
import { Title } from "..";

type PropsFormCommonTitle = {
  title?: string;
  classNameTitle?: string;
};

const FormCommonTitle: FC<PropsFormCommonTitle> = ({
  title,
  classNameTitle,
}) => {
  return (
    <>
      <Title type="h2" label={title ?? ""} className={classNameTitle} />
    </>
  );
};

export default FormCommonTitle;
