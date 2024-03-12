import { FC } from "react";
import { Button } from "..";

type PropsFormCommonButton = {
  labelButton: string;
  classNameButton: string;
  classNameContainerButton: string;
};

const FormCommonButton: FC<PropsFormCommonButton> = ({
  labelButton,
  classNameContainerButton,
  classNameButton,
}) => {
  return (
    <div className={classNameContainerButton}>
      <Button label={labelButton} className={classNameButton} type="submit" />
    </div>
  );
};

export default FormCommonButton;
