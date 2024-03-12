import * as yup from "yup";

export const validationSchema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  dni: yup.string().required("El DNI es requerido"),
  apellidoMaterno: yup.string().required("El apellido materno es requerido"),
  apellidoPaterno: yup.string().required("El apellido paterno es requerido"),
  email: yup
    .string()
    .email("Ingresa un email válido")
    .required("El email es requerido"),
  telefono: yup.string().required("El teléfono es requerido"),
});
