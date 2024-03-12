import { FormikHelpers } from "formik";
import { AnyObjectSchema } from "yup";

export type PropsForm<T> = {
  title?: string;
  classNameTitle?: string;
  dataInputs: DataInputs[];
  initialValues: T;
  validationSchema: AnyObjectSchema;
  labelButton: string;
  classNameButton: string;
  classNameParent: string;
  classNameContainerInputs: string;
  classNameFormik: string;
  onSubmit: (data: T, formkiHelpers: FormikHelpers<T>) => void | Promise<void>;
  classNameContainerButton: string;
  classNameInput?: string;
  labelClassName?: string;
  classNameForm: string;
};

export type DataInputs = {
  label: string;
  name: string;
  type: string;
  textPlaceHolder?: string;
};
