import { FormikErrors, FormikTouched, FormikValues } from "formik";

export type PropsInput = {
  fieldProps: (name: string) => {
    onChange: (e: React.ChangeEvent) => void; // Función que maneja el evento onChange del campo
    onBlur: (e: React.FocusEvent) => void; // Función que maneja el evento onBlur del campo
    value: string; // Valor actual del campo
    name: string; // Nombre del campo
  };
  errors: FormikValues & FormikErrors<FormData>;
  touched: FormikValues & FormikTouched<FormData>;
  label?: string; // Texto que se utilizará como etiqueta para el input
  type?: string; // Tipo de input, por ejemplo, "text", "password", etc
  name: string; // Nombre único del input.
  className?: string; // Clase CSS que se puede aplicar al input para estilizarlo
  textPlaceHolder?: string;
  disabled?: boolean;
  labelClassName?: string;
};
