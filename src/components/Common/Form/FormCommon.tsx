import { Form, Formik, FormikValues } from "formik";
import { Input } from "..";
import FormCommonButton from "./FormCommonButton";
import FormCommonContainerInputs from "./FormCommonContainerInputs";
import FormCommonTitle from "./FormCommonTitle";
import { PropsForm } from "./types/typeForm";

const FormCommon = <T extends FormikValues>({
  dataInputs,
  initialValues,
  title,
  validationSchema,
  classNameButton,
  labelButton,
  classNameParent,
  classNameFormik,
  classNameContainerInputs,
  onSubmit,
  classNameInput,
  classNameContainerButton,
  labelClassName,
  classNameForm,
  classNameTitle
}: PropsForm<T>) => {
  return (
    <div className={classNameParent}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, helper) => {
          onSubmit(data, helper);
        }}
        className={classNameFormik}
      >
        {({ errors, touched, getFieldProps }) => (
          <Form className={classNameForm}>
            <FormCommonTitle title={title ?? ""} classNameTitle={classNameTitle} />
            <FormCommonContainerInputs
              classNameContainerInputs={classNameContainerInputs}
            >
              {dataInputs.map((inputs, index) => (
                <Input
                  key={`${inputs.name}-${index}`}
                  name={inputs.name}
                  labelClassName={labelClassName}
                  label={inputs.label}
                  textPlaceHolder={inputs.textPlaceHolder}
                  type={inputs.type}
                  className={classNameInput}
                  disabled
                  errors={errors}
                  touched={touched}
                  fieldProps={getFieldProps}
                />
              ))}
            </FormCommonContainerInputs>
            <FormCommonButton
              classNameContainerButton={classNameContainerButton}
              classNameButton={classNameButton}
              labelButton={labelButton}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormCommon;
