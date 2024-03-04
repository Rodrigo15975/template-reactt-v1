import { Field } from "formik";
import { FC } from "react";
import { PropsInput } from "./Types/Input";

const Input: FC<PropsInput> = ({
  fieldProps,
  touched,
  errors,
  type,
  name,
  className,
  textPlaceHolder,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Field
          autoComplete=""
          className={`${className} outline-none border`}
          {...fieldProps(name)}
          type={type}
          name={name}
          id={name}
          placeholder={textPlaceHolder}
        />
        {touched[name] && errors[name] && (
          <div className="font-medium">{errors[name]}</div>
        )}
      </div>
    </>
  );
};

export default Input;
