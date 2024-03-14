import { Field } from "formik";
import { PropsInput } from "..";

const Input = ({
  fieldProps,
  touched,
  errors,
  type,
  name,
  className,
  textPlaceHolder,
  label,
  labelClassName,
}: PropsInput) => {
  return (
    <>
      {/* Añadir el estilo y el ancoh a tu comodidad */}
      <div className="w-full flex max-w-[20.625rem] flex-col">
        {label && (
          <label className={labelClassName} htmlFor={name}>
            {label}
          </label>
        )}
        <div className="flex flex-col w-full">
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
            <div className="text-[#FF5876]/90 font-robotoSlab_400 text-[0.9rem]">
              {errors[name]}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
